import { useEffect, useState } from "react"
import "./LoadUp.scss"
import Black from "./img/960x0.webp"
export default function LoadUp(){
    const [show, setshow] = useState(false);
    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setshow(true);
        },2800)

        return ()=>clearTimeout(timeoutId);
    },[])
    return (
        <>
            <div className="main_wrap_load">
                {show ?    <svg style={{position :  "absolute"}}>
                       <defs>
                        <filter id="noisesd" x="0%" y="0%" width="100%" height="100%">
                        <feTurbulence id="turbwave" type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="turbulence_3" data-filterId="3" >
                        <animate xlinkHref="#turbwave" attributeName="baseFrequency" dur="15s" keyTimes="0;1;1"
                                 values="0.01 0.02;0.02 0.04;0.01 0.02" repeatCount="indefinite"></animate>
                        </feTurbulence>
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="turbulence_3" scale="250" />
                        </filter>
                        </defs>
            </svg>  : null}
                <img className="load_img" src={Black} alt="blackImg" />
                <div className="loadUP_main">
                        <span>
                             नमस्ते
                        </span>
                        <span>
                             Hi
                        </span>
                        <span>
                            Bonjour
                        </span>
                        <span>
                            Hola
                        </span>
                        <span>
                            Salve
                        </span>
                </div>
            </div>
        </>
    )
}