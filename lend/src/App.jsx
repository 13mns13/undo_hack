import {lazy, Suspense}from "react"
import "animate.css/animate.min.css";
import './base.css'

const Header = lazy(()=>import("./components/Header/Header"))
const About = lazy(()=>import("./components/About/About"))
const Disсover = lazy(()=>import("./components/discover/Discover"))
const Line = lazy(()=>import("./components/Line/Line"))
const Qr = lazy(()=>import("./components/Qr/Qr"))
const App=()=>{
    return <div style={{overflow:"hidden"}}>
         <Suspense fallback="">
            <Header/>
        </Suspense>
         <Suspense fallback="">
            <About/>
        </Suspense>
        <Suspense fallback="">
            <Disсover/>
        </Suspense>
        <Suspense fallback="">
            <Line/>
        </Suspense>
        <Suspense fallback="">
            <Qr/>
        </Suspense>
    </div>
}
export default App;