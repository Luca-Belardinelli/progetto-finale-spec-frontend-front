import { useState, useEffect, useMemo, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
import ConsoleCard from '../../components/ConsoleCard/ConsoleCard';
import './HomePage.css';

function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => callback(value), delay);
    };
}

function Home() {
    const [consoles, setConsoles] = useState([]);
    const [error, setError] = useState(null);

    const BASE_URL = import.meta.env.VITE_API_URL;

    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [sortBy, setSortBy] = useState('title');
    const [sortOrder, setSortOrder] = useState(1);

    const debounceSearch = useCallback(debounce(setSearchQuery, 500), []);

    useEffect(() => {
        const fetchConsoles = async () => {
            try {
                const response = await fetch(`${BASE_URL}/consoles`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setConsoles(data);
            } catch (err) {
                console.error('Fetch error:', err);
                setError(`Errore nel caricamento delle console: ${err.message}`);
            }
        };

        fetchConsoles();
    }, [BASE_URL]);

    const sortIcon = sortOrder === 1 ? '↓' : '↑';


    const handleSort = (field) => {
        if (sortBy === field) setSortOrder(prev => prev * -1);
        else {
            setSortBy(field);
            setSortOrder(1);
        }
    };

    const categories = useMemo(() => {
        const cats = consoles.map(c => c.category);
        return ['All', ...new Set(cats)];
    }, [consoles]);

    const filteredAndSortedConsoles = useMemo(() => {
        return consoles
            .filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .filter(c => categoryFilter === 'All' || c.category === categoryFilter)
            .sort((a, b) => {
                let comp = 0;
                if (sortBy === 'title') comp = a.title.localeCompare(b.title);
                else if (sortBy === 'category') comp = a.category.localeCompare(b.category);
                return comp * sortOrder;
            });
    }, [consoles, searchQuery, categoryFilter, sortBy, sortOrder]);

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="filters-container">

                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Cerca nel sito..."
                        onChange={e => debounceSearch(e.target.value)}
                    />
                    <FaSearch className="search-icon" />
                </div>

                <select
                    value={categoryFilter}
                    onChange={e => setCategoryFilter(e.target.value)}
                >
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>

                <div className="sort-buttons">
                    <button onClick={() => handleSort('title')}>
                        Ordina per Nome {sortBy === 'title' && sortIcon}
                    </button>
                </div>

            </div>

            <div className="console-grid">
                {filteredAndSortedConsoles.map(console => (
                    <ConsoleCard key={console.id} console={console} />
                ))}
            </div>
        </div>
    );
}

export default Home;
