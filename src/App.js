import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetailPage from './pages/ProductDetail';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
const router= createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<HomePage/>},
      {path:'products',element:<ProductsPage/>},
      {path:'products/:productId',element:<ProductDetailPage/>}
    ]
  },
])

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>}/>
//     <Route path='/products' element={<ProductsPage/>}/>
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
