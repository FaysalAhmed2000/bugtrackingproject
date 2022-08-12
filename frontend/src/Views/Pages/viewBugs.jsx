/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from "react";

import {useDispatch,useSelector} from "react-redux";
import { getBugs } from "../../Controllers/Redux/bugSlice";
import BugCard from "../Components/BugCCard/bugCard";
import '../../index.css';
import BugView from "../Components/Bug view/bugView";



export default (props) => {
    const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
        name:"",
        isDisplayed:false
    });
    const dispatch = useDispatch();
    const { bugs } = useSelector(state => state);

    useEffect(() => {
        dispatch(getBugs());
    }, [bugs.length < 1]);

    function BugClicked(name){
        SET_DISPLAY_BUG({
            isDisplayed:!DISPLAY_BUG.isDisplayed,
            name:name
        })
    }

    return (
        <div className='page-container'>
            {bugs.map((bug, keys) => {
                 return <BugCard key={keys} bug={bug} clicked={BugClicked} />;
            })}
            {DISPLAY_BUG.isDisplayed && <BugView clicked={BugClicked} bug={bugs.filter((bug) => bug.name == DISPLAY_BUG.name)[0]} />}
        </div>

    );
}

