import React from 'react'
import '../../Style/Title.css'
import '../../Style/index.css';
function Title({word,Sword,index}) {
  return (
    <>
     <div className="Titlecon1tainer">
        <div className='TitlePara '>
           <div className="para wordColor">
           <h1>{word}</h1>
           <p>{Sword}</p>
           </div>

        </div>
     </div>
    </>
  )
}

export default Title
