/* style*/ 
import './App.css';

/*Component to Render*/
import Nav from './components/nav/Nav';
import Form from './components/form/Form';
import Error from './components/error/Error';
import About from './components/about/About';
import Detail from './components/details/Detail';
import Cards from './components/cards/Cards.jsx';
import Favorites from "./components/favorites/Favorites"

/* hooks */
import { useState ,  useEffect } from 'react';
import { Routes, Route , useLocation , useNavigate } from "react-router-dom"

/*dependecies */
import axios from 'axios';


/*credentials */
const EMAIL =  "samuel.sgcs768@gmail.com"
const PASSWORD = "xd123*"

const App = () => {

   //Local states
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

   //Routings
  const location = useLocation();
  const navigate = useNavigate();

  //validation
  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);


//Busca el caracter de la api , verifica que no este repetido y y actualiza el estado local
const onSearch = (id) => {

   const characterRepeated = [...characters].map((char) => char.id);

   console.log(characterRepeated); //debo eliminar esto

   if (!characterRepeated.includes(Number(id))) {

     // ruta dinámica:
     axios(`https://rickandmortyapi.com/api/character/${id}`)
       .then(({ data }) => {

         // data es un objeto que es la respuesta de la api
         // verifica que la api trajo una respuesta, podría ser data.cualquier propiedad
         if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
         }
       })
       // .then no sabe manejar errores, por eso hay que usar .catch
       .catch(() => {
         alert("¡No hay personajes con este ID!");
       });
   } else {
         window.alert('¡Este personaje ya se encuentra en pantalla!');
      }
};
 

  const onClose = (id) => {
    const parsedId = parseInt(id);
    const filteredCharacters = characters.filter((character) => character.id !== parsedId);
    setCharacters(filteredCharacters);
  };

  return (
    <div className="App">
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path='/detail/:id' element={<Detail />} />


        <Route path="/" element={<Form login={login} />} />
        {/* estos 2 tiene una pelea de quien gana */}
        {/* <Route path="/*" element={<Error />} /> */}

      </Routes>
    </div>
  );
};

export default App;




















// /* style*/ 
// import './App.css';

// /*Component to Render*/
// import Nav from './components/nav/Nav';
// import Form from './components/form/Form';
// import About from './components/about/About';
// import Detail from './components/details/Detail';
// import Cards from './components/cards/Cards.jsx';
// import Favorites from "./components/favorites/Favorites"

// /* hooks */
// import { useState ,  useEffect } from 'react';
// import { Routes, Route , useLocation , useNavigate } from "react-router-dom"

// /*dependecies */
// import axios from 'axios';


// /*credentials */
// const EMAIL =  "samuel.sgcs768@gmail.com"
// const PASSWORD = "xd123*"

// const App = () => {

//   const [characters, setCharacters] = useState([]);
//   const [access, setAccess] = useState(false);

//   /*---------------------------------------------------------------------------------------- */
//   //OJITO ACAA 👀
//   //// Conjunto de IDs de personajes existentes
//   /*(Set) es un tipo de objeto. Es una estructura de datos incorporada que representa una colección de valores únicos*/

//   const [existingCharacterIds, setExistingCharacterIds] = useState(new Set()); 
//   /*------------------------------------------------------------------------------------------*/ 
//   console.log(existingCharacterIds);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const login = (userData) => {
//     if (userData.password === PASSWORD && userData.email === EMAIL) {
//       setAccess(true);
//       navigate('/home');
//     }
//   };

//   useEffect(() => {
//     !access && navigate('/');
//   }, [access]);

//   const onSearch = (id) => {
//     if (!existingCharacterIds.has(id)) {
//       axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
//         if (data.name) {
//           setCharacters((oldChars) => [...oldChars, data]);
//           setExistingCharacterIds((prevIds) => new Set([...prevIds, id])); // Agrega el ID al conjunto
//         } else {
//           window.alert('¡No hay personajes con este ID!');
//         }
//       });
//     } else {
//       window.alert('¡Este personaje ya se encuentra en pantalla!');
//     }
//   };

