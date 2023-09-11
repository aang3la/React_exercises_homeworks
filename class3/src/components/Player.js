export function Player({igrac: { firstName, print }}) {
    return(
        <div>
            <h1>Player name is {firstName}</h1>
            <button onClick={print}>Player Score</button>
        </div>
    )
}

// export function Player2(props) {
//     console.log(props);

//     return(
//         <div>
//             <h1>Player name is {props.igrac.firstName}</h1>
//             <button onClick={props.igrac.print}>Player Score</button>
//         </div>
//     )
// }