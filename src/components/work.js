import "./WorkcardStyles.css"
import Workcard from "./Workcard"
import workcardData from "./workcardData"

import React from 'react'


const work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {workcardData.map((val,ind) => {
                return(
                    <Workcard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view= {val.view}
                    src={val.src}

                    />
                )

            })}
        </div>
    </div>
  )
}

export default work