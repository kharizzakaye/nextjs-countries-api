import { useQuery } from '@tanstack/react-query';
import { Country } from '@/types/country';

const fetchCountryByName = async (): Promise<Country[]> => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!response.ok) {
        throw new Error('Failed to fetch country information');
    }

    const data = await response.json();
    return data[0];
};

export const useCountryByName = (name:string) => {
    return useQuery<Country[], Error>({
        queryKey: ['countries'], // Pass queryKey as part of the options object
        queryFn: fetchCountryByName, // Specify the query function
    });
};