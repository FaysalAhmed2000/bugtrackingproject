/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './bugCard.css';
import priorityController from "../../../Controllers/priorityController";

export default (props) => {
    const {name,version,priority} = props.bug;
    const {level, color} = priorityController(priority);
    
    function Clicked(){
        props.clicked(name)
    }
    return(
        <div className="bugcard" onClick={Clicked} style={{color:color}}>
            <h2 className="name">{name}</h2>
            <h4 className="version">{version}</h4>
            <h5 className="priority">{level}</h5>
        </div>
    );
}
