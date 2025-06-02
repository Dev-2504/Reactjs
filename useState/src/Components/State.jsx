import React from 'react'
import { useState } from 'react'

export default function State() {
    // const [count, setCount] = useState(0)
    // const [str,setStr] = useState("Dev")
    // const [arr,setArr] = useState([10,20,30,40,50])
    const [bool,setBool] = useState("true")

    const update = () => {
      // const newarr = arr.map((e) => {
      //   return e + 10
      // })
      // setArr(newarr)

      // (bool == "true")?setBool("false"):setBool("true")
    }
  return (
    <>
      {/* {arr.map((e) => {
        return(
          <p>{e}</p>
        )
      })} */}

      <p>{bool}</p>
      <button onClick={update}>Update</button>
    </>
  )
}
