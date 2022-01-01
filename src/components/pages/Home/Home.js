import React, {Component} from "react";
import './Homepage.css';
import Headshot from './DSC_0860-Edit (2).jpg';
import './Typing.js';
import In from "./Assets/icons8-linkedin-2-50 (1).png";
import Gh from "./Assets/icons8-octocat-50.png";
import Mail from "./Assets/icons8-at-sign-50 (1).png";
import Ig from "./Assets/icons8-instagram-old-50 (1).png";
class Home extends Component{
    render(){
        return(
            <div class="container-fluid">
                <div class="row mt-5">
                    <div class = "col-sm-6">  
                        <h1 class="display-1 mt-5 pt-5 homeName">Thomas Chen</h1>
                        <div class="row mt-5">
                            <div class="col-sm-2 welcome"></div>
                            <div class="col-sm-10 description"> 
                                <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
                                    <h3> Welcome!:
                                        <span
                                            class="txt-rotate mb-4"
                                            data-period="2000"
                                            data-rotate='[
                                            " I am a Student @ UC Berkeley.", 
                                            " Studying CS & Applied Math.",
                                            " I am a Software Developer.", 
                                            " And a Data Analyst.",
                                            " I am a Fitness Lover.", 
                                            " And Tom Brady Enthusiast." ]'>
                                        </span>
                                    </h3>   
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1">
                    </div>
                    <div class= "col-sm-3">
                        <img src= {Headshot} alt="pic" class="rounded mt-3 mx-auto d-block w-100"></img>
                    </div>
                    <div class="col-sm-">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                    <div class="row mb-5">
                        <div class="col-sm-3"> </div>
                            <div class="col-sm-6">
                                <div class="flex-row mt-5 socialRow">
                                    <a href="https://www.linkedin.com/in/thomas-y-chen/">
                                        <img class="socials w-25" src={In} alt="logo"/>
                                    </a>
                                    <a href="https://github.com/thomasychen">
                                        <img class="socials w-25" src={Gh} alt="logo"/>
                                    </a>
                                    <a href="mailto:thomasychen@berkeley.edu">
                                        <img class="socials w-25" src={Mail} alt="logo"/>
                                    </a>
                                    <a href="https://www.instagram.com/thomasschen/">
                                        <img class="socials w-25" src={Ig} alt="logo"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;