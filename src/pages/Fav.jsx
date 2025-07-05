import { useContext } from "react";
import ItemCard from "../components/ItemCard";
import RecipeContext from "../context/RecipeContext";
const Fav = () => {
   const favorite = JSON.parse(localStorage.getItem("fav") || []);
  const renderrecipes = favorite.map((recipe)=>(<ItemCard  key= {recipe.id}recipe={recipe}/>
  ))
  return (
    <div className='flex flex-wrap'>
     <span className="text-center text-red-400 font-black"> {favorite.length > 0 ? renderrecipes : "No favorite Found !!"}</span>
    </div>
  )
  
}

export default Fav
