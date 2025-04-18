import "./main.scss"

import { ReactNode, StrictMode, useEffect } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes, useLocation } from "react-router"

import Home from "./views/Home"
import Layout from "./layouts/Layout"
import Showcase from "./views/Showcase"
import About from "./views/About"
import Locations from "./views/Locations"
import Contact from "./views/Contact"

function Page({ title, content }: { title: string; content: ReactNode }) {
    return (
        <>
            <title>{title}</title>
            {content}
        </>
    )
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const basename = import.meta.env.VITE_BASENAME

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename={basename}>
            <ScrollToTop />
            <Routes>
                <Route element={<Layout footerCard={true} />}>
                    <Route
                        path="/"
                        element={<Page title="Designo" content={<Home />} />}
                    />
                    <Route
                        path="/web-design"
                        element={
                            <Page
                                title="Designo | Web Design"
                                content={<Showcase id="web" />}
                            />
                        }
                    />
                    <Route
                        path="/app-design"
                        element={
                            <Page
                                title="Designo | App Design"
                                content={<Showcase id="app" />}
                            />
                        }
                    />
                    <Route
                        path="/graphic-design"
                        element={
                            <Page
                                title="Designo | Graphic Design"
                                content={<Showcase id="graphic" />}
                            />
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Page
                                title="Designo | About Us"
                                content={<About />}
                            />
                        }
                    />
                    <Route
                        path="/locations"
                        element={
                            <Page
                                title="Designo | Locations"
                                content={<Locations />}
                            />
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <Page
                                title="Designo | Contact"
                                content={<Contact />}
                            />
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
