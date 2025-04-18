import { Link } from "react-router"
import Grid from "../Grid"
import Icon from "../Icon/Icons"
import styles from "./LocationList.module.scss"
import buttonStyles from "./../../styles/button.module.scss"

function LocationList() {
    let locationsData = [
            {
                title: "canada",
                image: "./assets/shared/desktop/illustration-canada.svg",
                rotate: "-90deg",
            },
            {
                title: "australia",
                image: "./assets/shared/desktop/illustration-australia.svg",
                rotate: "180deg",
            },
            {
                title: "united kingdom",
                image: "./assets/shared/desktop/illustration-united-kingdom.svg",
                rotate: "90deg",
            },
        ],
        locations = locationsData.map((i) => {
            return (
                <div
                    key={i.title}
                    className={`${Grid.spanRowM} ${Grid.span4L} ${styles.location}`}
                >
                    <div className={styles.locationImage}>
                        <img loading="lazy" src={i.image} alt="" />
                        <Icon.backgroundCircle
                            style={{ rotate: i.rotate, zIndex: -1 }}
                        />
                    </div>
                    <div>
                        <p className={styles.locationTitle}>{i.title}</p>
                        <Link
                            to={"/locations"}
                            className={buttonStyles.btnLight}
                        >
                            see location
                        </Link>
                    </div>
                </div>
            )
        })

    return locations
}

export default LocationList
