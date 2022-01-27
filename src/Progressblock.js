import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown, faDrawPolygon, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';



var toggle=0;
    const showMenus =(id) =>{ 
    toggle++;
    if(toggle%2!=0){
        var dropmenu=document.getElementsByClassName("monthly_list");
        dropmenu[id].classList.add("drop-down-active");
        
        }
    else{
        var dropmenu=document.getElementsByClassName("monthly_list");
        dropmenu[id].classList.remove("drop-down-active");
        }
    }

//     var daay;    
// const Day =(day)=>{
//     daay=day;
//     return (daay);
// }

function PieChart(props){
    return(
        <>
        <div className="pie_chart">
            <div className="task_update" style={{inset: '0',position: 'absolute',width: '100%',content: "",height: '100%' ,background: "conic-gradient(lightgreen calc("+props.pro+"*1%),#0000 0)"}}/>
            <span className="percentage" id="percentage">{props.pro}%</span>
        </div>
        </>
    );
}
function Bargraph(){
    return(
        <>
         <div className="bar_graph">
                               <div className="Y-asix">
                                   <span>0</span>
                                   <span>10</span>
                                   <span>20</span>
                                   <span>30</span>
                                   <span>40</span>
                                   <span>50</span>
                                   <span>60</span>
                               </div>
                               <div className="barname bar1">
                                   <span></span>
                                   <span className="completed" style={{height: 80+"%"}}></span>
                                   <span className="incompleted" style={{height: 70+"%"}}></span>
                                   
                               </div>
                               <div className="barname bar2">
                                   <span></span>
                                   <span className="completed" style={{height: 60+"%"}}></span>
                                   <span className="incompleted" style={{height: 90+"%"}}></span>
                                   
                               </div>
                               <div className="barname bar3">
                                   <span></span>
                                   <span className="completed" style={{height: 80+"%"}}></span>
                                   <span className="incompleted" style={{height: 70+"%"}}></span>
                                   
                               </div>
                               <div className="barname bar4">
                                   <span></span>   
                                   <span className="completed" style={{height: 90+"%"}}></span>
                                   <span className="incompleted" style={{height: 60+"%"}}></span>
                                   
                               </div>
                               <div className="barname bar5">
                                   <span></span>
                                   <span className="completed" style={{height: 50+"%"}}></span>
                                   <span className="incompleted" style={{height: 10+"%"}}></span>
                                   
                               </div>
                               <div className="barname bar6">
                                   <span></span>       
                                   <span className="completed" style={{height: 40+"%"}}></span>
                                   <span className="incompleted" style={{height: 80+"%"}}></span>
                                   
                               </div>
                            </div>
                            <div className="bar_number">
                                <span className="bar_title"></span>
                                <span className="bar_title">1</span>
                                <span className="bar_title">2</span>
                                <span className="bar_title">3</span>
                                <span className="bar_title">4</span>
                                <span className="bar_title">5</span>
                                <span className="bar_title">6</span>
                            </div>
        </>
    );
}
var Day;
var d;
function day(){
    Day=40;
    return(Day);
}
function Progressblock(){
return(
    <>
        <div className="prgress_section page-width">
            <div className="progress_block">
                <div className="progress_card">
                    <div className="card_body">
                        <div className="process_title">
                            <span className="sub_title">Contract By</span>
                            <span className="tirle">LIBRO Impact</span>
                        </div>
                        <div className="monthly_progress">
                            <p  className="select_duration" id="0" onClick={()=>showMenus(0)}>Select Month<span><FontAwesomeIcon icon={faArrowDown}/></span></p>
                            <div className="monthly_list">
                                <li onClick={d=day}>Today</li>
                                <li onClick={d=day}>Tommorow</li>
                                <li>Last Month</li>
                                <li>Month</li>
                            </div>
                        </div>
                        <div className="progress_bar_block">
                            <PieChart
                            
                            pro={d}
                            />
                            <div className="progress_status">
                                <li className="achived"><span className="dots sucess"></span><span className="ti">Imapacted</span></li>
                                <li className="unachived"><span className="dots "></span><span className="ti">UnImpacted</span></li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="progress_card">
                    <div className="card_body">
                        <div className="process_title">
                            <span className="sub_title">Contract By</span>
                            <span className="tirle">LIBRO Impact</span>
                        </div>
                        <div className="monthly_progress">
                            <p className="select_duration" id="1" onClick={()=>showMenus(1)}>Select Month<span><FontAwesomeIcon icon={faArrowDown}/></span></p>
                            <div className="monthly_list">
                                <li>Today</li>
                                <li>Tommorow</li>
                                <li>Last Month</li>
                                <li>Month</li>
                            </div>
                        </div>
                        <div className="progress_bar_block">
                           <Bargraph/>
                            <div className="progress_status">
                                <li className="achived"><span className="dots sucess"></span><span className="ti">Imapacted</span></li>
                                <li className="unachived"><span className="dots "></span><span className="ti">UnImpacted</span></li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="progress_card">
                    <div className="card_body">
                        <div className="process_title">
                            <span className="sub_title">Contract By</span>
                            <span className="tirle">LIBRO Impact</span>
                        </div>
                        <div className="monthly_progress">
                            <p className="select_duration" id="2" onClick={()=>showMenus(2)}>Select Month<span><FontAwesomeIcon icon={faArrowDown}/></span></p>
                            <div className="monthly_list">
                                <li>Today</li>
                                <li>Tommorow</li>
                                <li>Last Month</li>
                                <li>Month</li>
                            </div>
                        </div>
                        <div className="progress_bar_block">
                            <PieChart
                                pro="28"
                            />
                            <div className="progress_status">
                                <li className="achived"><span className="dots sucess"></span><span className="ti">Imapacted</span></li>
                                <li className="unachived"><span className="dots "></span><span className="ti">UnImpacted</span></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}
export default Progressblock;