import { Link } from 'react-router-dom';



export const Nav = () => {

    return(
        <ul>
            <li><Link to="/search-cities">Search cities</Link></li>
            <li><Link to="/local-weather">Local Weather</Link></li>
        </ul>
    )
}