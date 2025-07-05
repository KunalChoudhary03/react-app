import { useForm } from "react-hook-form";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateRecipes = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { data, setdata } = useContext(recipecontext);

  const SubmitHandler = (recipe) => {
   
    recipe.id = nanoid();

    recipe.ingr = recipe.ingr.split(",").map(item => item.trim()).filter(item => item !== "");
    recipe.inst = recipe.inst.split(",").map(item => item.trim()).filter(item => item !== "");

    
    const updatedData = [...data, recipe];
    setdata(updatedData);
    localStorage.setItem("items", JSON.stringify(updatedData));
    
   
    toast.success("Entry Reported Successfully!");
    reset(); 
    navigate("/items"); 
  };

  return (
  
    <div className="min-h-screen flex items-center justify-center p-6 ">
      <form 
        onSubmit={handleSubmit(SubmitHandler)} 
        className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:shadow-2xl"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
          Report Lost or Found Item
        </h2>

        <div className="mb-5">
          <input
            className="w-full p-3 border border-gray-300 dark:border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
            {...register("image", { required: "Image URL is required" })}
            type="url"
            placeholder="Image URL of the item"
          />
          {errors.image && <small className="text-red-500 text-sm mt-1 block">{errors.image.message}</small>}
        </div>

        <div className="mb-5">
          <input
            className="w-full p-3 border border-gray-300 dark:border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
            {...register("title", { required: "Item Name is required" })}
            type="text"
            placeholder="Name of Item (e.g., Wallet, Keys, Phone)"
          />
          {errors.title && <small className="text-red-500 text-sm mt-1 block">{errors.title.message}</small>}
        </div>

        <div className="mb-5">
          <input
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
            {...register("chef", { required: "Your Name/Reporter's Name is required" })}
            type="text"
            placeholder="Your Name / Reporter's Name"
          />
          {errors.chef && <small className="text-red-500 text-sm mt-1 block">{errors.chef.message}</small>}
        </div>

        <div className="mb-5">
          <textarea
            className="w-full p-3 border border-gray-300 dark:border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200 min-h-[100px] resize-y"
            {...register("desc", { required: "Description is required" })}
            placeholder="Provide a detailed description (e.g., color, brand, condition, unique marks)"
          ></textarea>
          {errors.desc && <small className="text-red-500 text-sm mt-1 block">{errors.desc.message}</small>}
        </div>

        <div className="mb-5">
          <textarea
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200 min-h-[80px] resize-y"
            {...register("ingr", { required: "Location is required" })}
            placeholder="Enter Location (where it was lost/found, e.g., 'Library 3rd floor', 'Near Main Gate')"
          ></textarea>
          {errors.ingr && <small className="text-red-500 text-sm mt-1 block">{errors.ingr.message}</small>}
        </div>

        <div className="mb-5">
          <textarea
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-gray-900 placeholder-gray-600 dark:placeholder-gray-400 transition-colors duration-200 min-h-[80px] resize-y"
            {...register("inst", { required: "Contact information is required" })}
            placeholder="Enter Contact Information (Phone Number, Email, Social Media Profile)"
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

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Save Enquiry
        </button>
      </form>
    </div>
  );
};

export default CreateRecipes;