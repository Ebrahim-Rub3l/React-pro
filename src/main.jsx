import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import MainRoute from './Components/MainRoute/MainRoute.jsx';
import Shop from './Components/Shop/Shop.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';
import Wishlist from './Components/Wishlist/Wishlist.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Checkout from './Components/Checkout/Checkout.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Details from './Components/Details/Details.jsx';
import Products from './Components/Products/Products.jsx'
import Search from './Components/Search/Search.jsx'
import  {store } from './redux/store.js'
import { Provider } from 'react-redux'
import firebaseConfig from './firebaseConfig.js'
import About from './Components/About/About.jsx';



const router = createBrowserRouter([
   {
    path: "/",
    Component: MainRoute,
    children: [
      { index: true, Component: App },
      { path:'shop' , Component: Shop },
      { path:'*' , Component: NotFound },
      { path:'register' , Component: Register },
      { path:'login' , Component: Login },
      { path:'wishlist' , Component: Wishlist },
      { path:'cart' , Component: Cart },
      { path:'checkout' , Component: Checkout },
      { path:'profile' , Component: Profile },
      { path:'about' , Component: About },
      { path:'product/details/:id' , Component: Details },
      { path:'products/category/:slug' , Component: Products },
      { path:'Search/category/:keyword' , Component: Search },
      
       
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>   
  
)



