import React from "react";
import "./About.css";
import Self from "./IMG_3236.jpg";
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function About(){
    useEffect(() => {
        Aos.init({duration:1500});
    }, []);
    return( 
        <><div class="container-fluid banner py-5">
            <h1 class="display-2 py-5 text-center heading">About Me</h1>
        </div>
            <div class="container">
                <div class="row">
                <div class="col-sm-1"></div>
                    <div class="col-sm-4">
                        <div class="row"><img src= {Self} alt="pic" class="rounded-circle mt-5 pt-5 d-block w-100" id="bar-trigger"></img></div>
                    </div>
                    <div class="col-sm-6 mt-5">
                    <div class="row mt-5 py-5">
                        <h5 class="aboutDesc text-center mb-2"> Hi there! My name is Thomas (Tommy) Chen, and I am a student at UC Berkeley studying Computer Science and Applied Mathematics. I love learning algorithmic thinking methods and applying them to computer science and data-driven predictions. </h5>
                        <h5 class="aboutDesc text-center mb-2"> In my free time, I enjoy working on personal <a href="/projects">projects</a> like this in the realms of computer science and data science. I also enjoy working out, playing basketball, and going out with friends!</h5>
                        <h5 class="aboutDesc text-center mb-2"> I'm currently available and looking for a data analyst, software developer, or AI/ML internship for summer 2022, please don't hesitate to contact me through email or LinkedIn!</h5>
                        <h5 class ="aboutDesc text-center mb-0"> Below is an evaluation of my technical skills... </h5>
                        </div>
                        </div>
                        
                <h3 class="text-center mt-2 pb-3 section"> Abilities</h3>
                    <div class="skills">
                            <li>
                                <h5 class = "header text-center my-4">Python</h5>
                                <span class="bar"><span data-aos= "fade-right"  data-aos-anchor="#bar-trigger" data-aos-delay="600" class="python"></span></span>
                            </li>
                            <li>
                                <h5 class = "header text-center my-4">JS/HTML/CSS</h5>
                                <span class="bar"><span data-aos= "fade-right"  data-aos-anchor="#bar-trigger" data-aos-delay="1200" class="htmlcss"></span></span>
                            </li>
                            <li>
                                <h5  class = "header text-center my-4" data-aos-anchor="#bar-trigger">Numpy/Pandas</h5>
                                <span class="bar"><span data-aos= "fade-right"  data-aos-anchor="#bar-trigger" data-aos-delay="1800" class="nppd" ></span></span>
                            </li>
                            <li>
                                <h5  class = "header text-center my-4" data-aos-anchor="#bar-trigger">C++</h5>
                                <span class="bar"><span data-aos= "fade-right"  data-aos-anchor="#bar-trigger" data-aos-delay="2400" class="c" ></span></span>
                            </li>
                            <li>
                                <h5  class = "header text-center my-4" data-aos-anchor="#bar-trigger">Seaborn/Matplotlib</h5>
                                <span class="bar mb-5"><span data-aos= "fade-right"  data-aos-anchor="#bar-trigger" data-aos-delay="3000" class="snsMpl mb-5" ></span></span>
                            </li>
                        </div>
                </div>
            </div></>

    )
}

export default About;