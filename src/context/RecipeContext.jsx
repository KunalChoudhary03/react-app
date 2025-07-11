import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
   const [data, setdata] = useState([]);

   useEffect(()=>{
    setdata(JSON.parse(localStorage.getItem("items")) || [])
   },[]);
  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
