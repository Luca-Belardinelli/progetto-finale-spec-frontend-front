import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import { FaHeart, FaBalanceScale } from "react-icons/fa";
import "./ConsoleDetails.css";
import { useCompare } from "../../context/CompareContext";

export default function ConsoleDetails() {

    const { id } = useParams();
    const [consoleData, setConsoleData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { toggleFavorite, isFavorite } = useFavorites();
    const { addToCompare, isInCompare } = useCompare();


    const BASE_URL = import.meta.env.VITE_API_URL;


    useEffect(() => {
        const fetchConsole = async () => {
            try {
                const response = await fetch(`${BASE_URL}/consoles/${id}`);
                if (!response.ok) {
                    throw new Error(`Errore HTTP ${response.status}`);
                }
                const data = await response.json();
                setConsoleData(data.console)
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchConsole(); // Avvio la fetch
    }, [id]);

    if (loading) return <div>Caricamento...</div>;
    if (error) return <div>Errore: {error}</div>;
    if (!consoleData) return <div>Nessuna console trovata o errore di caricamento.</div>;

    const {
        title,
        category,
        brand,
        releaseYear,
        price,
        description,
        imageUrl,
        id: consoleId, // id: per evitare conflitti con id da useParams
        resolution,
        storage,
        popularGames,
        dimensions,
        weightKg,
        batteryLifeHrs,
    } = consoleData;

    // Array per i dettagli opzionali 
    const optionalDetails = [
        { label: 'Risoluzione', value: resolution },
        { label: 'Storage', value: storage },
        { label: 'Giochi popolari', value: popularGames },
        { label: 'Dimensioni', value: dimensions },
        { label: 'Peso ', value: weightKg },
        { label: 'Durata batteria ', value: batteryLifeHrs },
    ];

    return (
        <div className="container_detail">

            <h1 className="title_console">{title}</h1>

            <img className="console-image" src={imageUrl} alt={title} />

            {/* Info principali */}
            <div className="console-info">
                <p><strong>Categoria:</strong> {category}</p>
                <p><strong>Marca:</strong> {brand}</p>
                <p><strong>Anno di uscita:</strong> {releaseYear}</p>
                <p><strong>Prezzo:</strong> €{price}</p>

                {/*  dettagli opzionali  */}
                {optionalDetails.map(({ label, value }) =>
                    value !== undefined && value !== null && (
                        <p key={label}><strong>{label}:</strong> {value}</p>
                    )
                )}

                <p><strong>Descrizione:</strong> {description}</p>
            </div>

            <div className="icon-actions">
                {/* Bottone preferiti */}
                <button
                    onClick={() => toggleFavorite(consoleData)}
                    className="button_fav_detail"
                    aria-label={isFavorite(consoleId) ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
                >
                    <FaHeart color={isFavorite(consoleId) ? "red" : "grey"} />
                </button>

                {/* Bottone confronto  */}
                <button
                    className="icon-button-detail"
                    aria-label="Comparazione"
                    onClick={() => {
                        if (!isInCompare(consoleId)) {
                            addToCompare(consoleData);
                        } else {
                            alert(`${title} è già presente nel confronto.`);
                        }
                    }}
                    title="Vai alla pagina di comparazione"
                >
                    <FaBalanceScale color={isInCompare(consoleId) ? "red" : "grey"} />
                </button>
            </div>
        </div>
    );
}
