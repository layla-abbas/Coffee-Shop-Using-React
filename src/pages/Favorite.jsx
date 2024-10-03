import { useEffect, useState } from "react";
import Nav from '../components/Nav'


export default function Favorite() {

  const [favoriteCoffees, setFavoriteCoffees] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteCoffees')) || [];
    setFavoriteCoffees(savedFavorites);
  }, []);

  return (
    <>
    <Nav />

    <div>

      <h2 className="text-amber-800 text-center my-9 font-smibold text-lg
md:text-xl
lg:text-2xl">
    Your Favorite Coffees
      </h2>


      {favoriteCoffees.length > 0 ? (
        favoriteCoffees.map((coffee, index) => (

          <div key={index} className="mx-10" >

<div style={{backgroundImage : `url(${coffee.image})`}} className="
 bg-no-repeat bg-center bg-cover rounded-2xl mx-auto h-28 w-52 mt-3
 lg:w-64 lg:h-32"></div>

            <p className="text-amber-800 font-bold">{coffee.title}</p>

            <p>{coffee.description}</p>

            <p>${coffee.id}</p>

          </div>
        ))
      ) : (

        <p>No favorite coffees selected</p>

      )}
    </div>
    </>
  );
}
