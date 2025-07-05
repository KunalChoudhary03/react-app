import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();

  
  const recipe = data.find((r) => params.id === r.id);

  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      inst: recipe?.inst ? (Array.isArray(recipe.inst) ? recipe.inst.join(", ") : recipe.inst) : "", // Join array back to string for textarea
      desc: recipe?.desc,
      ingr: recipe?.ingr ? (Array.isArray(recipe.ingr) ? recipe.ingr.join(", ") : recipe.ingr) : "", // Join array back to string for textarea
      category: recipe?.category,
    },
  });

  
  const UpdateHandler = (updatedFields) => {
    const index = data.findIndex((r) => params.id === r.id);

    
    updatedFields.ingr = updatedFields.ingr.split(",").map(item => item.trim()).filter(item => item !== "");
    updatedFields.inst = updatedFields.inst.split(",").map(item => item.trim()).filter(item => item !== "");

    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...updatedFields };
    setdata(copydata);
    localStorage.setItem("items", JSON.stringify(copydata));
    toast.success("Entry Updated Successfully!");
  };

 
  const DeleteHandler = () => {
    
    const filterdata = data.filter((r) => r.id !== params.id);
    setdata(filterdata);
    localStorage.setItem("items", JSON.stringify(filterdata));

  
    const favData = JSON.parse(localStorage.getItem("fav")) || [];
    const updatedFav = favData.filter((r) => r.id !== params.id);
    localStorage.setItem("fav", JSON.stringify(updatedFav));

    toast.success("Entry Deleted Successfully!");
    navigate("/items"); 
  };

  
  const [favorite, setfavorite] = useState(() => {
    
    const storedFav = localStorage.getItem("fav");
    return storedFav ? JSON.parse(storedFav) : [];
  });

  
  const isFavorite = favorite.some((f) => f.id === recipe?.id);

 
  const FavHandler = () => {
    if (recipe && !isFavorite) {
      const updatedFav = [...favorite, recipe];
      setfavorite(updatedFav);
      localStorage.setItem("fav", JSON.stringify(updatedFav));
      toast.info("Added to favorites!");
    }
  };

  
  const UnfavHandler = () => {
    if (recipe && isFavorite) { 
      const filterfav = favorite.filter((f) => f.id !== recipe.id);
      setfavorite(filterfav);
      localStorage.setItem("fav", JSON.stringify(filterfav));
      toast.info("Removed from favorites!");
    }
  };

  useEffect(() => {
    console.log("SingleRecipe.jsx Mounted");
    return () => {
      console.log('SingleRecipe.jsx Unmounted');
    };
  }, []);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-white text-xl font-semibold">
        Loading... or Item Not Found!
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row p-6 sm:p-8 lg:p-10 gap-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 transition-all duration-500 ease-in-out">
     
      <div className="relative flex-1 p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col items-center lg:items-start text-center lg:text-left">
        
        <i
          onClick={isFavorite ? UnfavHandler : FavHandler}
          className={`absolute top-6 right-6 text-4xl cursor-pointer transition-colors duration-200
                      ${isFavorite ? "ri-heart-fill text-red-500" : "ri-heart-line text-gray-400 dark:text-gray-500 hover:text-red-500"}`}
        ></i>

        
        <img
          className="w-full max-w-sm h-64 object-cover object-center rounded-lg mb-6 shadow-md border border-gray-200 dark:border-gray-600"
          src={recipe.image}
          alt={recipe.title}
        />

        
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight">
          {recipe.title}
        </h1>

       
        <p className="text-blue-600 dark:text-blue-400 text-lg font-semibold mb-4">
          Reported By: {recipe.chef}
        </p>

       
        <p className="text-gray-700 dark:text-gray-300 text-md font-medium mb-4">
          Status: <span className={`font-bold ${recipe.category === 'Lost' ? 'text-red-500' : 'text-green-500'}`}>{recipe.category}</span>
        </p>

        <div className="mb-4 w-full">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">Description:</h3>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            {recipe.desc}
          </p>
        </div>

        <div className="mb-4 w-full">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">Location:</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            {Array.isArray(recipe.ingr) && recipe.ingr.length > 0 ? (
              recipe.ingr.map((ing, index) => <li key={index}>{ing}</li>)
            ) : (
              <li>Not specified</li>
            )}
          </ul>
        </div>

        <div className="mb-4 w-full">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">Contact Information:</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            {Array.isArray(recipe.inst) && recipe.inst.length > 0 ? (
              recipe.inst.map((ins, index) => <li key={index}>{ins}</li>)
            ) : (
              <li>Not specified</li>
            )}
          </ul>
        </div>
      </div>

      <form
        className="flex-1 w-full max-w-xl p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:shadow-2xl"
        onSubmit={handleSubmit(UpdateHandler)}
      >
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
          Update Item Details
        </h2>

        <div className="mb-5">
          <input
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 placeholder-gray-600 dark:placeholder-gray-400 transition-colors duration-200"
            {...register("image", { required: "Image URL is required" })}
            type="url"
            placeholder="Image URL of the item"
          />
          {errors.image && <small className="text-red-500 text-sm mt-1 block">{errors.image.message}</small>}
        </div>

        <div className="mb-5">
          <input
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 placeholder-gray-600 dark:placeholder-gray-400 transition-colors duration-200"
            {...register("title", { required: "Item Name is required" })}
            type="text"
            placeholder="Name of Item (e.g., Wallet, Keys, Phone)"
          />
          {errors.title && <small className="text-red-500 text-sm mt-1 block">{errors.title.message}</small>}
        </div>

        <div className="mb-5">
          <input
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 placeholder-gray-600 dark:placeholder-gray-400 transition-colors duration-200"
            {...register("chef", { required: "Your Name/Reporter's Name is required" })}
            type="text"
            placeholder="Your Name / Reporter's Name"
          />
          {errors.chef && <small className="text-red-500 text-sm mt-1 block">{errors.chef.message}</small>}
        </div>

        <div className="mb-5">
          <textarea
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 placeholder-gray-600 dark:placeholder-gray-400 transition-colors duration-200 min-h-[100px] resize-y"
            {...register("desc", { required: "Description is required" })}
            placeholder="Provide a detailed description (e.g., color, brand, condition, unique marks)"
          ></textarea>
          {errors.desc && <small className="text-red-500 text-sm mt-1 block">{errors.desc.message}</small>}
        </div>

        <div className="mb-5">
          <textarea
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 placeholder-gray-600 dark:placeholder-gray-400 transition-colors duration-200 min-h-[80px] resize-y"
            {...register("ingr", { required: "Location is required" })}
            placeholder="Enter Location (where it was lost/found, e.g., 'Library 3rd floor', 'Near Main Gate') (comma-separated if multiple)"
          ></textarea>
          {errors.ingr && <small className="text-red-500 text-sm mt-1 block">{errors.ingr.message}</small>}
        </div>

        <div className="mb-5">
          <textarea
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 placeholder-gray-600 dark:placeholder-gray-400 transition-colors duration-200 min-h-[80px] resize-y"
            {...register("inst", { required: "Contact information is required" })}
            placeholder="Enter Contact Information (Phone Number, Email, Social Media Profile) (comma-separated if multiple)"
          ></textarea>
          {errors.inst && <small className="text-red-500 text-sm mt-1 block">{errors.inst.message}</small>}
        </div>

        <div className="mb-6">
          <select
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 transition-colors duration-200 appearance-none bg-down-arrow bg-right bg-no-repeat pr-10"
            {...register("category", { required: "Please select a category" })}
          >
            <option value="">-- Select Status --</option>
            <option value="Lost">Lost Item</option>
            <option value="Found">Found Item</option>
          </select>
          {errors.category && <small className="text-red-500 text-sm mt-1 block">{errors.category.message}</small>}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Update Item
          </button>
          <button
            onClick={DeleteHandler}
            type="button" 
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
          >
            Delete Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleRecipe;