import { Link } from "react-router"
import Grid from "../../components/Grid"
import PageList from "../../components/PagesList"
import styles from "./Showcase.module.scss"
import Icon from "../../components/Icon/Icons"

function Showcase({ id }: { id: "web" | "app" | "graphic" }) {
    let webCards = [
        {
            image: "./assets/web-design/desktop/image-express.jpg",
            title: "express",
            description:
                "A multi-carrier shipping website for ecommerce businesses",
            link: "/",
        },
        {
            image: "./assets/web-design/desktop/image-transfer.jpg",
            title: "transfer",
            description:
                "Site for low-cost money transfers and sending money within seconds",
            link: "/",
        },
        {
            image: "./assets/web-design/desktop/image-photon.jpg",
            title: "photon",
            description:
                "A state-of-the-art music player with high-resolution audio and DSP effects",
            link: "/",
        },
        {
            image: "./assets/web-design/desktop/image-builder.jpg",
            title: "builder",
            description:
                "Connects users with local contractors based on their location",
            link: "/",
        },
        {
            image: "./assets/web-design/desktop/image-blogr.jpg",
            title: "blogr",
            description:
                "Blogr is a platform for creating an online blog or publication",
            link: "/",
        },
        {
            image: "./assets/web-design/desktop/image-camp.jpg",
            title: "camp",
            description:
                "Get expert training in coding, data, design, and digital marketing",
            link: "/",
        },
    ],appCards = [
        {
            image: "./assets/app-design/desktop/image-airfilter.jpg",
            title: "airfilter",
            description:
                "Solving the problem of poor indoor air quality by filtering the air",
            link: "/",
        },
        {
            image: "./assets/app-design/desktop/image-eyecam.jpg",
            title: "eyecam",
            description:
                "Product that lets you edit your favorite photos and videos at any time",
            link: "/",
        },
        {
            image: "./assets/app-design/desktop/image-faceit.jpg",
            title: "faceit",
            description:
                "Get to meet your favorite internet superstar with the faceit app",
            link: "/",
        },
        {
            image: "./assets/app-design/desktop/image-todo.jpg",
            title: "todo",
            description:
                "A todo app that features cloud sync with light and dark mode",
            link: "/",
        },
        {
            image: "./assets/app-design/desktop/image-loopstudios.jpg",
            title: "loopstudios",
            description:
                "A VR experience app made for Loopstudios",
            link: "/",
        },
    ],graphicCards = [
        {
            image: "./assets/graphic-design/desktop/image-change.jpg",
            title: "tim brown",
            description:
                "A book cover designed for Tim Brown’s new release, ‘Change’",
            link: "/",
        },
        {
            image: "./assets/graphic-design/desktop/image-boxed-water.jpg",
            title: "boxed water",
            description:
                "A simple packaging concept made for Boxed Water",
            link: "/",
        },
        {
            image: "./assets/graphic-design/desktop/image-science.jpg",
            title: "science!",
            description:
                "A poster made in collaboration with the Federal Art Project",
            link: "/",
        },

    ]

    let options = {
            web: {
                title: "Web Design",
                description:
                    "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
                filtered: 0,
                cardData: webCards,
            },
            app: {
                title: "App Design",
                description:
                    "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
                filtered: 1,
                cardData: appCards,
            },
            graphic: {
                title: "Graphic Design",
                description:
                    "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
                filtered: 2,
                cardData: graphicCards,
            },
        },
        selectedOption = options[id]

    let cards = selectedOption.cardData.map((i) => {
        return (
            <Link
                key={i.title}
                to={i.link}
                className={`${Grid.spanRowM} ${Grid.span4L} ${styles.card}`}
            >
                <img loading="lazy" className={styles.cardImage} src={i.image} alt="" />
                <div>
                    <p className={`h3 ${styles.cardTitle}`}>{i.title}</p>
                    <p className={styles.cardDescription}>{i.description}</p>
                </div>
            </Link>
        )
    })

    let pageListItems = [
        {
            title: "web design",
            link: "/web-design",
            image: "image-web-design",
            rows: 1,
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
    ]
    pageListItems.splice(selectedOption.filtered, 1)

    return (
        <>
            <div className={styles.heroContainer}>
                <Grid.container fullMobile>
                    <div className={`${Grid.spanRow} ${styles.hero}`}>
                        <h1 className={styles.heroTitle}>
                            {selectedOption.title}
                        </h1>
                        <p className={styles.heroDescription}>
                            {selectedOption.description}
                        </p>
                    </div>
                </Grid.container>
                <Icon.backgroundLeaf className={styles.heroLeaf} />
            </div>
            <Grid.container rowGap={32} className={`${styles.cardContainer}`}>
                {cards}
            </Grid.container>
            <PageList pageListData={pageListItems} />
        </>
    )
}

export default Showcase
