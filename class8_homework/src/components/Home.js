// DOMASHNA: Kreirajte komponenta home koja sto vnatre ke ima nekoj text Welcome to my page a vo nekoj h2 I am learning React Router.
// Potoa da imame uste edna komponenta Movies i vnatre da prikazeme nekoja lista od filmovi, tie neka imaat ime i zanr
// Da kreirame ruti za Home i Movies i navigacija do niv za novies neka bide /movies a za home /
// Da dodademe nekoj novi komponenti kako NewMovie koja kje se renderirana pat /movies/new i vnatre da imate nekoja forma so 3 inputi 
// za imeto na filmot,zanrot i ratingot i tie da se cuvaat vo nekoj stejt koga kje se submitira formata da gi ispecatime vrednostite vo konzola. 
// Da imame i notfound komponenta kade sto kje imame nekoj golem tekst 404 koj sto kje bide crveno a pod nego da ima nekoj drug tekst the resource you are looking for is missing. 
// Da napravime i Movie komponenta koja kje prima lista od filmovi i preku custom parametar vo rutite da prikazuvame poveke informacii za posebniot film. 
// Da se prikaze listata od filmovi vo movies i potoa so klik na sekoj od filmovite da se prikazat dopolnitelni informacii. 
// BONUS: listat da bide samo vo app.js a preku props prakajte ja vo komponentite sto vi trebaat.
export const Home = () => {
    return(
        <div>
            <h1>Welcome to my page</h1>
            <h2>I am learning React Router</h2>
            <img src="https://www.edureka.co/blog/wp-content/uploads/2017/09/routing_blog.png" />
        </div>
    )
};