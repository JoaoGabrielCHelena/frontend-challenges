import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.scss"
import App from "./App.tsx"
import Theme from "./components/theming/theming.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Theme.Provider className="themeContainer">
            <div className="wrapper">
                <App />
            </div>
        </Theme.Provider>
    </StrictMode>,
)
