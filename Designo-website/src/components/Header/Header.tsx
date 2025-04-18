import { useState } from "react"
import Grid from "../Grid"
import Icon from "../Icon/Icons"
import { Link } from "react-router"
import styles from "./Header.module.scss"

function Header() {
    let [open, setOpen] = useState(false)
    return (
        <Grid.container>
            <header className={`${Grid.spanRow} ${styles.header}`}>
                <Link aria-label="Go to home" to="/">
                    <img src="./assets/shared/desktop/logo-dark.png" alt="" />
                </Link>
                <button
                    onClick={() => setOpen(!open)}
                    className={styles.linkButton}
                >
                    {open ? <Icon.close /> : <Icon.hamburger />}
                </button>
                <div
                    className={`${styles.linkListWrapper} ${open ? styles.linkListWrapperActive : ""}`}
                >
                    <div className={`${styles.linkList}`}>
                        <Link className={styles.link} to="/about">
                            our company
                        </Link>
                        <Link className={styles.link} to="/locations">
                            locations
                        </Link>
                        <Link className={styles.link} to="/contact">
                            contact
                        </Link>
                    </div>
                </div>
            </header>
        </Grid.container>
    )
}
export default Header
