import { useState } from "react";

function Square({values,onSquareClick})
{
  return <button onClick={onSquareClick}>{values}</button>
}

export default function Board(){
  const [xIsNext,setXIsNext]=useState(true);
  const [squares,setSquares] = useState(Array(9).fill(null));
  

  function handleClick(i)
  {
    if(squares[i]||calculateWinner(squares))
      return;

    const nextSquare=squares.slice();
    if(xIsNext)
    nextSquare[i]="X";
    else
    nextSquare[i]="O";

    setSquares(nextSquare);
    setXIsNext(!xIsNext);

  }

  const winner=calculateWinner(squares);
  let status;
  if(winner)
    status= "winner:"+winner;
  else
    status= "nextplayer:"+(xIsNext?"X":"O");
  return(
    <>
    <div><h1>{status}</h1></div>
    <div>
    <Square values={squares[0]}  onSquareClick={()=>handleClick(0)}/>
    <Square values={squares[1]}  onSquareClick={()=>handleClick(1)}/>
    <Square values={squares[2]}  onSquareClick={()=>handleClick(2)}/>
    </div>
    <div>
    <Square values={squares[3]}  onSquareClick={()=>handleClick(3)}/>
    <Square values={squares[4]}  onSquareClick={()=>handleClick(5)}/>
    <Square values={squares[5]}  onSquareClick={()=>handleClick(6)}/>
    </div>
    <div>
    <Square values={squares[6]}  onSquareClick={()=>handleClick(6)}/>
    <Square values={squares[7]}  onSquareClick={()=>handleClick(7)}/>
    <Square values={squares[8]}  onSquareClick={()=>handleClick(8)}/>
    </div>
    </>
  )
}

function calculateWinner(squares)
{
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for(let i=0;i<lines.length;i++)
  {
    const [a,b,c] = lines[i];
    if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c])
      return squares[a];


  }
  return null;
}
