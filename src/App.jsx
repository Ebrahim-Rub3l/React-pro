import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Today from './Components/Today/Today'
import Category from './Components/Category/Category'
import Selling from './Components/Category/Selling/Selling'
import Explore from './Components/Explore/Explore'
import Footer from './Components/Footer/Footer'
import Music from './Components/Music/Music'
import Arrival from './Components/New Arrival/Arrival'
import DELIVERY from './Components/DELIVERY/DELIVERY'


function App() {

  return (
    <>
      
      <Banner/>
      <Today/>
      <Category/>
       <Selling/>
       <Music/>
       <Explore/>
       <Arrival/>
       <DELIVERY/>
      
       
    </>
  )
}

export default App
