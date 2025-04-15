import "./main.scss"

import { ReactNode, StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"

import Home from "./views/Home"
import WebDesign from "./views/WebDesign"
import Layout from "./layouts/Layout"

function Page({ title, content }: { title: string; content: ReactNode }) {
    return (
        <>
            <title>{title}</title>
            {content}
        </>
    )
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
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
                                content={<WebDesign />}
                            />
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
