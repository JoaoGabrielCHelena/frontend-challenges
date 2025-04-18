import { Link } from "react-router"
import Grid from "../../components/Grid"
import Icon from "../../components/Icon/Icons"
import utils from "../../styles/utils.module.scss"
import styles from "./Home.module.scss"
import buttonStyles from "./../../styles/button.module.scss"
import PageList from "../../components/PagesList"

function Home() {
    // doing it like this seems overkill but i dont want to rewrite minor changes thrice everytimes
    let attributeData = [
            {
                title: "passionate",
                text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
                rotate: "180deg",
            },
            {
                title: "resourceful",
                text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
                rotate: "90deg",
            },
            {
                title: "friendly",
                text: " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
                rotate: "-90deg",
            },
        ],
        attributes = attributeData.map((i) => {
            return (
                <div
                    key={i.title}
                    className={`${Grid.spanRowM} ${Grid.span4L} ${styles.attribute}`}
                >
                    <div className={styles.attributeImage}>
                        <img
                            loading="lazy"
                            src={`./assets/home/desktop/illustration-${i.title}.svg`}
                            alt=""
                        />
                        <Icon.backgroundCircle
                            style={{ rotate: i.rotate, zIndex: -1 }}
                        />
                    </div>
                    <div>
                        <p className={styles.attributeTitle}>{i.title}</p>
                        <p className={utils.clrDarkGrey}>{i.text}</p>
                    </div>
                </div>
            )
        })

    return (
        <>
            <Grid.container fullMobile className={styles.heroContainer}>
                <div
                    className={`${styles.heroWrapper} ${Grid.spanRow} ${Grid.subgrid}`}
                >
                    <div
                        className={`${Grid.spanRowM} ${Grid.fixedSpan10L} ${Grid.gridStart2L} ${styles.hero}`}
                    >
                        <div className={styles.heroText}>
                            <h1>
                                Award-winning custom designs and digital
                                branding solutions
                            </h1>
                            <p className={styles.heroDescription}>
                                With over 10 years in the industry, we are
                                experienced in creating fully responsive
                                websites, app design, and engaging brand
                                experiences. Find out more about our services.
                            </p>
                            <Link className={buttonStyles.btnDark} to="/">
                                learn more
                            </Link>
                        </div>
                        <div className={styles.heroImage}>
                            <img
                                src="./assets/home/desktop/image-hero-phone.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <Icon.backgroundLeaf className={styles.heroLeaf} />
            </Grid.container>
            <PageList
                Large
                pageListData={[
                    {
                        title: "web design",
                        link: "/web-design",
                        image: "image-web-design",
                        rows: 2,
                    },
                    {
                        title: "app design",
                        link: "/app-design",
                        image: "image-app-design",
                        rows: 1,
                    },
                    {
                        title: "graphic design",
                        link: "/graphic-design",
                        image: "image-graphic-design",
                        rows: 1,
                    },
                ]}
            />
            <div className={styles.attributeWrapper}>
                <Grid.container className={styles.attributeContainer}>
                    {attributes}
                </Grid.container>
                <Icon.backgroundLeaf className={styles.attributeLeaf} />
            </div>
        </>
    )
}

export default Home
