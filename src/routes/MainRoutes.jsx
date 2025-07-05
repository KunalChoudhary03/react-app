import { Route, Routes } from 'react-router-dom'
import Item from '../pages/Item'
import Home from '../pages/Home'
import About from '../pages/About'
import CreateRecipes from '../pages/CreateRecipes'
import SingleRecipe from '../pages/SingleRecipe'
import PageNotFound from '../pages/PageNotFound'
import Fav from '../pages/Fav'
const Mainroutes = () => {
  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='items' element={<Item />}/>
    <Route path='/items/details/:id' element={<SingleRecipe />}/>
    <Route path='add' element={<CreateRecipes />}/>
    <Route path='about' element={<About />}/>
    <Route path='fav' element={<Fav />}/>
    <Route path='*' element={<PageNotFound />}/>
  </Routes>
  )
  
}

export default Mainroutes
