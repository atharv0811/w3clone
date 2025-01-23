import MobileSidebar from "./components/MobileSidebar"
import Sidebar from "./components/Sidebar"
import SubNav from "./components/SubNav"
import TopNav from "./components/TopNav"

const Layout = ({ children }) => {
    return (
        <>
            <TopNav />
            <SubNav />
            <div className="d-flex">
                <Sidebar />
                <MobileSidebar />
                <main className="w-100 mainchild">
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout