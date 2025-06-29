import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useFavorites } from '../../context/FavoritesContext';
import './ConsoleCard.css';

const ConsoleCard = ({ console }) => {
    const { toggleFavorite, isFavorite } = useFavorites();



    return (
        <div className="console-card">
            <Link to={`/consoles/${console.id}`} className="console-link">
                <h2>{console.title}</h2>
                <p>Category: {console.category}</p>
            </Link>

            <div className="icon-container">
                <button
                    className="icon-button-console"
                    aria-label="Preferiti"
                    onClick={() => toggleFavorite(console)}
                >
                    <FaHeart color={isFavorite(console.id) ? 'red' : 'grey'} />
                </button>
            </div>
        </div>

    );
};

export default ConsoleCard;
