import React from 'react'
import {data} from "../../helper/data"
import lessonStyle from "./Lesson.module.css"
const LessonCard = () => {
    
  return (
    <div className={lessonStyle.mainDiv}>
        <div className={lessonStyle.textDiv}> <p>{data.length} lessons today </p></div>
        <div className={lessonStyle.lessonsDiv} >
        {
            
            data.map(lesson => {
                const {id, name, hour, image} = lesson;
                return(
                    <div className={lessonStyle.lessonCard} id={id} >
                        <img src={image} alt={name} width="150px" height="150px" />
                        <div>
                        <p>Lesson Name : {name}</p>
                        <p>Lesson Hour {hour}</p>
                        </div>

                        
                        
                        
                        
                    </div>
                )

                

            })
        }
        </div>
    </div>
  )
}

export default LessonCard