import { useFavorites } from '../../context/FavoritesContext';
import './FavoritesPage.css';
import { FaHeart } from 'react-icons/fa';

const FavoritesPage = () => {
    const { favorites, toggleFavorite } = useFavorites();

    if (favorites.length === 0) {
        return <h1 className="no-favorites-message">
            Non hai ancora aggiunto nessuna console tra i preferiti.
        </h1>;
    }


    return (
        <div className="favorites-grid">
            {favorites.map((console) => (
                <div key={console.id} className="console-card">

                    <h2>{console.title}</h2>
                    <p>Category: {console.category}</p>


                    <div className="icon-container">
                        <button
                            className="icon-button-console"
                            aria-label="Preferiti"
                            onClick={() => toggleFavorite(console)}
                        >
                            <FaHeart color="red" />
                        </button>

                    </div>
                </div>
            ))}
        </div>

    );
};

export default FavoritesPage;
