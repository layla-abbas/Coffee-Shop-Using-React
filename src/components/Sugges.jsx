import { useEffect, useState } from 'react';
import heart from '../assets/heart.svg'

export default function Sugges() {

    const [coffees, setCoffees] = useState([]);
    const [randomCoffees, setRandomCoffees] = useState([]);
    const [favoriteIds, setFavoriteIds] = useState([]);
  
    useEffect(() => {
    
      fetch('https://api.sampleapis.com/coffee/hot')
        .then(res => res.json())
        .then(data => {
          setCoffees(data);
  
          chooseRandomCoffees(data);
        });

        const storedFavorites = JSON.parse(localStorage.getItem('favoriteCoffees')) || [];
        setFavoriteIds(storedFavorites.map(fav => fav.id)); 
    }, []);
  
    const chooseRandomCoffees = (coffeeData) => {
 
      const selectedCoffees = new Set();
      
      while (selectedCoffees.size < 3 && selectedCoffees.size < coffeeData.length) {
        const randomIndex = Math.floor(Math.random() * coffeeData.length);
        selectedCoffees.add(coffeeData[randomIndex]);
      }
  
      setRandomCoffees(Array.from(selectedCoffees)); 
    };
  
    const addToFavorites = (card) => {
        const favoriteCoffees = JSON.parse(localStorage.getItem('favoriteCoffees')) || [];
        if (!favoriteIds.includes(card.id)) {
          favoriteCoffees.push(card);
          localStorage.setItem('favoriteCoffees', JSON.stringify(favoriteCoffees)); 
    
        
          setFavoriteIds(prev => [...prev, card.id]);
        } else {
     
          const updatedFavorites = favoriteCoffees.filter(fav => fav.id !== card.id);
          localStorage.setItem('favoriteCoffees', JSON.stringify(updatedFavorites));
    
    
          setFavoriteIds(prev => prev.filter(id => id !== card.id));
        }
      };


  return (

<div className="lg:mt-20">

<div>

<h1 className="text-amber-900 ml-10 font-extrabold text-lg
   md:text-4xl md:ml-40 md:tracking-wider
   lg:text-6xl lg:ml-96 lg:tracking-wider">
You May <br />
Like
</h1>
    </div>

    <div>
     
     <div className="flex flex-wrap mx-5 justify-center my-20 gap-4 
md:gap-8 
lg:mx-32 lg:gap-6">
    
     {randomCoffees.length > 0 ? (
        randomCoffees.map((coffee) => (

<div key={coffee.id} style={{backgroundColor:'#F1ECE8'}}
 className=" rounded-2xl w-60 h-fit 
 md:h-80 md:w-64
 lg:h-80 lg:w-72">


<div style={{backgroundImage : `url(${coffee.image})`}} className="
 bg-no-repeat bg-center bg-cover rounded-2xl mx-auto h-28 w-52 mt-3
 lg:w-64 lg:h-32"></div>

<p className="text-lg font-bold mt-2 pl-2 text-amber-900
md:mt-4">
{coffee.title}
</p>

<p className=" px-2 " style={{fontSize:'10px'}}>
{coffee.description}
</p>


<div className="flex justify-between mt-5 items-center mb-4 mx-2
md:mt-7">

<p className="text-amber-900 font-bold text-lg">
${coffee.id}
</p>

<div className="flex items-center  gap-2">

    <button style={{backgroundColor:'#D65A00' , fontSize:'10px'}}
    className="text-white tracking-widest px-4 py-2 rounded-full">
    Download
    </button>

    <button onClick={() => addToFavorites(coffee)}
    className="">
            <img 
                    src={heart} 
                    alt="favorite" 
                    style={{ backgroundColor: favoriteIds.includes(coffee.id) ? '#D65A00'  : '#D7C9BF' }} 
                    className="w-8 p-2 rounded-full" 
                  />
    </button>
</div>

</div>


          </div>
          
        ))
      ) : (
        <p>Loading...</p>
      )}
   
     </div>
     
      </div>


</div>
  )
}
