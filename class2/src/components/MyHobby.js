//? DOMASHNA
  // Da kreirame i treta komponenta kade kje imame nekoj tekst
  // koj kje bide eve slika od moeto omileno hoby
  // da ima slika od hobito
  // da stavime css vnatre da toj tekst e oboen vo nekoja razlicna boja
  // i normalno slikata da ni bide vo razmer i toj css da bide
  // importiran od nekoj nadvoresen css file
  // koga kje pomineme so mouse-ot vrz slikata da ispecatime vo
  // konzola nekoj tekst (hello there!!!)

import React from "react";

//* functional component
export const MyHobby = () => {

    function onHover() {
      console.log("Hello There!!!")
    }

    return (
      <>
        <h3 className="heading">Here is an image of my favorite hobby:</h3>
        <img src="https://i.guim.co.uk/img/media/e994bb7ab8b900b70a4ac07026f85ba6ac06e25e/0_248_7360_4415/master/7360.jpg?width=1200&quality=85&auto=format&fit=max&s=775e8347a5a62a6d5bef19bd670bc3ba" 
          alt="my-favorite-hobby" id="hobby-img" onMouseOver={onHover}/>
      </>
    )
}