//   const onClose = (id) => {
//     const parsedId = parseInt(id, 10);
//     const filteredCharacters = characters.filter((character) => character.id !== parsedId);
//     setCharacters(filteredCharacters);
//     setExistingCharacterIds((prevIds) => {
//       const newIds = new Set(prevIds);
//       newIds.delete(id); // Elimina el ID del conjunto
//       return newIds;
//     });
//   };

//   return (
//     <div className="App">
//       {location.pathname !== '/' && <Nav onSearch={onSearch} />}
//       <Routes>
//         <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/favorites" element={<Favorites />} />
//         <Route path="/" element={<Form login={login} />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;



















// /* style*/ 
// import './App.css';

// /*Component to Render*/
// import Nav from './components/nav/Nav';
// import Form from './components/form/Form';
// import About from './components/about/About';
// import Detail from './components/details/Detail';
// import Cards from './components/cards/Cards.jsx';
// import Favorites from "./components/favorites/Favorites"

// /* hooks */
// import { useState ,  useEffect } from 'react';
// import { Routes, Route , useLocation , useNavigate } from "react-router-dom"

// /*dependecies */
// import axios from 'axios';

// /*credentials */
// const EMAIL =  "samuel.sgcs768@gmail.com"
// const PASSWORD = "Naruto123*"

// const App = () => {

//    const [ characters, setCharacters ] = useState([])
//    const [ access , setAccess ] = useState(false)
//    const location = useLocation();
//    const navigate = useNavigate();

  
//    const login = (userData) =>{
//       if (userData.password === PASSWORD && userData.email === EMAIL) {
//          setAccess(true);
//          navigate('/home');
//       }
//    }

//    useEffect(() => {
//       !access && navigate('/');
//    }, [access]);

   
//    const onSearch = (id) => {
//         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
//           if (data.name) {
//             setCharacters((oldChars) => [...oldChars, data]);
//           } else {
//             window.alert('¡No hay personajes con este ID!');
//           }
//         });
//    }
    
    
//     const  onClose = (id)=>{
//       const parsedId = parseInt(id, 10); //convierte la cadena en un numero
//       const filteredcharacters = characters.filter((character) => character.id !== parsedId);
//       setCharacters(filteredcharacters) //actualiza los caracteres y quita el caracter que no quiere
//    }
   
//    return (
//     <div className='App'>
//          {location.pathname !== '/' && <Nav onSearch={onSearch} /> /*El pathname permite saber en que localidad se encuentra la pagina*/} 
//          <Routes>
//             <Route path='/home' element={<Cards characters={characters} onClose={onClose} /*Ya no recuerdo como funcionaba esto*/ />} />
//             <Route path='/about' element={<About/>}/>
//             <Route path='/favorites' element={<Favorites/>}/>
//             <Route path='/detail/:id' element={<Detail />} />
//             <Route path='/' element = {<Form login={login}/>}/>
//          </Routes>
         
//       </div>
//   )
// }

// export default App







// const onSearch = (id) => {
//    // Comprueba si el personaje con el mismo ID ya está en la lista
//    if (!characters.some((character) => character.id === id)) {

   //      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      //        if (data.name) {
         //          setCharacters((oldChars) => [...oldChars, data]);
//        } else {
//          window.alert('¡No hay personajes con este ID!');
//        }
//      });
//    } else {
//      window.alert('¡Este personaje ya está en tu lista!');
//    }
//  };













// const  onSearch = (id)=> {
   
   //       if(!characters.some( character => character.id === id)) {
      
      //          axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         //             if (data.name) {
            //                setCharacters((oldChars) => [...oldChars, data]);
            //             } else {
               //                window.alert('¡No hay personajes con este ID!');
               //             }
               //          });
               //       }
   
// }