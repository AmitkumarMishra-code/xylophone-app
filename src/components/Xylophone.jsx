import { useState } from 'react'
import Bars from './Bars'
export default function Xylophone(props){
    let bars = [['C', '#ee534f'], ['D', '#fea726'], ['E', '#ffc927'], ['F', '#66bb6a'], ['G', '#25a79a'], ['A', '#2cb5f6'], ['B', '#7e57c2'], ['C', '#ee534f']]
    let audio = ['./sounds/bvng.mp3','./sounds/udgb.mp3', './sounds/dtse.mp3', './sounds/peoi.mp3',  './sounds/ldcc.mp3','./sounds/tena.mp3','./sounds/edqt.mp3', './sounds/crfo.mp3']
    let clickHandler = (index) => {
        console.log('clicked', index)
        new Audio(audio[index]).play()
    }
    return (
        <div className="container">
            {bars.map((bar, index) => <Bars text = {bar[0]} color = {bar[1]} index = {index+1} method = {clickHandler}/>)}
        </div>
    )
}

