import { useLayoutEffect, useState, useRef, useEffect } from "react"
export default function Work(){
    const scollToRef = useRef();
    const inputRef = useRef();
    const inputworkpos = useRef();

  
    const scrollHandler = () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
      if(inputworkpos.current.getBoundingClientRect().y< 0 && inputworkpos.current.getBoundingClientRect().bottom > 50)
      {
        let worksize = (1200 + inputworkpos.current.getBoundingClientRect().y)/25;
        if(worksize < 650)
        {
            inputRef.current.style.transition = "0s";
        }
        else{
            inputRef.current.style.transition = "all 1s";
        }
        if(worksize > 20 )
        {
            inputRef.current.style.fontSize = `${worksize-5}vw`
        }
        inputRef.current.style.position = "sticky";
        inputRef.current.style.top = 0;
      }
      else
      {
        inputRef.current.style.position = 'relative';
        inputRef.current.style.top = '';
      }

      const line = document.getElementById("line");
      if(scrollPos > 3578)
      {
        line.style.height = `${(scrollPos-3580)/2}px`;
      }
      const expand = document.getElementById("expand");
    
      let lineheight =  parseInt(line.style.height, 10);
      const projectimg = document.querySelectorAll("#img");
      
      if(lineheight > 400)
      {
        line.style.height = `${400}px`;
        expand.style.height = "100vh";
        expand.style.width = "2px";
    
      }
      else{
         line.style.height = `${(scrollPos-3580)/2}px`;
      }
    
      if(lineheight < 50 )
      {
        expand.style.height = "0px";
        expand.style.width = "0px";
        projectimg.forEach(function(child)
        {
            child.style.opacity = "0";
        })
      }
      
      let expandheight =  expand.style.height;

      if(expandheight === "100vh")
      {
        expand.style.height =  `${(document.getElementById("expand-wrapper").getBoundingClientRect().height)}px`;
        expand.style.width = "100vw";
        projectimg.forEach(function(child)
        {
            child.style.opacity = "1";
        })
      }


    const svgroundline =  document.getElementById("svgaroundline");
    const length = svgroundline.getTotalLength();
    svgroundline.style.strokeDasharray = length;
    svgroundline.style.strokeDashoffset = length;
    let svgroundlinepos = svgroundline.getBoundingClientRect();
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    let drawLength = length * scrollPercentage *3.5;

    if(svgroundlinepos.top < 650)
    {
            svgroundline.style.strokeDashoffset = length - drawLength;
    }

};



useLayoutEffect(() => {
      window.addEventListener("scroll", scrollHandler, true);
      return () => {
        window.removeEventListener("scroll", scrollHandler, true);
      };
    },[]);

    return (<>
               <section className="work" ref={inputworkpos}>
                <div className="work-text" ref={inputRef}>
                    WORK
                </div>
           </section>

        <div className="line-wrapper">
            <div className="line" id="line"></div>
        </div>
       <div className="expand-wrapper" id="expand-wrapper" onMouseEnter={whiteEnter} onMouseLeave={textLeave}>
          
       </div>
       </>)
}