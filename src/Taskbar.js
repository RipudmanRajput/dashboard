import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTasks, faUser } from '@fortawesome/free-solid-svg-icons';
import tadata from'./TaskdataAPI';
import img from './img/planning.png';



function TaskCard(props){
    return(
        <li className="taskcard">
            <div className="task_cardBody">
                <span className="task_icon"><img src={props.icon}/></span>
                    <p>
                        <span className="taskcount">{props.count}</span>
                        <span className="taskStatus">{props.status}</span>
                    </p>
            </div>
        </li>
    );
}

function Taskbar(){
    return(
      <>
        <div className="taskbar_secton page-width">
            <ul>
                {tadata.map(abc=>{
                    return(
                        <TaskCard
                        icon={abc.icon}
                        count={abc.taskCount}
                        status={abc.status}
                        />
                    );
                })}
                {/* <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/> */}
            </ul>
        </div> 
      </>  
    );
}

export default Taskbar;
