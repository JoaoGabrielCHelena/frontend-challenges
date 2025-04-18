import "./App.scss"
import utils from "./utils.module.scss"
import data from "./assets/data.json"
import Svg from "./assets/svg"

function Card({
    branch,
    name,
    src,
    srcLink,
    description,
    codeUrl,
    liveUrl,
    className,
}: {
    branch: string
    name: string
    src: string
    srcLink: string
    description: string
    codeUrl: string
    liveUrl: string
    className?: string
}) {
    return (
        <div className={`${className} card`}>
            <img src={`./thumbnails/${branch}.png`} width="350" alt="" />
            <div className="cardContent">
                <div>
                    <div className="cardTitleWrapper">
                        <p className="cardTitle">{name}</p>
                        <div className="cardTitleTooltip" aria-hidden="true">
                            {name}
                        </div>
                    </div>
                    <p className="cardSrc">
                        from: <a href={srcLink}>{src}</a>
                    </p>
                </div>
                <p className="cardDescription">{description}</p>
                <div className="cardButtonRow">
                    <a
                        target="_blank"
                        className="cardButtonCode"
                        href={codeUrl}
                    >
                        Code
                    </a>
                    <a
                        target="_blank"
                        className="cardButtonLive"
                        href={liveUrl}
                    >
                        Live Website
                    </a>
                </div>
            </div>
        </div>
    )
}

function App() {
    let organisedData = data.sort((a, b) => b.priority - a.priority)
    let cards = organisedData.map((e) => {
        return (
            <Card
                className={utils.absoluteSpan3L}
                liveUrl={e.liveUrl}
                codeUrl={e.codeUrl}
                name={e.name}
                src={e.src}
                srcLink={e.srcLink}
                description={e.description}
                branch={e.branch}
                key={e.branch}
            />
        )
    })

    // beyond 3 cards it breaks, i think
    let highlightedBranches = ["Designo-website", "WitW"]
    let highlightCards = organisedData.map((e) => {
        if (highlightedBranches.includes(e.branch)) {
            return (
                <>
                    <Card
                        liveUrl={e.liveUrl}
                        codeUrl={e.codeUrl}
                        name={e.name}
                        src={e.src}
                        srcLink={e.srcLink}
                        description={e.description}
                        branch={e.branch}
                        key={e.name}
                        className={`${utils.absoluteSpan4L}`}
                    />
                </>
            )
        }
        return null
    })
    let HighlightCardsWrapper = () => {
        let items = highlightedBranches.length,
            spaceOccupied = 4 * items,
            startingPosition = (12 - spaceOccupied) / 2 + 1,
            gridStartClass = `gridStart${startingPosition}L`
        return (
            <div
                className={`${utils.subgrid} ${utils.span8L} ${utils[gridStartClass]}`}
            >
                {highlightCards}
            </div>
        )
    }

    return (
        <>
            <main>
                <section id="BackToTop" className="firstSection">
                    <h1>Frontend Challenges</h1>
                    <p className="subtitle">
                        This is a catalog of multiple frontend challenges I’ve
                        done.
                    </p>
                    <p className="subtitleQuip">all in a monorepo!</p>
                    <div className="profileRow">
                        <a href="https://www.frontendmentor.io/profile/JoaoGabrielCHelena">
                            <Svg.frontendMentor />
                        </a>
                        <a href="https://github.com/JoaoGabrielCHelena">
                            <Svg.github />
                        </a>
                        <a href="https://www.linkedin.com/in/joão-gabriel-cardoso-helena">
                            <Svg.linkedin />
                        </a>
                    </div>
                </section>
                <section id="Highlights">
                    <h2>Highlights</h2>
                    <p className="subtitle">
                        These, for some reason, are things I am a tad bit
                        prouder of.
                    </p>
                    <p className="subtitleQuip">
                        Doesn’t mean they’re the best, or any good, being frank
                    </p>
                    <div
                        style={{ marginBottom: "112px" }}
                        className={`${utils.grid}`}
                    >
                        <HighlightCardsWrapper />
                    </div>
                </section>
                <section id="AllChallenges">
                    <h2>All Challenges</h2>
                    <p className="subtitle">
                        From single html files to multi-pages projects
                    </p>
                    <p className="subtitleQuip">
                        organised from best to worst, sorta
                    </p>
                    <div className={`${utils.grid}`}>{cards}</div>
                </section>
            </main>
            <footer>
                <div className={`${utils.grid} footerContent`}>
                    <div
                        className={`${utils.absoluteSpan4L} footerContentLinks`}
                    >
                        <a href="#BackToTop">Back to top</a>
                        <a href="#Highlights">Highlights</a>
                        <a href="#AllChallenges">All Challenges</a>
                    </div>
                    <Svg.star
                        className={`${utils.span4L} ${utils.gridStart8L}`}
                    />
                </div>
            </footer>
        </>
    )
}

export default App
