import startingData from "./assets/data.json"
import "./App.scss"
import Theme from "./components/theming/theming"
import { Fragment, useState } from "react"

function Topbar() {
    return (
        <div className="topbar">
            <svg width={180} height={40}>
                <use xlinkHref="./images/logo.svg#logo"></use>
            </svg>
            <Theme.Toggle />
        </div>
    )
}

function App() {
    let [filter, setFilter] = useState<"all" | "active" | "inactive">("all"),
        [data, setData] = useState(startingData)
    // doing data this way so you can play around with it in the frontend without breaking anything

    let items = data.map((i) => {
        switch (filter) {
            case "active":
                if (i.isActive != true) return
                break
            case "inactive":
                if (i.isActive != false) return
                break
            default:
                //nothing happens
                break
        }

        let currentItemIndex = data.indexOf(i)

        return (
            <div className="item" key={i.name}>
                <div className="itemRowTop">
                    <img src={i.logo} alt="" width={60} height={60} />
                    <div className="itemText">
                        <p className="itemTitle">{i.name}</p>
                        <p className="itemDescription">{i.description}</p>
                    </div>
                </div>
                {/* prolly bad to use the name here instead of an id but i dont want to really alter the data */}
                <div className="itemRowBottom">
                    <button
                        className="itemRemove"
                        onClick={() => {
                            let newData = [...data]

                            newData.splice(currentItemIndex, 1)

                            setData(newData)
                        }}
                    >
                        Remove
                    </button>
                    <label htmlFor={i.name} className="itemSwitch">
                        <input
                            defaultChecked={i.isActive}
                            onChange={(e) => {
                                let newData = [...data]

                                newData[currentItemIndex].isActive =
                                    e.target.checked

                                setData(newData)
                            }}
                            id={i.name}
                            type="checkbox"
                            name={i.name}
                        />
                        <span></span>
                    </label>
                </div>
            </div>
        )
    })

    let filteroptions = ["all", "active", "inactive"],
        options = filteroptions.map((i) => {
            return (
                <Fragment key={i}>
                    <input
                        defaultChecked={i == "all"}
                        id={i}
                        type="radio"
                        name="filter"
                        className="filterOption"
                        onChange={() =>
                            setFilter(i as "all" | "active" | "inactive")
                        }
                    />
                    <label className="filterOptionText" htmlFor={i}>
                        {i}
                    </label>
                </Fragment>
            )
        })

    return (
        <>
            <Topbar />
            <div className="filterRow">
                <p className="filterTitle">Extensions List</p>
                <div className="filterOptionWrapper">{options}</div>
            </div>
            <div className="itemGrid">{items}</div>
        </>
    )
}

export default App
