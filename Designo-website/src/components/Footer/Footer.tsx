import { Link } from "react-router"
import Grid from "../Grid"
import utils from "./../../styles/utils.module.scss"
import styles from "./Footer.module.scss"
import Icon from "../Icon/Icons"
import buttonStyles from "./../../styles/button.module.scss"

function Footer({ footerCta }: { footerCta?: boolean }) {
    return (
        <footer>
            {footerCta ? (
                <div className={styles.cardWrapper}>
                    <Grid.container>
                        <div className={`${styles.card} ${Grid.spanRow}`}>
                            <div className={styles.cardText}>
                                <p className={`h2 ${utils.clrWhite}`}>
                                    Let’s talk about
                                    <br /> your project
                                </p>
                                <p className={utils.clrWhite}>
                                    Ready to take it to the next level? Contact
                                    us today and find out how our expertise can
                                    help your business grow.
                                </p>
                            </div>
                            <Link
                                to="/contact"
                                className={buttonStyles.btnDark}
                            >
                                Get in touch
                            </Link>
                        </div>
                    </Grid.container>
                </div>
            ) : null}
            <div className={styles.footer}>
                <Grid.container>
                    <div className={`${Grid.spanRow} ${styles.footerTop}`}>
                        <img
                            src="/assets/shared/desktop/logo-light.png"
                            alt=""
                        />
                        <div className={styles.linkList}>
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
                    <div
                        className={` ${styles.footerBottom} ${Grid.spanRow} ${Grid.subgrid}`}
                    >
                        <div className={`${Grid.span4M} ${utils.clrGrey}`}>
                            <p>
                                <strong>Designo Central Office</strong>
                            </p>
                            <p>
                                3886 Wellington Street
                                <br />
                                 Toronto, Ontario M9C 3J5
                            </p>
                        </div>
                        <div className={`${Grid.span4M} ${utils.clrGrey}`}>
                            <p>
                                <strong>
                                    Contact Us (Central Office) 
                                    <br />P : +1 253-863-8967
                                    <br />M : contact@designo.co
                                </strong>
                            </p>
                        </div>
                        <div className={`${Grid.span4M}`}>
                            <div className={styles.socialLinks}>
                                <a href="#" aria-label="Go to our Facebook">
                                    <Icon.facebook />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Go to our Youtube channel"
                                >
                                    <Icon.youtube />
                                </a>
                                <a href="#" aria-label="Go to our Twitter page">
                                    <Icon.twitter />
                                </a>
                                <a href="#" aria-label="Go to our Pinterest">
                                    <Icon.pinterest />
                                </a>
                                <a href="#" aria-label="Go to our Instagram">
                                    <Icon.instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </Grid.container>
            </div>
        </footer>
    )
}

export default Footer
