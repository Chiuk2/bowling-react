import React, { useState, useEffect } from 'react';
import '../App.css';

export default function CreateBoard(props) {
    const [frames, setFrames] = useState([]);
    useEffect(() => {
        for (let i = 1; i < 11; i++)
        {
            setFrames(arr => [...arr, i]);
        }
    }, []);

  return (

    <div className="bowling-scores">
                {/* <div className="frame-grid">
            {frames.map((element, key) => {
                return <div className="grid-item">{element}</div>
            })}
        </div> */}
        {props.scores.map((element, key) => {            
            return <div className="grid-item">{element}</div>
        })}
    </div>
  ) 
}
