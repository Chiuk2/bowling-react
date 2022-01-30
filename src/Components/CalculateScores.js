import React, { useState, useEffect } from 'react';
import CreateBoard from './CreateBoard';
import '../App.css';

export default function CalculateScores({input}) {
    const [score, setScore] = useState(0);
    const [bowlScores, setBowlScores] = useState([]);

    useEffect(async () => {
        let newScore = await calculateScore({input});
        setScore(newScore);
    }, []);

    const caseStrike = (arr, index) => {
        let sum = 10;
        let aheadOne = arr[index + 1];
        let aheadTwo = arr[index + 2]
        if (aheadOne !== null)
        {
            if (aheadOne === "X")
            {
                sum += 10
            }
            else
            {
                sum += parseInt(aheadOne);
            }        
        }
        if (aheadTwo !== null)
        {
            if (aheadTwo === "X")
            {
            sum += 10
            }
            else if (aheadTwo === "/")
            {
            sum = 10 - parseInt(aheadOne) + sum;
            }
            else
            {
            sum += parseInt(aheadTwo);
            }
        }
        return sum;
    }

    const caseSpare = (arr, index) => {
        let sum = 0;
        let aheadOne = arr[index + 1];
        let prevOne = arr[index - 1];
        sum = 10 - parseInt(prevOne);
        if (aheadOne !== null)
        {
            if (aheadOne === "X")
            {
                sum += 10;
            }
            else
            {
                sum += parseInt(aheadOne);
            }
        }
        return sum;
    }


    const calculateScore = (event) => {
        let scores = input.split("");
        let totalScores = 0;
        let frames = 1;
        let balls = 2;
        for (let i = 0; i < scores.length; i++)
        {      
        if (frames < 10)
        {
            if (scores[i] === "X")
            {
                setBowlScores( arr => [...arr, scores[i]]);
                setBowlScores( arr => [...arr, " "]);
                totalScores += caseStrike(scores, i);
                balls = 0;
            }
            else if (scores[i] === "/")
            {
                setBowlScores( arr => [...arr, scores[i]]);
                totalScores += caseSpare(scores, i);
                balls = 0;
            }
            else
            {
                setBowlScores( arr => [...arr, scores[i]]);
                totalScores += parseInt(scores[i]);
                balls--;
            }
            if (balls == 0)
            {
                balls = 2;
                frames+= 1;
            } 
        }
        else
        {
            if (scores[i] === "X")
            {
                setBowlScores( arr => [...arr, scores[i]]);
                totalScores += 10;
            }
            else if (scores[i] === "/")
            {
                setBowlScores( arr => [...arr, scores[i]]);
                totalScores += 10 - parseInt(scores[i-1]);
            }
            else
            {
                setBowlScores( arr => [...arr, scores[i]]);
                totalScores += parseInt(scores[i]);
            }
        }
            console.log(`Frames: ${frames}`);  
            console.log(totalScores);
        }
        return totalScores;    
    }
    

  return (
    <div className='calculateScores'>
        <div className='title'>BOWLING ENTRY</div>
        <CreateBoard scores={bowlScores} />
        <div className='body'>INPUT: {input}</div>
        <div className='footer'>TOTAL SCORE: {score}</div>        
    </div>
  );
}
