"use client";

import CardComponent from "@/components/CardComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { useCountries } from "@/hooks/fetchCountries";

export default function Home() 
{
  const { data, isLoading, isError } = useCountries();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  return (
    <>
      <NavbarComponent />

      <div className="container mx-auto px-4">
        <CardComponent countriesList={data} />
      </div>
    </>
  );
}
