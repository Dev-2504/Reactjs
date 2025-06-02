import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

export default function Card() {
  return (
    <div className="h-screen w-full flex flex-col">
        <Navbar />
        <Content /> 
    </div>
  )
}
