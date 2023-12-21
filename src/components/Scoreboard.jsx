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
                    <span className="subtract-score-span" onClick={subtractTwoHome}>-2</span>
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

//GPT Refactor High Level

// import React, { useState } from "react";

// export default function Scoreboard() {
//   const [scores, setScores] = useState({
//     home: 0,
//     guest: 0
//   });

//   const updateScore = (team, points) => {
//     setScores((prevScores) => ({
//       ...prevScores,
//       [team]: prevScores[team] + points,
//     }));
//   };

//   const Team = ({ teamName }) => (
//     <div className="team-container">
//       <span className={`team ${teamName}`}>{teamName.toUpperCase()}</span>
//       <div className="score-div">
//         <span className="digit-span">{scores[teamName]}</span>
//       </div>
//       <div className="add-score-container">
//         {[1, 2, 3].map((points) => (
//           <span
//             key={points}
//             className="add-score-span"
//             onClick={() => updateScore(teamName, points)}
//           >
//             +{points}
//           </span>
//         ))}
//       </div>
//       <div className="subtract-score-container">
//         {[1, 2, 3].map((points) => (
//           <span
//             key={points}
//             className="subtract-score-span"
//             onClick={() => updateScore(teamName, -points)}
//           >
//             -{points}
//           </span>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="container">
//       <Team teamName="home" />
//       <Team teamName="guest" />
//     </div>
//   );
// }

//GPT Refactor med level
// import React, { useState } from "react";

// export default function Scoreboard() {
//   const [homeScore, setHomeScore] = useState(0);
//   const [guestScore, setGuestScore] = useState(0);

//   const addPoint = (team, points) => {
//     if (team === "home") {
//       setHomeScore((prevScore) => prevScore + points);
//     } else if (team === "guest") {
//       setGuestScore((prevScore) => prevScore + points);
//     }
//   };

//   const subtractPoint = (team, points) => {
//     if (team === "home") {
//       setHomeScore((prevScore) => prevScore - points);
//     } else if (team === "guest") {
//       setGuestScore((prevScore) => prevScore - points);
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="team-container">
//           <span className="team home">HOME</span>
//           <div className="score-div">
//             <span className="digit-span">{homeScore}</span>
//           </div>
//           <div className="add-score-container">
//             <span className="add-score-span" onClick={() => addPoint("home", 1)}>
//               +1
//             </span>
//             <span className="add-score-span" onClick={() => addPoint("home", 2)}>
//               +2
//             </span>
//             <span className="add-score-span" onClick={() => addPoint("home", 3)}>
//               +3
//             </span>
//           </div>
//           <div className="subtract-score-container">
//             <span className="subtract-score-span" onClick={() => subtractPoint("home", 1)}>
//               -1
//             </span>
//             <span className="subtract-score-span" onClick={() => subtractPoint("home", 2)}>
//               -2
//             </span>
//             <span className="subtract-score-span" onClick={() => subtractPoint("home", 3)}>
//               -3
//             </span>
//           </div>
//         </div>
//         <div className="team-container">
//           <span className="team guest">GUEST</span>
//           <div className="score-div">
//             <span className="digit-span">{guestScore}</span>
//           </div>
//           <div className="add-score-container">
//             <span className="add-score-span" onClick={() => addPoint("guest", 1)}>
//               +1
//             </span>
//             <span className="add-score-span" onClick={() => addPoint("guest", 2)}>
//               +2
//             </span>
//             <span className="add-score-span" onClick={() => addPoint("guest", 3)}>
//               +3
//             </span>
//           </div>
//           <div className="subtract-score-container">
//             <span className="subtract-score-span" onClick={() => subtractPoint("guest", 1)}>
//               -1
//             </span>
//             <span className="subtract-score-span" onClick={() => subtractPoint("guest", 2)}>
//               -2
//             </span>
//             <span className="subtract-score-span" onClick={() => subtractPoint("guest", 3)}>
//               -3
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

