import "./main.scss"

import { ReactNode, StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"

import Home from "./views/Home"
import WebDesign from "./views/WebDesign"

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
                <Route
                    path="/"
                    element={<Page title="Home" content={<Home />} />}
                />
                <Route
                    path="/web-design"
                    element={
                        <Page title="Web Design" content={<WebDesign />} />
                    }
                />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
