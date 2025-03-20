export interface Country {
    name: {
        common: string;
        official: string;
    };
    region: string;
    subregion: string;
    population: number;
    flags: {
        png: string;
        svg: string;
    };
    capital: string[];
    languages: Record<string, string>;
    currencies: Record<string, { name: string; symbol: string }>;
    borders: string[];
  }
  