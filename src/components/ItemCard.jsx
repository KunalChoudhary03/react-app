import { Link } from "react-router-dom";

const ItemCard = (props) => {
  
  const { id, image, title, desc, chef, inst, ingr,category } = props.recipe;

  return (
    <Link
      to={`/items/details/${id}`}
      className=" group block w-90 h-[25rem] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out
                 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                 m-4 flex flex-col" 
    >
      <div className=" w-full h-48 overflow-hidden flex-shrink-0">
        <img
          className="w-full h-full object-cover object-top overflow-hidden rounded-t-2xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
          src={image}
          alt={title || "Item image"}
        />
      </div>

      <div className="p-5 flex-grow overflow-y-auto scrollbar-hidden"> 

        <h2 className="font-extrabold text-xl sm:text-2xl text-gray-900 dark:text-white mb-2 leading-tight">
          {title}
        </h2>

        <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
          By: {chef}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-1">
          <span className="font-medium">About:</span>{" "}
          {desc}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-1">
          <span className="font-medium"><i className="p-2 ri-map-pin-line"></i>Contact:</span>{" "}
          {inst}
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <span className="font-medium"><i className="p-2 ri-contacts-line"></i>Location:</span>{" "}
          {ingr}
        </p>
       <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
  <span className="font-medium text-red-400 font-black">
    <i className="p-2 ri-alert-line"></i>Status:
  </span>{" "}
  <span className={`font-bold ${category === "lost" ? "text-red-500" : "text-green-500"}`}>
    {category}
  </span>
</p>

      </div>
    </Link>
  );
};

export default ItemCard;