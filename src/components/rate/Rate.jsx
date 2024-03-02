import "./rate.css"
import { useState } from "react"

export default function Rate({setSubmit, rate, setRate}){
    
    console.log(rate)
    let buttons=[1,2,3,4,5]
    return <div className="rate-container">
        <h1>How did we do?</h1>
        <p>
            Please let us knpw how we did with your support request. all feedback is appriciated to help us improve our offering
        </p>
        <div className="buttons-container">
            {buttons.map((button)=>(<button className="rate" 
            onClick={()=>setRate(button)} 
            key={button} 
            style={rate==button ? {backgroundColor: "red"} : {}}>
                {button}
                </button>))}
        </div>
        <button className="submit" onClick={()=>{rate && setSubmit(true)}}>Submit</button>
    </div>
}