import { Suspense, lazy } from 'react'
import Nav from './components/Nav/Nav'
import {Routes, Route} from "react-router-dom";
import Loading from "./components/Loading/Loading"

const Footer = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/Footer/Footer")), 5000);
  });
});
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'))
const Stock = lazy(()=>import("./components/Stock/Stock"))

const  App = () => {

  return (
    <div className="App">
        <Nav/>
        <Routes>    
          <Route path={"/"} element={
            <Suspense fallback={<Loading/>}>
              <Dashboard/>
            </Suspense>
          }/>
           <Route path={"/stock/:_id"} element={
            <Suspense fallback={<Loading/>}>
              <Stock/>
            </Suspense> 
          }/>
        </Routes> 
        <Suspense fallback="">
          <Footer/>
        </Suspense> 
    </div>
  )
}
export default App