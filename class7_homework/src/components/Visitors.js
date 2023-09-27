// BONUS: Da napravime i uste edna komponenta visitors, on the site, vo koja kje prikazeme 
// nekoja lista od usernames koja kje bide pratena od app.js preku contekstot.
import React from 'react';
import { MovieContext } from "../App";

export const Visitors = () => {
    const context = React.useContext(MovieContext);
    console.log(context);

    return(
        <div>
            <p>Visitors on the site</p>
            <ul>
                {context.map((username, index) => (
                    <li key={index}>{username}</li>
                ))}
            </ul>
        </div>
    )
}