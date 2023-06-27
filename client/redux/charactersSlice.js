

import {createSlice} from '@reduxjs/toolkit';

const initialState= {
    personaje:[],
    personajeID:{},
    totalCharacters:0,
    currentPages:1,
    pages:1,
    nextPage:0,
    previousPage:null,
    totalPorPagina:0,
    regiones:[],
    comunas:[],
    
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
        filterByGenero: (state, action) => {
            const [{count,pages},datos]=action.payload;
            state.personaje = datos;
            state.totalCharacters = count;
            state.pages = pages;
            state.totalPorPagina= datos.length;
         
          },
          
        filterByEstado: (state, action) => {
            const [{count,pages},datos]=action.payload;
            state.personaje = datos;
            state.totalCharacters = count;
            state.pages = pages;
            state.totalPorPagina= datos.length;
        
          },
        filterByName:(state,action)=>{
            const [{count,pages},datos]=action.payload;
            state.personaje = datos;
            state.totalCharacters = count;
            state.pages = pages;
            state.totalPorPagina= datos.length;
        },
        filterByID:(state,action)=>{
          
            state.personajeID=action.payload;
            state.totalCharacters = 1;
            state.pages = 1;
            state.totalPorPagina= 1;
        },
        resetPage:(state,action)=>{
            state.currentPages=action.payload;
        },
        nextPage:(state,action)=>{
            state.currentPages= action.payload;
        },
        backPage:(state,action)=>{
            state.currentPages= action.payload;
        },
        buscarRegiones:(state,action)=>{
            state.regiones=action.payload
        },
        buscarComunas:(state,action)=>{
            state.comunas=action.payload
        }
    }
});

export const {
    addPersonajes,
    filterByGenero,
    filterByEstado,
    filterByName,
    filterByID,
    nextPage,
    backPage,
    resetPage,
} = charactersSlice.actions;
export default charactersSlice.reducer;