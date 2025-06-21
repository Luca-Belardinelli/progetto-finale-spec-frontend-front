import { useCompare } from "../../context/CompareContext";

import "./ConsoleComparator.css";

export default function ComparePage() {

    const { compareItems, removeFromCompare, clearCompare } = useCompare();

    if (compareItems.length === 0) {
        return <div className="compare-title-page">Nessuna console selezionata per il confronto.</div>;
    }



    return (
        <div className="compare-page">

            <div className="compare-grid">
                {compareItems.map(console => (
                    <div key={console.id} className="compare-card">
                        <h2>{console.title}</h2>
                        <img src={console.imageUrl} alt={console.title} />

                        <div className="compare-info">
                            <p><strong>Marca:</strong> {console.brand}</p>
                            <p><strong>Categoria:</strong> {console.category}</p>
                            <p><strong>Anno di uscita:</strong> {console.releaseYear}</p>
                            <p><strong>Prezzo:</strong> €{console.price}</p>
                            {console.resolution && <p><strong>Risoluzione:</strong> {console.resolution}</p>}
                            {console.storage && <p><strong>Storage:</strong> {console.storage}</p>}
                            {console.popularGames && (<p> <strong>Giochi popolari:</strong> {console.popularGames} </p>)}
                            {console.dimensions && <p><strong>Dimensioni:</strong> {console.dimensions}</p>}
                            {console.weightKg && <p><strong>Peso:</strong> {console.weightKg} kg</p>}
                            {console.batteryLifeHrs && <p><strong>Durata Batteria:</strong> {console.batteryLifeHrs} h</p>}
                            <p><strong>Descrizione:</strong> {console.description}</p>
                        </div>

                        <button onClick={() => removeFromCompare(console.id)}>Rimuovi</button>
                    </div>
                ))}
            </div>

            <button onClick={clearCompare}>Resetta Confronto</button>
        </div>
    );
}
