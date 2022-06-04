import React from 'react'
import image1 from '../../assets/arsen.jpg'
function Board() {
  return (
    <div>
      <h1>Board</h1>
     <div className='board-cards'>
       <div className='board-card'>
         <img src={image1}/>
       </div>
       <div className='board-card'>
         <img src={image1}/>
       </div>
       <div className='board-card'>
         <img src={image1}/>
       </div>
       <div className='board-card'>
         <img src={image1}/>
       </div>
       <div className='board-card'>
         <img src={image1}/>
       </div>
       <div className='board-card'>
         <img src={image1}/>
       </div>
     </div>
    </div>
  )
}

export default Board