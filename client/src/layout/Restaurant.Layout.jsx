import React from 'react'
 import { useState } from 'react';

// //component
import Navbar from '../components/Navbar';
import ImageGrid from '../components/restaurant/ImageGrid'

 function Restaurantlayout() {
    const [restaurant, setRestaurant] = useState({
        images: [
          "https://b.zmtcdn.com/data/pictures/chains/3/307893/ac9e6b3236967e1e255e14e24cc0c9e7.jpg",
          "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
          "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",
          "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
          "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg"
        ],
        name: "Bakehouse Comfort",
        cuisine: "Bakery, Desserts, Fast Food",
        address: "Biryani, Hyderabadi, Andhra, North Indian, Chinese, Desserts",
        restaurantRating: 4.1,
        deliveryRating: 3.2,
      });
    //   const images=[
    //     "https://b.zmtcdn.com/data/pictures/chains/3/307893/ac9e6b3236967e1e255e14e24cc0c9e7.jpg",
    //     "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
    //     "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",
    //     "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
    //     "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",

    //   ]
   
    return (
        <>
        
             <Navbar/> 
            <div className="container mx-auto px-4 mt-8 lg:px-20 pb-10">
                  <ImageGrid images={restaurant.images} />          
            </div>
            
            
        </>
    )
}

export default Restaurantlayout;