"use client";

import { useCountries } from "@/hooks/fetchCountries";

export default function Home() 
{
  const { data, isLoading, isError } = useCountries();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  return (
    <div>
      <ul>
        {data.map((country: any) => (
          <p key={country.name.common}>{country.name.common}</p>
        ))}
      </ul>
      
    </div>
  );
}
