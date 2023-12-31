import { ADD_FAV , REMOVE_FAV , FILTER , ORDER } from "./types"


export const addFav = (character) =>{    //esta función recibe un personaje por parámetro
    return { type: ADD_FAV , payload: character}
}

export const removeFav = (id) =>{
    return { type: REMOVE_FAV , payload: id }
}

export const filterCards = (gender) =>{
    return { type: FILTER , payload: gender }
}

export const orderCards = (order) =>{
    return { type: ORDER , payload: order }
}