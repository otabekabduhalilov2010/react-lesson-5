import React from 'react'
import './Wrapper.css'
import Card from '../Card/Card'

const Watapper = () => {
  return (
   <>
   <div className="wrapper">
    <Card title="Dota2" text="5x5 turbo" num="1"/>
    <Card title="Dota2" text="1x1 SOLO MID" num="2"/>
    <Card title="CS:GO" text="SOON" num="3"/>
   </div>
   </>
  )
}

export default Watapper