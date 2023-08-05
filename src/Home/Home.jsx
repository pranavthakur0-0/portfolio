
import { useLayoutEffect, useState, useRef, useEffect } from "react"
import { motion } from "framer-motion";
import "./herosection.scss"
import "./nav.scss"
import "./work.scss"
import "./horizontal.scss"
import "./footer.scss"
import "./eye_fun.scss"
import { AiFillLinkedin } from "react-icons/ai";
import Sectionicon from "./lottiefullerene";
import { Link as Scroller} from 'react-scroll'
import Creative from "../img/developer.svg"
import Developer from "../img/CREATIVE.svg"
import data from "../Home/data.json"


export default function Home(){
    const [image, setimage] = useState(null);
    const scollToRef = useRef();
    const [mouse, setmouse] = useState({
        x: 0,
        y: 0
    });

    const addHover = (item)=>{
        setimage(null);
        setimage(item.img);
    }
    const removeHover = ()=>{
       setimage(null);
    }
    const imageRef = useRef();

    const fadeInTimeoutRef = useRef(null);
    useEffect(() => {
        if (image) {
          imageRef.current.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
          if (imageRef.current.style.opacity !== '0') {
            imageRef.current.style.opacity = 0;
          }
          if (fadeInTimeoutRef.current) {
            clearTimeout(fadeInTimeoutRef.current);
          }
          fadeInTimeoutRef.current = setTimeout(() => {
            imageRef.current.style.opacity = 1;
            imageRef.current.style.transform = 'translate(2%, 2%)'; 
          }, 200);
        }
      }, [image]);

    const [cursorvariant, setcursorvariant] = useState("default");

    useLayoutEffect(()=>
    {
        const mousemovefun = e =>{
            setmouse({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mousemovefun);
        return ()=>
        {
            window.removeEventListener("mousemove", mousemovefun);
        }
    },[])

    const strip1 = useRef();
    const strip2 = useRef();
    const strip3 = useRef();
    const strip4 = useRef();

    const refSvgOne = useRef();
    const refSvgTwo = useRef();
    
    useLayoutEffect(()=>
    {

    
        const parallax = e=>{
            const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
           if(scrollPos > 1100)
           {
            let xx  =  (scrollPos-1800)*1.5;
            let yy  = scrollPos-1400
             strip1.current.style.transform=`translateX(${-xx}px) translateY(${-yy}px) rotate(25deg) `;
             strip2.current.style.transform=`translateX(${xx*0.7}px) translateY(${-yy}px) rotate(02deg) `;
             strip3.current.style.transform=`translateX(${-xx*0.5}px) translateY(${-yy*0.6}px) rotate(-5deg) `;
             strip4.current.style.transform=`translateX(${xx*0.5}px) translateY(${-yy*0.5}px) rotate(-22deg) `;
           }
        }

       
        window.addEventListener("scroll", parallax);
        return ()=>
        {
            window.removeEventListener("scroll", parallax);
        }
    },[])

    const variants ={
        default:{
            x : mouse.x - 15,
            y : mouse.y - 15,
        },
        text : {
            height : 150,
            width : 150,
            x : mouse.x - 75,
            y : mouse.y - 75,
            backgroundColor : "white",
            mixBlendMode: "difference"
        },
        svg : {
            height : 150,
            width : 150,
            x : mouse.x - 75,
            y : mouse.y - 75,
            border : "white 2px solid",
            backgroundColor : "black",
            mixBlendMode: "difference"
        },
        backwhite : {
            height : 30,
            width : 30,
            x : mouse.x - 15,
            y : mouse.y - 15,
            backgroundColor : "white",
            mixBlendMode: "difference"
        },
        backlessEnter : {
            height : 50,
            width : 50,
            x : mouse.x - 25,
            y : mouse.y - 25,
            border : "white 2px solid",
            backgroundColor : "black",
            mixBlendMode: "difference"
        },
             //onMouseEnter={textEnter} onMouseLeave={textLeave} 
    }
    const textEnter  = ()=> setcursorvariant("text");
    const textLeave  = ()=> setcursorvariant("default");
    const svgEnter = ()=> setcursorvariant("svg");
    const whiteEnter = ()=> setcursorvariant("backwhite");
    const backlessEnter = () => setcursorvariant("backlessEnter"); 

    const inputRef = useRef();
    const inputworkpos = useRef();

  
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            refSvgOne.current.style.animation = "none";
            refSvgTwo.current.style.animation = "none";
            refSvgTwo.current.style.transition = "none";
            refSvgOne.current.style.transition = "none";
            refSvgTwo.current.style.animationDelay = "none";
            refSvgOne.current.style.opacity = `1`;
            refSvgTwo.current.style.opacity = `1`;
            refSvgOne.current.style.left = `${40}%`;
            refSvgTwo.current.style.right = `${30}%`;
        }, 1500);
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    

    const scrollHandler = () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollPos > 400){
            document.body.style.backgroundColor = "black";
            document.body.style.transition = "0.3s ease-in-out";
        }else{
            document.body.style.backgroundColor = "white";
            document.body.style.transition = "0.3s ease-in-out";
        }
        
        const SvgImg = Math.round(scrollPos*0.1);
        refSvgOne.current.style.transform=`translateX(${SvgImg}px)`;
        refSvgTwo.current.style.transform =`translateX(${-SvgImg}px)`;

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
        expand.style.width = "100%";
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
                <nav className="nav">
                    <div className="Ghostwrapper" onMouseEnter={svgEnter} onMouseLeave={textLeave} >

                 
                <svg id="ghost" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50.433px" viewBox="0 0 127.433 132.743"
                    	 xmlSpace="preserve">
                    <path  d="M116.223,125.064c1.032-1.183,1.323-2.73,1.391-3.747V54.76c0,0-4.625-34.875-36.125-44.375
                    	s-66,6.625-72.125,44l-0.781,63.219c0.062,4.197,1.105,6.177,1.808,7.006c1.94,1.811,5.408,3.465,10.099-0.6
                    	c7.5-6.5,8.375-10,12.75-6.875s5.875,9.75,13.625,9.25s12.75-9,13.75-9.625s4.375-1.875,7,1.25s5.375,8.25,12.875,7.875
                    	s12.625-8.375,12.625-8.375s2.25-3.875,7.25,0.375s7.625,9.75,14.375,8.125C114.739,126.01,115.412,125.902,116.223,125.064z"/>

                    <circle fill="#000000" cx="86.238" cy="57.885" r="6.667"/>
                    <circle id="ghost-eye-cover" fill="#ffffff" cx="86.238" cy="44.5" r="7"/>
                    <circle fill="#000000"  cx="40.072" cy="57.885" r="6.667"/>
                    <circle id="ghost-eye-cover" fill="#ffffff" cx="40.072" cy="44.5" r="7"/>


                    <path fill="#000000" d="M71.916,62.782c0.05-1.108-0.809-2.046-1.917-2.095c-0.673-0.03-1.28,0.279-1.667,0.771
                    	c-0.758,0.766-2.483,2.235-4.696,2.358c-1.696,0.094-3.438-0.625-5.191-2.137c-0.003-0.003-0.007-0.006-0.011-0.009l0.002,0.005
                    	c-0.332-0.294-0.757-0.488-1.235-0.509c-1.108-0.049-2.046,0.809-2.095,1.917c-0.032,0.724,0.327,1.37,0.887,1.749
                    	c-0.001,0-0.002-0.001-0.003-0.001c2.221,1.871,4.536,2.88,6.912,2.986c0.333,0.014,0.67,0.012,1.007-0.01
                    	c3.163-0.191,5.572-1.942,6.888-3.166l0.452-0.453c0.021-0.019,0.04-0.041,0.06-0.061l0.034-0.034
                    	c-0.007,0.007-0.015,0.014-0.021,0.02C71.666,63.771,71.892,63.307,71.916,62.782z"/>
                    </svg>   </div>
                    <Scroller  to="footer" spy={true} smooth={true}>
        
                    <div className="say-hello" onMouseEnter={svgEnter} onMouseLeave={textLeave} >
                        SAY HELLO
                    </div>
                    </Scroller>
                </nav>
                <motion.div variants={variants} animate={cursorvariant} className="cursor" />
                <section className="hero-section">
                    <div className="svg_container">
                        <div className="overlay_svg">
                            <span>CREATIVE </span>
                            <span>DEVELOPER </span>
                            <img style={{display : "hidden"}} onMouseEnter={svgEnter} onMouseLeave={whiteEnter} className="creator_img" ref={refSvgOne}  src={Creative} alt="creative" />
                            <img style={{display : "hidden"}} onMouseEnter={svgEnter} onMouseLeave={whiteEnter} className="developer_img" ref={refSvgTwo} src={Developer} alt="developer" />
                        </div>
                        <div className="title">FULL STACK DEVELOPER</div>
                    </div>
               
                </section>

                <section  className="hello">
                    <div className="hello-svgline">
                    <svg id="ekhzpFtnB071" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 640 480" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                        <path id="svgaroundline" d="M102.443216,259.300184C157.446285,291.712707,395.138122,335.616943,489.429098,240c62.860651-63.744629-188.692494-88.899399-274.03315-80.883978C37.61817,175.813382,37.917121,230.982976,102.443216,259.300184Z" transform="translate(.000001 0)" fill="none" stroke="#ffffff" strokeWidth="1.28"/>
                    </svg>
                    </div>
                    <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave} >
                    Trying to transform ideas into digital realities that leave a lasting impression.</div>
          
           </section>

           <section className="question">
            <div className="strip1"ref={strip1}>HTML - CSS - Javascript - C++ - C - AWS - NGNIX </div>
            <div className="strip2"ref={strip2}>---- Here are my Skills ----</div>
            <div className="strip3"ref={strip3}>DataStructures - Algorithms - CompilerDesign - Networking - Database</div>
            <div className="strip4"ref={strip4}>Reactjs - Nodejs - Git - Github - Express JS - SCSS</div>
                <div className="wrapper" onMouseEnter={textEnter} onMouseLeave={textLeave} >
                *what the heck is a Software Engineer?
                </div>
                <p>A software engineer is a professional who applies principles of software engineering to design, develop, maintain, test and evaluate software systems and applications. They are involved in the full software development life cycle and use programming languages and tools to build high-quality, efficient and reliable software.</p>
           </section>





