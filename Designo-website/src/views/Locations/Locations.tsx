import Grid from "../../components/Grid"
import styles from "./Locations.module.scss"

function Locations() {
    let locationData = [
            {
                title: "Canada",
                imageName: "canada.png",
                officeName: "Designo Central Office",
                street: "3886 Wellington Street",
                address: "Toronto, Ontario M9C 3J5",
                phone: "+1 253-863-8967",
                email: "contact@designo.co",
            },
            {
                title: "Australia",
                imageName: "australia.png",
                officeName: "Designo AU Office",
                street: "19 Balonne Street",
                address: "New South Wales 2443",
                phone: "(02) 6720 9092",
                email: "contact@designo.au",
                reverse: true,
            },
            {
                title: "United Kingdom",
                imageName: "uk.png",
                officeName: "Designo UK Office",
                street: "13  Colorado Way",
                address: "Rhyd-y-fro SA8 9GA",
                phone: "078 3115 1400",
                email: "contact@designo.uk",
            },
        ],
        locations = locationData.map((i) => {
            let positionClasses = i.reverse
                ? {
                      image: `${Grid.spanRowM} ${Grid.fixedSpan4L}`,
                      text: `${Grid.gridStart5L} ${Grid.fixedSpan8L} ${Grid.spanRowM} ${Grid.subgrid} ${styles.locationText}`,
                  }
                : {
                      image: `${Grid.spanRowM} ${Grid.fixedSpan4L} ${Grid.gridStart9L}`,
                      text: `${Grid.gridStart1L} ${Grid.fixedSpan8L} ${Grid.spanRowM} ${Grid.subgrid} ${styles.locationText}`,
                  }
            return (
                <Grid.container
                    fullMobile
                    key={i.imageName}
                    className={styles.location}
                >
                    <picture className={positionClasses.image}>
                        <source
                            srcSet={`./assets/locations/desktop/image-map-${i.imageName}`}
                            media="(min-width: 1024px)"
                        />
                        <source
                            srcSet={`./assets/locations/tablet/image-map-${i.imageName}`}
                            media="(min-width: 556px)"
                        />
                        <img
                            loading="lazy"
                            className={`${styles.locationImage}`}
                            src={`./assets/locations/desktop/image-map-${i.imageName}`}
                            alt=""
                        />
                    </picture>
                    <div className={positionClasses.text}>
                        <p
                            className={`${Grid.fixedSpan7M} ${Grid.gridStart2M} ${styles.locationTitle}`}
                        >
                            {i.title}
                        </p>
                        <div
                            className={`${Grid.fixedSpan5M} ${Grid.gridStart2M} ${Grid.fixedSpan3L} ${Grid.gridStart2L}`}
                        >
                            <p>
                                <span className={styles.bold}>
                                    {i.officeName}
                                </span>
                                <br />
                                {i.street}
                                <br />
                                {i.address}
                            </p>
                        </div>
                        <div className={`${Grid.span5M} ${Grid.span3L}`}>
                            <p>
                                <span className={styles.bold}>Contact</span>
                                <br />P : {i.phone}
                                <br />M : {i.email}
                            </p>
                        </div>
                    </div>
                </Grid.container>
            )
        })
    return <>{locations}</>
}

export default Locations
