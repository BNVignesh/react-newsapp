import React, { useRef, useState } from 'react'
import './tictactoe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'




const Tictactoe = () => {
    let current='x';
const [bool,setBool]=useState(false);

function  mark(e){
    if(!bool){
        e.target.innerHTML=`${current}`
        if(current==='x'){
            current='o'
        }else{
            current='x';
        }
    }
    checker();
}
const heading=useRef();
const box0=useRef();
const box1=useRef();
const box2=useRef();
const box3=useRef();
const box4=useRef();
const box5=useRef();
const box6=useRef();
const box7=useRef();
const box8=useRef();
const arr=[box0,box1,box2,box3,box4,box5,box6,box7,box8]
function checker(){
    if( box0.current.innerHTML && box0.current.innerHTML===box1.current.innerHTML && box0.current.innerHTML===box2.current.innerHTML ){
        heading.current.innerHTML=`Winner is : ${box0.current.innerHTML}`;
        setBool(true);
    } else if( box3.current.innerHTML && box4.current.innerHTML===box3.current.innerHTML && box4.current.innerHTML===box5.current.innerHTML ){
        heading.current.innerHTML=`Winner is : ${box3.current.innerHTML}`;
        setBool(true);
    }else if( box6.current.innerHTML && box6.current.innerHTML===box7.current.innerHTML && box7.current.innerHTML===box8.current.innerHTML ){
        heading.current.innerHTML=`Winner is : ${box6.current.innerHTML}`;
        setBool(true);
    }else if( box0.current.innerHTML && box0.current.innerHTML===box3.current.innerHTML && box3.current.innerHTML===box6.current.innerHTML ){
        heading.current.innerHTML=`Winner is : ${box0.current.innerHTML}`;
        setBool(true);
    }else if( box1.current.innerHTML && box1.current.innerHTML===box4.current.innerHTML && box4.current.innerHTML===box7.current.innerHTML ){
        heading.current.innerHTML=`Winner is : ${box1.current.innerHTML}`;
        setBool(true);
    }else if( box2.current.innerHTML && box2.current.innerHTML===box5.current.innerHTML && box5.current.innerHTML===box8.current.innerHTML ){
        heading.current.innerHTML=`Winner is : ${box2.current.innerHTML}`;
        setBool(true);
    }else if( box0.current.innerHTML && box4.current.innerHTML===box0.current.innerHTML && box4.current.innerHTML===box8.current.innerHTML ){
        heading.current.innerHTML=`Winner is : ${box0.current.innerHTML}`;
        setBool(true);
    }else if( box2.current.innerHTML && box4.current.innerHTML===box2.current.innerHTML && box4.current.innerHTML===box6.current.innerHTML ){
        heading.current.innerHTML=`Winner is : ${box2.current.innerHTML}`;
        setBool(true);
    }
}
function reset(){
    heading.current.innerHTML="Tic-Tac-Toe";
    arr.map((box)=>{box.current.innerHTML=""})
}
  return (
    <div>
        <div className="app">
            <div className="heading">
                <h1 ref={heading}>Tic-Tac-Toe </h1>
            </div>
            <div className="board">
                <div className="row 1">
                    <div className="box" ref= {box0} onClick={(e)=>{mark(e)}}></div>
                    <div className="box" ref= {box1} onClick={(e)=>{mark(e)}}></div>
                    <div className="box" ref= {box2} onClick={(e)=>{mark(e)}}></div>
                </div>
                <div className="row 2">
                    <div className="box" ref= {box3} onClick={(e)=>{mark(e)}}></div>
                    <div className="box" ref= {box4} onClick={(e)=>{mark(e)}}></div>
                    <div className="box" ref= {box5} onClick={(e)=>{mark(e)}}></div>
                </div>
                <div className="row 3">
                    <div className="box" ref= {box6} onClick={(e)=>{mark(e)}}></div>
                    <div className="box" ref= {box7} onClick={(e)=>{mark(e)}}></div>
                    <div className="box" ref= {box8} onClick={(e)=>{mark(e)}}></div>
                </div>
            </div>
            <div className="reset">
                <button onClick={()=>{reset()}}>
                    reset
                </button>
            </div>
        </div>

      

    </div>
  )
}

export default Tictactoe