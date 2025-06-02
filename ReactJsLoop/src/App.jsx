import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ArrOfObject from './Components/ArrOfObject'

function App() {
  const [count, setCount] = useState(0)



  const arr = [
        {id:1,name:"Sumit",subject:"React"},
        {id:2,name:"Puneet",subject:"Node"},
        {id:3,name:"abc",subject:"Express"},
        {id:4,name:"xyz",subject:"Mongodb"},
        {id:5,name:"adf",subject:"Css"}
    ]

    return(
      <>
      {
        arr.map((e,i) => {
          return <ArrOfObject id={e.id}  name={e.name} subject={e.subject}/>
        })
      }
      </>
    )
}

export default App