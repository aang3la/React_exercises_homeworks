import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 1000); //ms
    });

    return (
        <>
        <h1>The page you looking for is missing!</h1>
        <Navigate to="/" />
        </> 
    )
};

//Ova navigate vednas ne redirektira koj stranata sto nie sakame, ne e Link za da stisneme i da ne nosi, tuku avtomatski ne nosi
// So navigate primer da go odneseme userot na homepage koga veke se logiral