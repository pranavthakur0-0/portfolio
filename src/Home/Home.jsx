
import { useLayoutEffect, useState, useRef } from "react"
import { motion } from "framer-motion";
import "./herosection.scss"
import "./nav.scss"
import "./work.scss"
import "./horizontal.scss"
import "./footer.scss"
import { BsArrowDown } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Link as Scroller} from 'react-scroll'


export default function Home(){
    const scollToRef = useRef();
    const [mouse, setmouse] = useState({
        x: 0,
        y: 0
    });
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

  
    const scrollHandler = () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
      if(inputworkpos.current.getBoundingClientRect().y< 0 && inputworkpos.current.getBoundingClientRect().bottom > 50)
      {
        let worksize = (1200 + inputworkpos.current.getBoundingClientRect().y)/25;
        if(worksize < 650)
        {
            document.querySelector(".work-text").transition = "0s";
        }
        else{
            document.querySelector(".work-text").transition = "all 1s";
        }
        if(worksize > 20 )
        {
         document.querySelector(".work-text").style.fontSize = `${worksize-5}vw`
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


                <nav className="nav">
                    <svg  onMouseEnter={svgEnter} onMouseLeave={textLeave}  id="ghost" version="1.1" xmlns="http://www.w3.org/2000/svg"xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    	 width="70.433px" height="120.743px" viewBox="0 0 127.433 132.743" enableBackground="new 0 0 127.433 132.743"
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
                    </svg>

                    <Scroller  to="footer" spy={true} smooth={true}>
                        
              
                    <div className="say-hello" onMouseEnter={svgEnter} onMouseLeave={textLeave} >
                        SAY HELLO
                    </div>
                    </Scroller>
                </nav>
                <motion.div variants={variants} animate={cursorvariant} className="cursor" />
                <section className="hero-section">
                    <div className="text">
                        <div className="wrapper">
                            <div>HELLO, I'M </div>
                            <div className="name">PRANAV THAKUR</div>
                            <div>UNLEASHING</div>
                            <div>CREATIVITY</div>
                            <div >& CODE</div>  
                        </div>
                    </div>
                    <div className="arrow">
                        <div className="iconarrow"><BsArrowDown onMouseEnter={svgEnter} onMouseLeave={textLeave} /></div>
                            <svg viewBox="0 0 100 100" width="100" height="100" className="scroll-ani">
                              <defs>
                                <path id="circle"
                                  d="
                                    M 50, 50
                                    m -37, 0
                                    a 37,37 0 1,1 77,0
                                    a 37,37 0 1,1 -77,0"/>
                              </defs>
                              <text font-size="17">
                                <textPath xlinkHref="#circle">
                                  Scroll-Down ** Scroll-Down **
                                </textPath>
                              </text>
                            </svg>
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
            <div className="strip1"ref={strip1}>Sass - Reactjs - Nodejs - Git - Github - C++ - C - Javascript - AWS - NGNIX </div>
            <div className="strip2"ref={strip2}>DataStructures - Algorithms - CompilerDesign - Networking - Database</div>
            <div className="strip3"ref={strip3}>Hello there</div>
            <div className="strip4"ref={strip4}>Hello there</div>
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
                <h2 onMouseEnter={svgEnter} onMouseLeave={whiteEnter}>Worked As</h2>
                    <ul className="exp">
                        <li className="li_exp_first"><div className="postition">Intern</div> <div className="duration"><span>At CyberSky</span> <br /><span> From 20th June 2022 to 30th Dec 2022</span></div></li>
                        <li className="li_exp"><div className="duration">Open to Work !!!</div></li>
                    </ul>
            </div>
            <div className="projects">
            <h2 onMouseEnter={svgEnter} onMouseLeave={whiteEnter}>Featured Projects</h2>
            <div className="wrapper">
                <div className="img" id="img"></div>
                <div className="desc">
                    <div className="name">Todo App</div>
                    <div className="about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nam expedita eaque neque qui tempore! Ex architecto quo voluptatibus mollitia, quasi modi suscipit necessitatibus vel minus. Officiis quod doloribus fugit.</div>
                    <button onMouseEnter={backlessEnter} onMouseLeave={whiteEnter} className="visit">Visit It !!! </button>
                </div>
            </div>
            <div className="wrapper">
                <div className="desc">
                    <div className="name">Todo App</div>
                    <div className="about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nam expedita eaque neque qui tempore! Ex architecto quo voluptatibus mollitia, quasi modi suscipit necessitatibus vel minus. Officiis quod doloribus fugit.</div>
                    <button onMouseEnter={backlessEnter} onMouseLeave={whiteEnter} className="visit">Visit It !!! </button>
                </div>
                <div className="img" id="img"></div>
            </div>
            </div>
            </div>
       </div>

       <section className="footer" id="footer" ref={scollToRef}>
        <h2><span  onMouseEnter={whiteEnter} onMouseLeave={textLeave} >Wanna <br /> be starting <br /> something ?</span> </h2>
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