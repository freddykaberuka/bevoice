import React from 'react'
import Slider from '../landing/slider'
import History from './history'
import './about.scss'
import Aproach from './aproach'
import Board from './board'
import Staff from './staff'

function About() {
  return (
    <div>
        <Slider/>
        <History/>
        <Aproach/>
        <Board/>
        <Staff/>
    </div>
  )
}

export default About