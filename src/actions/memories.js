import * as api from "../api";
export const getMemorie = () => async(dispatch) =>{
    try{
        const{data} = await api.fetchMemorie();
        dispatch({type:"FETCH_ALL",payload:data});
    }catch(error){
        console.log(error.message);
    }
};

export const createMemorie = (memorie) => async(dispatch) =>{
    try{
        const{data} = await api.createMemorie(memorie);
        dispatch({type:"CREATE",payload:data});
    }catch(error){
        console.log(error.message);
    }
};

export const updateMemorie = (id,memorie) => async(dispatch)=>{
    try{
        const{data} = await api.updateMemorie(id,memorie);
        dispatch({type:"UPDATE",payload:data});
    }
    catch(error){
        console.log(error.message);
    }
};

export const deleteMemorie = (id) =>async(dispatch) =>{
    try{
        await api.deleteMemorie(id);
        dispatch({type:"DELETE", payload:id});
    }catch(error){
        console.log(error.message);
    }
};