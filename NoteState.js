import React from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const state={
        "burgerqty":0,
        "total":0,
        "burgerprice":100
    }
    return (
    <NoteContext.Provider value={state}>
        {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;