{    /*work section start from here */ }
       



           <section className="work" ref={inputworkpos}>
                <div className="work-text" ref={inputRef}>
                    WORK
                </div>
           </section>

        <div className="line-wrapper">
            <div className="line" id="line"></div>
        </div>
       <div className="expand-wrapper" id="expand-wrapper" onMouseEnter={whiteEnter} onMouseLeave={textLeave}>
            <div className="expand" id="expand"></div>
            <div className="expand-inner">

            <div className="intern">
                <h2 >Experience</h2>
                    <ul className="exp">
                        <li className="li_exp_first"><div className="postition">Intern</div> <div className="duration"><span>At CyberSky</span> <br /><span> From 20th June 2022 to 30th Dec 2022</span></div></li>
                        <li className="li_exp"><div className="duration">Open to Work !!!</div></li>
                    </ul>
                    <img src={"https://res.cloudinary.com/dc1ilhan2/image/upload/v1691235538/Screenshot_2023-08-05_at_5.04.43_PM_sobhbc.png"} alt="" />
            </div>
            <div className="projects">
            <h2>Featured Projects</h2>
                <div className="wrapper">

                        {data ? data.map((item)=>{
                            return  <div  onMouseEnter={() => {addHover(item); svgEnter()}} onMouseLeave={()=>{removeHover(); whiteEnter()}} className="item">
                           { item.title}
                       </div>

                        }) : null}
                       <div className="turbu">
                        
                       <svg>
                       <defs>
                        <filter id="noisesd" x="0%" y="0%" width="100%" height="100%">
                        <feTurbulence id="turbwave" type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="turbulence_3" data-filterId="3" >
                        <animate xlinkHref="#turbwave" attributeName="baseFrequency" dur="15s" keyTimes="0;1;1"
                                 values="0.01 0.02;0.02 0.04;0.01 0.02" repeatCount="indefinite"></animate>
                        </feTurbulence>
                
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="turbulence_3" scale="15" />
                        </filter>
                        </defs>
                        </svg>
                             {image ?  <img ref={imageRef} src={image} alt="" /> : null}      
                       </div>
               </div>
            </div>
            </div>
       </div>

       <section className="footer" id="footer" ref={scollToRef}>
        <div className="bigger-text"><div className="headline"  onMouseEnter={whiteEnter} onMouseLeave={textLeave} >Wanna <br /> be starting <br /> something ? <span> Feel free to reach out <br /> if you wanna collaborate with me <br /> or simply have a chat</span></div>
        <div className="fullerene-div">
                 <div className="wrapper">
                 <Sectionicon className="fullerene"></Sectionicon>
                 </div>
        </div>

         </div>
            <div className="email">
            <a href ="https://mail.google.com/mail/u/2/?ogbl#inbox?compose=DmwnWrRlQqWFLrFBspbswNqnWqBKDKRmWDkDwxbThpWwNsgcZfMrgHFBjQQHDVggVjkQgFNDSBHL" target="_blank" rel="noreferrer"> <div className="text"  onMouseEnter={textEnter} onMouseLeave={textLeave}>pranavthakur.work@gmail.com</div></a>
            </div>

            <div className="built-by" onMouseEnter={whiteEnter} onMouseLeave={textLeave}>
                <a href="https://www.linkedin.com/feed/?trk=nav_logo" target="_blank" rel="noreferrer"><AiFillLinkedin  onMouseEnter={textEnter} onMouseLeave={textLeave} className="linkedin"></AiFillLinkedin> </a>
             Built by Pranav Thakur
            </div>
       </section>

        </>)
}