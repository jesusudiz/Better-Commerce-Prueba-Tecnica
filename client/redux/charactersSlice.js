

import {createSlice} from '@reduxjs/toolkit';

const initialState= {
    personaje:[],
    totalCharacters:0,
    currentPages:1,
    pages:1,
    nextPage:0,
    previousPage:null,
    totalPorPagina:0
}

export const charactersSlice = createSlice({
    name:"characters",
    initialState,
    reducers: {
        addPersonajes: (state,action)=> {
            const [{count,pages},datos]=action.payload;
            state.personaje = datos;
            state.totalCharacters = count;
            state.pages = pages;
            state.totalPorPagina= datos.length;
        },
        filterByGenero:(state,action)=>{
            const [{count,pages},datos]=action.payload;
            state.personaje = datos;
            state.totalCharacters = count;
            state.pages = pages;
            state.totalPorPagina= datos.length;

        },
        filterByEstado:(state,action)=>{
            const [{count,pages},datos]=action.payload;
            state.personaje = datos;
            state.totalCharacters = count;
            state.pages = pages;
            state.totalPorPagina= datos.length;

        },
        filterByName:(state,action)=>{  
            const datos = action.payload;
            state.personaje = datos;
            state.totalPorPagina = datos.length,
            state.totalCharacters=datos.length
        },
        nextPage:(state,action)=>{
            state.currentPages= action.payload;
        },
        backPage:(state,action)=>{
            state.currentPages= action.payload;
        },
        
    }
});

export const {
    addPersonajes,
    filterByGenero,
    filterByEstado,
    filterByName,
    nextPage,
    backPage
}=charactersSlice.actions;
export default charactersSlice.reducer;