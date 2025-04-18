import Grid from "../../components/Grid"
import Icon from "../../components/Icon/Icons"
import LocationList from "../../components/LocationList"
import styles from "./About.module.scss"

function About() {
    return (
        <>
            <div className={styles.heroContainer}>
                <Grid.container fullMobile>
                    <div
                        className={`${Grid.spanRow} ${styles.row} ${styles.hero}`}
                    >
                        <picture>
                            <source
                                srcSet={`/assets/about/desktop/image-about-hero.jpg`}
                                media="(min-width: 1024px)"
                            />
                            <source
                                srcSet={`/assets/about/tablet/image-about-hero.jpg`}
                                media="(min-width: 556px)"
                            />
                            <img
                                loading="lazy"
                                src={`/assets/about/mobile/image-about-hero.jpg`}
                                alt=""
                            />
                        </picture>
                        <div className={styles.rowText}>
                            <h1>About Us</h1>
                            <p>
                                Founded in 2010, we are a creative agency that
                                produces lasting results for our clients. We’ve
                                partnered with many startups, corporations, and
                                nonprofits alike to craft designs that make real
                                impact. We’re always looking forward to creating
                                brands, products, and digital experiences that
                                connect with our clients’ audiences.
                            </p>
                        </div>
                    </div>
                </Grid.container>
                <Icon.backgroundLeaf className={styles.heroLeaf} />
            </div>
            <Grid.container fullMobile>
                <div
                    className={`${Grid.spanRow} ${styles.row} ${styles.reverse}`}
                >
                    <picture>
                        <source
                            srcSet={`/assets/about/desktop/image-world-class-talent.jpg`}
                            media="(min-width: 1024px)"
                        />
                        <source
                            srcSet={`/assets/about/tablet/image-world-class-talent.jpg`}
                            media="(min-width: 556px)"
                        />
                        <img
                            loading="lazy"
                            src={`/assets/about/mobile/image-world-class-talent.jpg`}
                            alt=""
                        />
                    </picture>
                    <div className={styles.rowText}>
                        <h2>World-class talent</h2>
                        <p>
                            We are a crew of strategists, problem-solvers, and
                            technologists. Every design is thoughtfully crafted
                            from concept to launch, ensuring success in its
                            given market. We are constantly updating our skills
                            in a myriad of platforms.
                            <br />
                            <br />
                            Our team is multi-disciplinary and we are not merely
                            interested in form — content and meaning are just as
                            important. We give great importance to
                            craftsmanship, service, and prompt delivery. Clients
                            have always been impressed with our high-quality
                            outcomes that encapsulates their brand’s story and
                            mission.
                        </p>
                    </div>
                </div>
            </Grid.container>
            <Grid.container className={styles.locationWrapper}>
                <LocationList />
            </Grid.container>
            <div className={styles.bottomContainer}>
                <Grid.container fullMobile>
                    <div className={`${Grid.spanRow} ${styles.row}`}>
                        <picture>
                            <source
                                srcSet={`/assets/about/desktop/image-real-deal.jpg`}
                                media="(min-width: 1024px)"
                            />
                            <source
                                srcSet={`/assets/about/tablet/image-real-deal.jpg`}
                                media="(min-width: 556px)"
                            />
                            <img
                                loading="lazy"
                                src={`/assets/about/mobile/image-real-deal.jpg`}
                                alt=""
                            />
                        </picture>
                        <div className={styles.rowText}>
                            <h2>The real deal</h2>
                            <p>
                                As strategic partners in our clients’
                                businesses, we are ready to take on any
                                challenge as our own. Solving real problems
                                require empathy and collaboration, and we strive
                                to bring a fresh perspective to every
                                opportunity. We make design and technology more
                                accessible and give you tools to measure
                                success.
                                <br />
                                <br />
                                We are visual storytellers in appealing and
                                captivating ways. By combining business and
                                marketing strategies, we inspire audiences to
                                take action and drive real results.
                            </p>
                        </div>
                    </div>
                </Grid.container>
                <Icon.backgroundLeaf className={styles.bottomLeaf} />
            </div>
        </>
    )
}

export default About
