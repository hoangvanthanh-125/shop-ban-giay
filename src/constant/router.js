import CheckOut from '../components/CheckOut/CheckOut'
import DetailProduct from '../components/DetailProduct/DetailProduct'
import Home from '../components/Home/Home'
import InforUser from '../components/InfoUser/InforUser'
import Login from '../components/Login/Login'
import Search from '../components/Search/Search'
import SignUp from '../components/Signup/SignUp'
import TypeProduct from '../components/TypeProduct/TypeProduct'
import Adminpage from '../container/AdminPage/Adminpage'
import Introduce from '../container/Introduce/Introduce'
import Cart from './../components/Cart/Cart'
import ProductsContainer from './../container/ProductsContainer/ProductsContainer'
export const USER_ROUTE = [
  {  
    
     path:'/',
     name:'Trang chủ',
     exact:true,
     component:Home
  },
  {  
    
    path:'/products',
    name:'Sản phẩm',
    exact:false,
    component:ProductsContainer
 },
 
  { 
     
     path:'/intro',
     name:'Giới thiệu',
     exact:false,
     component:Introduce
  },
  {
    path:'/product/:id/:name',
    name:'',
    exact:false,
    component:DetailProduct
    },
    {
      path:'/admin',
      name:'',
      exact:false,
      component:Adminpage
      },
    {
      path:'/cart',
      name:'',
      exact:false,
      component:Cart
    },
    {
      path:'/login',
      name:'',
      exact:false,
      component:Login
    },
    {
      path:'/signup',
      name:'',
      exact:false,
      component:SignUp
    },
    {
      path:'/hanggiay/:name',
      name:'hang giay',
      exact:false,
      component:TypeProduct
    }
    ,
    {
      path:'/thanh-toan',
      name:'thanh toan',
      exact:false,
      component:CheckOut
    },
    {
      path:'/info',
      name:'thanh toan',
      exact:false,
      component:InforUser
    },
      {
      path:'/search',
      name:'search',
      exact:false,
      component:Search
    },
]