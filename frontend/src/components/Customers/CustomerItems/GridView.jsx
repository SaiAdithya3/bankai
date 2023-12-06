import React from 'react';
import CustomerCard from '../CustomerCard';



const GridView = () => {
  return (
    <>
      <div className="w-full p-8">
        <div className="w-full flex flex-wrap gap-4">

          <CustomerCard name="Shiva Don" color="bg-teal-600" project="Trump Towers" flat="A 105"/>
          <CustomerCard name="Mourya Model" color="bg-red-600" project="Sky Towers" flat="D 306"/>
          <CustomerCard name="Shanthabai" color="bg-yellow-600" project="Burj Khalifa" flat="B 305"/>
          <CustomerCard name="Taylor Swift" color="bg-slate-600" project="Burj Al Arab" flat="F 265"/>
          <CustomerCard name="Lana Del Rey" color="bg-blue-600" project="Bahamas" flat="D 826"/>
          <CustomerCard name="Alyx Star" color="bg-purple-600" project="Weeknd Towers" flat="C 905"/>
        </div>
      </div>
    </>
  )
}

export default GridView