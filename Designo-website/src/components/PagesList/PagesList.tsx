import { Link } from "react-router"
import Grid from "../Grid"
import styles from "./PageList.module.scss"
import Icon from "../Icon/Icons"
import React from "react"

interface pageListProps extends React.HTMLProps<HTMLDivElement> {
    pageListData: { title: string; link: string; image: string; rows: number }[]
    Large?: boolean
}

function PageList(props: pageListProps) {
    let { className, pageListData, Large, ...rest } = props

    let pageList = pageListData.map((i) => {
        let rowclass = Grid[`rowSpan${i.rows}L`]
        return (
            <Link
                to={i.link}
                key={i.title}
                className={`${rowclass} ${Grid.spanRowM} ${Grid.span6L} ${styles.pageCard} `}
            >
                <picture>
                    <source
                        srcSet={`./assets/home/desktop/${i.image == "image-web-design" && Large ? i.image + "-large" : i.image}.jpg`}
                        media="(min-width: 1024px)"
                    />
                    <source
                        srcSet={`./assets/home/tablet/${i.image}.jpg`}
                        media="(min-width: 556px)"
                    />
                    <img
                        loading="lazy"
                        src={`./assets/home/mobile/${i.image}.jpg`}
                        className={styles.pageBg}
                        alt=""
                    />
                </picture>
                <div className={styles.pageText}>
                    <p className={styles.pageTitle}>{i.title}</p>
                    <p className={styles.pageBlip}>
                        view projects <Icon.carat />
                    </p>
                </div>
            </Link>
        )
    })

    return (
        <Grid.container
            {...rest}
            className={`${styles.pageCardContainer} ${className}`}
            rowGap={24}
        >
            {pageList}
        </Grid.container>
    )
}

export default PageList
