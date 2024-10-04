import { useEffect, useState } from "react";

export default function FavCards() {


    const [favoriteCoffees, setFavoriteCoffees] = useState([]);


    useEffect(() => {
      const savedFavorites = JSON.parse(localStorage.getItem('favoriteCoffees')) || [];
      setFavoriteCoffees(savedFavorites);
    }, []);
    

  return (
    <div className="flex justify-center ">
    <div className="lg:w-5/6">
 
 <h2 className="text-amber-900 text-center mt-20 font-bold text-lg
 md:text-3xl
 lg:text-6xl">
 Your Favorite Coffees
 </h2>
 
 
 {favoriteCoffees.length > 0 ? (
   favoriteCoffees.map((coffee, index) => (
 
 <div key={index} className="mx-10 my-16
 md:flex md:justify-between md:mx-32
 lg:flex lg:justify-evenly lg:mx-60 " >
 
 <div style={{backgroundImage : `url(${coffee.image})`}} className="
 bg-no-repeat bg-center bg-cover rounded-2xl mx-auto h-28 w-52 mt-3
 md:w-60 md:h-52
 lg:w-96 lg:h-80"></div>
 
 
 <div className="
 md:w-5/12 md:mt-5
 lg:mt-10">
 
 
 <p className="text-amber-900 font-bold mt-2
 md:text-3xl
 lg:text-6xl ">
 {coffee.title}</p>
 
 <p className="text-xs mt-1
 lg:mt-4"
 >{coffee.description}</p>
 
 <div className="flex justify-between  mt-4
 md:mt-5
 lg:mt-8 ">
 
 <p style={{color:"#D65A00"}}
 className="text-amber-600 font-bold text-xl
 lg:text-4xl"
 >${coffee.id}</p>
 
 <button style={{backgroundColor:'#D65A00'}}
 className="text-white tracking-widest px-3 py-0 rounded-full
 md:text-sm md:py-2 md:px-4
 lg:py-2 lg:px-4">
 Download
 </button>
 
 </div>
 
 </div>
 
     </div>
   ))
 ) : (
 
   <p className="text-amber-900 text-center my-9 font-bold text-lg
   md:text-3xl
   lg:text-6xl"
   >No favorite coffees selected Yet !!</p>
 )}
 </div>
 
    </div>
  )
}
