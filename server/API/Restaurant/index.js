// library
import express  from "express";

//validation
import { ValidateRestaurantCity,ValidateRestaurantSearchString } from "../../validation/resturant.js";
import { ValidateId } from "../../validation/common.js";


// data model

 import {RestaurantModel} from "../../database/restaurant/index.js"


//route
 const Router = express.Router();

 /**
 * Router    /
 * Des        GET all the restaurant according to the location
 * Params     none
 * access     public
 * method     GET
 * http://localhost:4000/restaurant/
 */

 Router.get('/', async(req,res)=>{
     try{
        await ValidateRestaurantCity(req.query);
         const{city} = req.query;
         const restaurants = await RestaurantModel.find({ city});
         if(restaurants.length === 0){
             return res.json({error:"no restaurants found in the city"});
         }

         return res.json({restaurants});


     }catch(error){
         return res.status(500).json({ error: error.message});

     }
 });

  /**
 * Router    /
 * Des        GET individual restaurant details based on id
 * Params     none
 * access     public
 * method     GET
 * http://localhost:4000/restaurant/
 */

  Router.get("/:_id",async(req,res) => {
    try{
        await ValidateId(req.params);
        const{_id}= req.params;
        const restaurant = await RestaurantModel.findById(_id);

        if(!restaurant)
        return res.status(400).json({error:"Restaurant Not Found"});
        return res.json({restaurant: restaurant});

    }catch(error){
        return res.status(500).json({error:error.message});
        
    }

} );

  /**
 * Router    /search
 * Des        GET  restaurant details based on search string
 * Params     none
 * access     public
 * method     GET
 * http://localhost:4000/restaurant/
 */

  Router.get("/search/:searchString",async(req,res)=>{
      /**
       * searchString = raj
       * results = {
       * Raj hotel
       * raj row
       * Ronda
       * $option:"i"= not case is uppercase or smallage
       * }
      
       */
      try{
          await ValidateRestaurantSearchString(req.params);
        const { searchString} = req.params;
            const restaurants = await RestaurantModel.find({
                name: {$regex: searchString, $option:"i"},
            });
            if(!restaurants) return res
            .status(404)
            .json({error:`no restaurants matched with ${searchString}`});

            return res.json({restaurants});
      }catch(error){
        return res.status(500).json({error:error.message});
      }
  })

export default Router;