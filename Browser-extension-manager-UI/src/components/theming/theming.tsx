import React, { createContext, useContext, useState } from "react"
import "./Theming.scss"

const ThemeContext = createContext<{
    theme: string
    setTheme: React.Dispatch<React.SetStateAction<string>>
}>(null!)

function ThemeProvider(props: React.HTMLProps<HTMLDivElement>) {
    const [theme, setTheme] = useState("light")
    const { children } = props

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div data-theme={theme} {...props}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

function useTheme() {
    return useContext(ThemeContext)
}

function ThemeToggle(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () =>
        setTheme((theme) => (theme === "light" ? "dark" : "light"))
    let { className, ...rest } = props

    return (
        <button {...rest} className="themeButton" onClick={toggleTheme}>
            <img
                style={{ display: theme == "light" ? "block" : "none" }}
                height={22}
                width={22}
                src="./images/icon-moon.svg"
                alt="Switch to dark mode"
            />
            <img
                style={{ display: theme == "dark" ? "block" : "none" }}
                height={22}
                width={22}
                src="./images/icon-sun.svg"
                alt="Switch to light mode"
            />
        </button>
    )
}

let Theme = {
    Provider: ThemeProvider,
    Toggle: ThemeToggle,
}

export default Theme
