import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../../Components/Dashboard/card';
import {getBugs} from '../../../Controllers/Redux/bugSlice';

export default() => {
    const dispatch = useDispatch();
    const bugs = useSelector(state=>state.bugs);
    const browserHistory = useNavigate();
    let highCount = 0
    let midCount = 0
    let lowCount = 0
    if(bugs !== undefined){
        highCount = filterBugs(1);
        midCount = filterBugs(2);
        lowCount = filterBugs(3);
    }

    function redirect(){
        browserHistory('/viewbugs')
    }

    function filterBugs(priority){
        return bugs.filter((bug) =>{return bug.priority == priority})
    }

    useEffect(() =>{
        dispatch(getBugs())
    }, [bugs == undefined])
    return(
        <div className="page-container">
        <Card priority="1" count={highCount.length} clicked={redirect} />
        <Card priority="2" count={midCount.length} clicked={redirect} />
        <Card priority="3" count={lowCount.length} clicked={redirect} />
        </div>
    )
}