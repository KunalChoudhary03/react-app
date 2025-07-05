import { Link } from "react-router-dom";
import { FaSearch, FaPlusCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-2 rounded-3xl scrollbar-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center bg-white p-10 rounded-3xl shadow-2xl max-w-3xl w-full transform hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-blue-200"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-5 leading-tight tracking-tight"
        >
          Welcome to <span className="text-blue-600">Lost & Found</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed font-medium"
        >
          <span className="text-red-500 font-bold">Find</span> your lost items or{" "}
          <span className="text-green-500 font-bold">Report</span> things you’ve found.
          We connect lost items with their rightful owners easily and quickly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center mt-8 gap-6 flex-wrap"
        >
          <Link
            to="/items"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
          >
            <FaSearch />
            Browse Lost Items
          </Link>

          <Link
            to="/add"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all"
          >
            <FaPlusCircle />
            Report Found Item
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
