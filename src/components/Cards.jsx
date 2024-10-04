import { useEffect, useState } from "react";
import heart from '../assets/heart.svg';
import search from '../assets/search.svg';
import Aos from "aos";
import 'aos/dist/aos.css';


const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const debouncedSearchTerm = useDebounce(searchTerm, 500); 

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(res => res.json())
      .then(data => setCards(data));

    const storedFavorites = JSON.parse(localStorage.getItem('favoriteCoffees')) || [];
    setFavoriteIds(storedFavorites.map(fav => fav.id));
  }, []);


  useEffect(() => {
    const filtered = cards.filter(card => 
      card.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [debouncedSearchTerm, cards]);


  useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  

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
    <div className="mt-12
     md:mt-16
     lg:mx-20 lg:mt-14">

      <div className="flex justify-between mx-5 md:mx-20 lg:mx-48">

        <p className="text-amber-800 font-bold text-lg
         md:text-xl
         lg:text-2xl">
          Products
        </p>

        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // تحديث قيمة البحث
            style={{ backgroundColor: '#F1ECE8' }}
            className="rounded-full h-7 w-40 p-2 text-sm text-amber-900 font-semibold focus:outline-amber-900
             md:w-44 md:h-8
             lg:w-52 lg:h-9"
          />
          <img
            src={search}
            alt=""
            className="absolute bottom-80  w-4 right-8
             md:bottom-44  md:right-24
             lg:bottom-28 lg:right-72 lg:w-5"
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-5 justify-center mt-10 gap-4 
      md:gap-8 md:mt-9
     lg:mx-32 lg:gap-10">

        {filteredCards.map(card => (
          <div key={card.id} data-aos='fade-up' style={{ backgroundColor: '#F1ECE8' }}
            className=" rounded-2xl w-60 h-fit 
            md:h-80 md:w-64 
            lg:h-80 lg:w-72">

            <div
              style={{ backgroundImage: `url(${card.image})` }}
              className="bg-no-repeat bg-center bg-cover rounded-2xl mx-auto h-28 w-52 mt-3 
              lg:w-64 lg:h-32">
            </div>

            <p className="text-lg font-bold mt-2 pl-2 text-amber-900 md:mt-4">
              {card.title}
            </p>

            <p className="px-2" style={{ fontSize: '10px' }}>
              {card.description}
            </p>

            <div className="flex justify-between mt-5 items-center mb-4 mx-2 
            md:mt-7">

              <p className="text-amber-900 font-bold text-lg">
                ${card.id}
              </p>

              <div className="flex items-center  gap-2">
                <button
                  style={{ backgroundColor: '#D65A00', fontSize: '10px' }}
                  className="text-white tracking-widest px-4 py-2 rounded-full">
                  Download
                </button>

                <button onClick={() => addToFavorites(card)}>
                  <img
                    src={heart}
                    alt="favorite"
                    style={{ backgroundColor: favoriteIds.includes(card.id) ? '#D65A00' : '#D7C9BF' }}
                    className="w-8 p-2 rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
