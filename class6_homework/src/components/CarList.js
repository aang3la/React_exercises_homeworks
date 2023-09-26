// Da imame nekoja pocetna lista so avtomobili 
// i da imame moznost za dodavanje na nov avtomobil vo taa lista. 
// Do sekoj avtomobil od listata da ima kopce Buy so koe bi se kupil avtomobilot 
//i bi se prefrlil vo drugata lista odnosno listata na Owned Cars

// BONUS: moze da se dodade za sekoj avtomobil 
// da ima quantity, odnosno kolku avtomobili postojat
// od toj tip i na toj nacin da se regulira 
// kolku od niv mozat da se kupat i dokolku se 
// kupeni site da go snema od listata za prodazba.
import React, { useState } from "react";

//* Definirame niza na avtomobili koi se dostapni za prodazba
// Sekoj avtomobil ima "id", "brand"(marka) i "quantity"(kolicina na dostapni avtomobili)
export const CarList = () => {
  const initialCarsForSale = [
    { id: 1, brand: "BMW", quantity: 5 },
    { id: 2, brand: "AUDI", quantity: 3 },
    { id: 3, brand: "Ford", quantity: 2 },
  ];

  //* Go koristite "useState" za cuvanje na sostojbata na komponentata
  // "carsForSale" ke sodrzi lista na avtomobili za prodazba, "ownedCars" ke sodrzi lista na avtomobili koi se kupeni, a "newBrand" ke go cuva tekstot od vneseniot nov brend na avtomobil
  const [carsForSale, setCarsForSale] = useState(initialCarsForSale);
  const [ownedCars, setOwnedCars] = useState([]);
  const [newBrand, setNewBrand] = useState("");

  //* Koga korisnikot ke vnese tekst na poleto "Enter new Brand", ovaa f-ja go azurira sostojbata "newBrand" so vrednosta na vneseniot tekst
  const handleNewBrandChange = (e) => {
    setNewBrand(e.target.value);
  };

  //* Koga korisnikot ke klikne na kopceto "Add New Brand" se sozdava nov objekt "newCar" so "id", "brand" go koristi veneseniot tekst za noviot brend, a "quantity" e postaveno na 1
  // Potoa se azurira sostojbata "carsForSale", so noviot avtomobil i se resetira "newBrand"
  const handleAddNewBrand = () => {
    const newCar = { id: carsForSale.id + 1, brand: newBrand, quantity: 1 };
    setCarsForSale([...carsForSale, newCar]);
    setNewBrand("");
  };

  //* Koga korisnikot ke klikne na kopceto "Buy" se azurira sostojbata "carsForSale" za da se namali kolicinata na dostapni avtomobili
  // Ako veke postoi kupen avtomonil so istiot "id", se zgolemuva kolicinata na kupeni avtomobili, inaku se dodava nov kupen avtomobil vo "ownedCars"
  const handleBuy = (car) => {
    const updatedCarsForSale = carsForSale.map((c) =>
      c.id === car.id ? { ...c, quantity: c.quantity - 1 } : c
    );

    const ownedCar = ownedCars.find((c) => c.id === car.id);

    if (ownedCar) {
      ownedCar.quantity += 1;
    } else {
      setOwnedCars([...ownedCars, { id: car.id, brand: car.brand, quantity: 1 }]);
    }

    setCarsForSale(updatedCarsForSale);
  };

  //* Koga korisnikot ke klikne na kopceto "Sell" se azurira sostojbata "ownedCars" za da se namali kolicinata na kupeni avtomobili
  const handleSell = (car) => {
    const updatedOwnedCars = ownedCars.map((c) =>
      c.id === car.id ? { ...c, quantity: c.quantity - 1 } : c
    );

    setOwnedCars(updatedOwnedCars);
  };

  return (
    <div>
      <h1>Cars for Sell</h1>
      <input
        type="text"
        placeholder="Enter new Brand"
        value={newBrand}
        onChange={handleNewBrandChange}
      />
      <button onClick={handleAddNewBrand}>Add New Brand</button>

      <ol>
        {carsForSale.map((car) => (
          <li key={car.id}>
            {car.brand} - {car.quantity} available
            <button onClick={() => handleBuy(car)}>Buy</button>
          </li>
        ))}
      </ol>

      <h1>Owned cars</h1>
      <ol>
        {ownedCars.map((car) => (
          <li key={car.id}>
            {car.brand} - {car.quantity}
            <button onClick={() => handleSell(car)}>Sell</button>
          </li>
        ))}
      </ol>
    </div>
  );
};