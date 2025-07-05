import { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';
import ItemCard from "../components/ItemCard";
import { motion } from 'framer-motion';

const Item = () => {
  const { data } = useContext(recipecontext);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-900 p-4 flex justify-center items-start"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-4">
        {data.length > 0 ? (
          data.map((recipe) => (
            <motion.div
              key={recipe.id}
              variants={itemVariants}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <ItemCard recipe={recipe} />
            </motion.div>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-white text-lg font-semibold mt-10"
          >
            No Items Found !!
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default Item;
