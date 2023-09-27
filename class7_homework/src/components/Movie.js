// Potoa Kreirajte nekoja komponenta Movie.js, vo koja samo kje prikazite 2 drugi komponenti 
// koj kje gi kreirate so ime informationAboutMovie.js i vnatre kje gi prikazite
// site informacii za filmot, osven slikite i linkot a potoa kje kreirate nekoja komponenta 
// koja kje bide VisualInformationAboutMovie.js, vo koja kje gi pokazete site sliki
// i linkot do trailerot, no ovoj objekt movie da bide kreiran vo app.js i praten preku kontekst 
// a potoa vo Information i VisualInformation da se zemaat informaciite za filmot
// i da se prikazat vo soodvetniot html.

import { InformationsAboutMovie } from "./InformationsAboutMovie";
import { VisualInformationAboutMovie } from "./VisualInformationAboutMovie";

export const Movie = () => {
    return(
        <div>
            <InformationsAboutMovie />
            <VisualInformationAboutMovie />
        </div>
    )
}