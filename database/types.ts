export type Console = {
    // Proprietà Obbligatorie
    title: string;
    category: "fissa" | "portatile" | "ibrida";

    // Informazioni Base
    brand: string;
    releaseYear: number;
    price: number;
    description: string;
    imageUrl: string;

    // Caratteristiche per il Confronto 
    resolution?: string; // Risoluzione di output (es: "4K", "1080p", "720p")
    storage?: string; // Capacità di archiviazione (es: "825GB SSD", "1TB HDD", "64GB Interno")
    popularGames?: string[];

    // Dettagli Fisici
    dimensions?: string;
    weightKg?: number;
    batteryLifeHrs?: number; // Durata media della batteria in ore (solo per console portatili/ibride)
};