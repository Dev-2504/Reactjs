import React from 'react'
import Navbar from './Navbar'
import Content from './Content'


export default function Card() {
  return (
    <div className="h-screen w-full overflow-x-hidden overflow-y-hidden">
        <Navbar />
        <Content />
    </div>
  )
}
