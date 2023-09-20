//?Za domasna:
//? Da napravime komponenta koja kje bide slicna na Movie.js komponentata.
//? Da imame 4 sliki od avtomobili i pod sekoja slika da imame kopce like 
//? sto bi znacelo plus 1 glas za toj avtomobil. 
//? Preku useEffect napravete da koga nekoj avtomobil kje stigne do 4 glasa 
//? se ispecati vo konzola deka e avtomobil na godinata.
//? BONUS: Dokolku imate vreme Pod sekoj avtomobil da ima tri kopcinja 
//? ednoto like, drugoto dislike (-1 glass) i superLike (+2 glasa) 
//? i preku useEffect da se naprai da vo konzola se pecatat glasovite od site avtomobili 
//? no samo koga se glasa za 1 i 3 tiot avtomobil

//* This component provides a simple interface for users to vote for their favorite cars and logs a message when a car receives enough votes
import { useState, useEffect } from 'react';

export const CarVotes = () => {
    //Defined four separate state variables 
    const [car1Votes, setCar1Votes] = useState(0);
    const [car2Votes, setCar2Votes] = useState(0);
    const [car3Votes, setCar3Votes] = useState(0);
    const [car4Votes, setCar4Votes] = useState(0);

    // Object defined to store information about each car
    const cars = {
        car1: { name: "Audi E-Tron", votes: car1Votes },
        car2: { name: "BMW i7", votes: car2Votes },
        car3: { name: "Volkswagen Taigun", votes: car3Votes },
        car4: { name: "Peugeot 3008", votes: car4Votes },
    };

    // The useEffect hook is used to monitor changes in the state variables
    useEffect(() => {
        for (const carKey in cars) {
            if (cars[carKey].votes === 4) {
              console.log(`${cars[carKey].name} is the best car of the year!`);
            }
          }
    }, [car1Votes, car3Votes]);
   
    return(
        <>
            <h1>Welcome to our voting app for cars!</h1>
            <div>
                <img src="https://www.audiusa.com/content/dam/nemo/ca/NoMo/Home/Stage/1920x1080_v4_MY24---Q8-Sportback-e-tron---Side-Profile---Driving.jpg" 
                    style={{ width: 400, height: 250 }}
                />
                <br/> <br/>
                <button onClick={() => {
                    setCar1Votes(car1Votes + 1);
                }}>Like</button>
                <button onClick={() => {
                    setCar1Votes(car1Votes - 1);
                }}>Dislike</button>
                <button onClick={() => {
                    setCar1Votes(car1Votes + 2);
                }}>SuperLike</button>
                <h3>Audi E-Tron likes: {car1Votes}</h3>
            </div>
            <hr/> 
            <div>
                <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230106025629_P90486165_highRes_the_new_bmw_760i_xdr.jpg&w=726&h=482&q=75&c=1"
                style={{ width: 400, height: 250 }}
                />
                <br/> <br/>
                <button onClick={() => {
                    setCar2Votes(car2Votes + 1);
                }}>Like</button>
                <button onClick={() => {
                    setCar2Votes(car2Votes - 1);
                }}>Dislike</button>
                <button onClick={() => {
                    setCar2Votes(car2Votes + 2);
                }}>SuperLike</button>  
                <h3>BMW i7 likes: {car2Votes}</h3>
            </div>
            <hr/> 
            <div>
                <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Volkswagen/Taigun/10632/1689938345983/front-left-side-47.jpg"
                style={{ width: 400, height: 250 }}
                />
                <br/> <br/>
                <button onClick={() => {
                    setCar3Votes(car3Votes + 1);
                }}>Like</button>
                <button onClick={() => {
                    setCar3Votes(car3Votes - 1);
                }}>Dislike</button>
                <button onClick={() => {
                    setCar3Votes(car3Votes + 2);
                }}>SuperLike</button>
                <h3>Volkswagen Taigun likes: {car3Votes}</h3>
            </div>
            <hr/>
            <div>
                <img src="https://www.evanshalshaw.com/-/media/evanshalshaw/peugeot/car-models/3008/peugeot-3008-front-720x405px.ashx"
                style={{ width: 400, height: 250 }}
                />
                <br/> <br/>
                <button onClick={() => {
                    setCar4Votes(car4Votes + 1);
                }}>Like</button>
                <button onClick={() => {
                    setCar4Votes(car4Votes - 1);
                }}>Dislike</button>
                <button onClick={() => {
                    setCar4Votes(car4Votes + 2);
                }}>SuperLike</button>
                <h3>Peugeot 3008 likes: {car4Votes}</h3>
            </div>
        </>
    )
};