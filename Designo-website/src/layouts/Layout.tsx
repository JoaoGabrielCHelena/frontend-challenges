import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet } from "react-router"

function Layout({ footerCard }: { footerCard: boolean }) {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer footerCta={footerCard} />
        </>
    )
}

export default Layout
