import React, { useState } from "react"

export default function Scoreboard() {

    const [homeScore, setHomeScore] = useState(0)
    const [guestScore, setGuestScore] = useState(0)

    const addOneHome = () => {
        setHomeScore(prevScore => prevScore + 1)
    }
    const addTwoHome = () => {
        setHomeScore(prevScore => prevScore + 2)
    }
    const addThreeHome = () => {
        setHomeScore(prevScore => prevScore + 3)
    }

    const subtractOneHome = () => {
        setHomeScore(prevScore => prevScore - 1)
    }
    const subtractTwoHome = () => {
        setHomeScore(prevScore => prevScore - 2)
    }
    const subtractThreeHome = () => {
        setHomeScore(prevScore => prevScore - 3)
    }

    const addOneGuest = () => {
        setGuestScore(prevScore => prevScore + 1)
    }
    const addTwoGuest = () => {
        setGuestScore(prevScore => prevScore + 2)
    }
    const addThreeGuest = () => {
        setGuestScore(prevScore => prevScore + 3)
    }

    const subtractOneGuest = () => {
        setGuestScore(prevScore => prevScore - 1)
    }
    const subtractTwoGuest = () => {
        setGuestScore(prevScore => prevScore - 2)
    }
    const subtractThreeGuest = () => {
        setGuestScore(prevScore => prevScore - 3)
    }

    return (
        <>
        <div className="container">
            <div className="team-container">
                <span className="team home">HOME</span>
                <div className="score-div">
                    <span className="digit-span">{homeScore}</span>
                </div>
                <div className="add-score-container">
                    <span className="add-score-span" onClick={addOneHome}>+1</span>
                    <span className="add-score-span" onClick={addTwoHome}>+2</span>
                    <span className="add-score-span" onClick={addThreeHome}>+3</span>
                </div>
                <div className="subtract-score-container">
                    <span className="subtract-score-span" onClick={subtractOneHome}>-1</span>
                    <span className="subtract-score-span" onclick={subtractTwoHome}>-2</span>
                    <span className="subtract-score-span" onClick={subtractThreeHome}>-3</span>
                </div>
            </div>
            <div className="team-container">
                <span className="team guest">GUEST</span>
                <div className="score-div">
                <span className="digit-span">{guestScore}</span>
                </div>
                    <div className="add-score-container">
                        <span className="add-score-span" onClick={addOneGuest}>+1</span>
                        <span className="add-score-span" onClick={addTwoGuest}>+2</span>
                        <span className="add-score-span" onClick={addThreeGuest}>+3</span>
                    </div>
                <div className="subtract-score-container">
                    <span className="subtract-score-span" onClick={subtractOneGuest}>-1</span>
                    <span className="subtract-score-span" onClick={subtractTwoGuest}>-2</span>
                    <span className="subtract-score-span" onClick={subtractThreeGuest}>-3</span>
                </div>
            </div>
        </div>
        </>
    )
}