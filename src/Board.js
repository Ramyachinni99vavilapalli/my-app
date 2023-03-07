import React from 'react'
import Parts from './Parts'

const Board = ({a,b,c,n1,n2,n3,p1,e1,w1,q1,f1,x1,r1,g1,z1}) => {
  return (
    <div className='main'>
      <Parts z={a} c1={n1} p={p1} e={e1} w={w1}/>
      <Parts z={b} c1={n2} p={q1} e={f1} w={x1}/> 
      <Parts z={c} c1={n3} p={r1} e={g1} w={z1}/>
    </div>
  )
}

export default Board
