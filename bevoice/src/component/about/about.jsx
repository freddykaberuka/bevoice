import React from 'react'
import Slider from '../landing/slider'
import History from './history'
import './about.scss'
import Aproach from './aproach'
import Board from './board'

function About() {
  return (
    <div>
        <Slider/>
        <History/>
        <Aproach/>
        <Board/>
    </div>
  )
}

export default About