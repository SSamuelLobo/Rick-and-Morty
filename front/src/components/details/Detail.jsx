import axios from "axios";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";


const Detail = () =>{

    const { id } = useParams();
    const [character, setCharacter] = useState(null) //aqui me dicen que lo haga con un objeto vacio

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        //   y que ponga esto -> return setCharacter({}); pero asi no funciona para "desmontarlo"
      }, [id]);

    return(
        <div>
      {character && (  //es una técnica comúnmente utilizada en React para renderizar condicionalmente un fragmento de JSX.
      //En el estado inicial, cuando character es null (antes de que se complete la solicitud Axios), la expresión 
      //{character && (...)} evalúa false y no renderiza nada
        <div>
          <h2 className="card-name">{character.name}</h2>
          <h2>Status: {character.status}</h2>
          <h2>Specie: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin.name}</h2> {/* Accede a origin.name */}
          <img src={character.image} alt={character.name} />
        </div>
      )}
    </div>
    )
}

export default Detail ;