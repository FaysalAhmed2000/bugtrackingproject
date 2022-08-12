/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from "react";
import './bugForm.css';
import BugModel from '../../../../Models/bugModel';

export default (props) => {
    const [bugObject, setBugObject] = useState(new BugModel(props.bug));

    function inputChanged(e){
        setBugObject({
            ...bugObject,
            [e.target.name]:e.target.value
        })
    }
    return(
        <div className="bug-create">
            {props.title === "Edit Bug" && <button className="Close-btn" onClick={props.close}>Close</button>}
            <h1>{props.title}</h1>  
            <form method="post" action="/bugs">
                <label>ID:</label>
                <input name='ID' placeholder="ID" required onChange={inputChanged} value={bugObject.id}></input>
                <label>Details:</label>
                <textarea name='details' placeholder="Detailed description on the bug" required onChange={inputChanged} value={bugObject.details}></textarea>
                <label>Steps:</label>
                <textarea name='steps' placeholder="Steps to recreate bug" required onChange={inputChanged} value={bugObject.steps}></textarea>
                <label>Priority:</label>
                <select name="priority" required onChange={inputChanged} value={bugObject.priority}>
                    <option value='1'>High</option>
                    <option value='2'>Mid</option>  
                    <option value='3'>Low</option>    
                </select>
                <label>Assigned</label>
                <select name="assigned" onChange={inputChanged} value={bugObject.assigned}>
                    <option>Yeah</option>
                </select>
                <label>Application version:</label>
                <input name="version" placeholder="Application Version" onChange={inputChanged} value={bugObject.version}></input>
                <label>Time:</label>
                <input name="time" placeholder="Time created" onChange={inputChanged} value={bugObject.time}></input>
                <button type="submit">{props.title}</button>
            </form>  
        </div>
    )
}