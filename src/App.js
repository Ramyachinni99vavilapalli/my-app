import React from 'react'
import Board from './Board'
import Navbar from './Navbar'
import Parts from './Parts'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Board
        a='\images\a1.jpg'
        b='\images\a10.jpg'
        c='\images\a3.png'
        n1="Oliver"
        n2="Ethan"
        n3="Amelia"
        p1="Data Scientist"
        e1="Oliv@12.in"
        w1="British"
        q1="Investment Banker"
        f1="ethan@34.in"
        x1="London"
        r1="Software Engineer"
        g1="Amelia@56.in"
        z1="Italy"
        />
      <Board
      a='\images\a4.png'
      b='\images\a5.png'
      c='\images\a6.jpg'
      n1="Lucas"
      n2="Ava"
      n3="Mia"
      p1="Dentist "
      e1="lucas@67.in"
      w1="Spain"
      q1="Solutions Architect"
      f1="ava@89.in"
      x1="Netherlands"
      r1="IT Manager "
      g1="mia@78.in"
      z1="America"
      />
      <Board
      a='\images\a7.png'
      b='\images\a8.jpg'
      c='\images\a9.jpg'
      n1="Marie"
      n2="Jonas"
      n3="Lena"
      p1="Internist"
      e1="marie@67.in"
      w1="Brazil"
      q1="Investment Banker"
      f1="jonas@56.in"
      x1="Denmark"
      r1="Architect "
      g1="lena@45.in"
      z1="Libya"
      />
      
    </div>
  )
}
export default App


