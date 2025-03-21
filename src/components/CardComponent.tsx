import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
  
const CardComponent = (countriesList: any) => {
  return (
    <div className='grid grid-cols-4 gap-8 mt-32'>
        {countriesList.countriesList.map((country: any) => (
          <Card key={country.name.common}>
            <Image
              src={country.flags?.png}
              alt={`Flag of ${country.name.common}`}
              width={100}
              height={200}
              unoptimized
              className='w-full'
            />

            <CardHeader>
                <CardTitle>{country.name.common}</CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                  <div><span>Population:</span>{ Number(country.population).toLocaleString() }</div>
                  <div><span>Region:</span>{ country.region }</div>
                  <div><span>Capital:</span>{ country.capital }</div>
                </div>
            </CardContent>
        </Card>
        ))}
    </div>
  )
}

export default CardComponent