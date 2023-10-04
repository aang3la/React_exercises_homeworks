import { Link } from 'react-router-dom';

export const Navigation = () => {
    return(
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/users">Users</Link></li>
        </ul>
    )
}