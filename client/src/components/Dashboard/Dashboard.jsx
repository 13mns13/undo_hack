import { Suspense, lazy } from 'react'

const Header = lazy(() => import('../Header/Header'))
const FAQ = lazy(() => import('../FAQ/FAQ'))
const Table = lazy(() => import('../Table/Table'))
const Line = lazy(() => import('../Line/Line'))

const Dashboard = ()=>{
    return (
        <main>
            <Header/>
            <Table/>
            <Line />
        </main>
    )
}
export default Dashboard