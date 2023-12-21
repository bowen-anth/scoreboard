import React from "react"

export default function Scoreboard() {
    return (
        <>
        <div class="container">
            <div className="team-container">
                <span className="team">HOME</span>
                <div className="score-div">
                    <span className="digit-span">0</span>
                </div>
                <div className="add-score-container">
                    <span className="add-score-span">+1</span>
                    <span className="add-score-span">+2</span>
                    <span className="add-score-span">+3</span>
                </div>
                <div className="subtract-score-container">
                    <span className="subtract-score-span">-1</span>
                    <span className="subtract-score-span">-2</span>
                    <span className="subtract-score-span">-3</span>
                </div>
            </div>
            <div className="team-container">
                <span className="team">GUEST</span>
                <div className="score-div">
                <span className="digit-span">0</span>
                </div>
                    <div className="add-score-container">
                        <span className="add-score-span">+1</span>
                        <span className="add-score-span">+2</span>
                        <span className="add-score-span">+3</span>
                    </div>
                <div className="subtract-score-container">
                    <span className="subtract-score-span">-1</span>
                    <span className="subtract-score-span">-2</span>
                    <span className="subtract-score-span">-3</span>
                </div>
            </div>
        </div>
        </>
    )
}