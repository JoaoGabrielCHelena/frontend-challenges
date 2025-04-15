import { useState } from "react"
import Grid from "../Grid"
import Icon from "../Icon/Icons"
import { Link } from "react-router"
import styles from "./Header.module.scss"

function Header() {
    let [open, setOpen] = useState(false)
    return (
        <Grid.container>
            <div className={`${Grid.spanRow} ${styles.header}`}>
                <img src="/assets/shared/desktop/logo-dark.png" alt="" />
                <button onClick={() => setOpen(!open)} className={styles.linkButton}>
                    {open ? <Icon.close /> : <Icon.hamburger />}
                </button>
                <div className={`${styles.linkListWrapper} ${(open) ? styles.linkListWrapperActive : "" }`}>
                <div className={`${styles.linkList}`}>
                    <Link className={styles.link} to="/">
                        our company
                    </Link>
                    <Link className={styles.link} to="/">
                        locations
                    </Link>
                    <Link className={styles.link} to="/">
                        contact
                    </Link>
                </div>
                </div>
            </div>
        </Grid.container>
    )
}
export default Header
