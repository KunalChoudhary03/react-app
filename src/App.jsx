import Navbar from "./components/Navbar"
import Mainroutes from "./routes/MainRoutes"

const App = () => {
  return (
   
    <div className="min-h-screen flex flex-col bg-gray-700 text-gray-800 font-sans font-light antialiased">
      
      <Navbar />

      <main className="flex-grow p-6 sm:p-8 lg:p-10 xl:p-12">
        <Mainroutes />
      </main>

      <div className="rights text-white font-black bg-gray-800 text-center p-3">© 2025 Kunal Choudhary. All rights reserved.</div>
    </div>
  )
}

export default App