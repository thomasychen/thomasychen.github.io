import React from "react";
import Experience from "./workexperience.js";
import axios from 'axios';
import "aos/dist/aos.css";
import "./Experiences.css";

export default function Experiences(){
    const [Experiences, setExperiences] = React.useState(null);
      async function fetData(){
        const res = await axios.get(
            "https://api.airtable.com/v0/app1nHTeqDLN76MrR/Resume?view=Grid%20view",
          {
            headers: {
              authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
          }
        )
        setExperiences(res.data.records)
        console.log(res.data.records)
      }
      React.useEffect(() => {
        fetData();
      }, []);
      if(!Experiences){
        return (
        <div class="container-fluid banner py-5">
          <h1 class="display-2 py-5 text-center heading">Loading...</h1>
          </div>
        )
      }
        return(
          <><div class="container-fluid banner py-5">
          <h1 class="display-2 py-5 text-center heading">Resume</h1>
          </div>
          <div class="container px-5">
              <h3 class="text-center my-5"> Work Experiences </h3>
          </div>
          <div class= "container my-5 mr-5 px-5">
                {
                     Experiences.map((record) => (
                        <Experience 
                        company = {record.fields.Company}
                        name = {record.fields.Name}
                        date= {record.fields.Dates}
                        descrip = {record.fields.Description}
                        >
                        </Experience>
              ))
            }
            </div>
            <div class="container">
                <h3 data-aos="fade-up" class="text-center my-5"> Education </h3>
            </div>
            <div class= "container mr-5 px-5">
                <div data-aos="fade-up" class="row my-3">
                    <div class = "col-sm-4">
                        <h3>University of California, Berkeley</h3>
                        <p class="font-weight-light"> 2021-2025</p>
                    </div>
                    <div class= "col-sm-8">
                        <h4> B.A. Computer Science and Applied Mathematics </h4>
                        <p>GPA: 4.0</p>
                        <p>Relevant Coursework: Foundations of Data Science (Data 8), Linear Algebra and Differential Equations (Math 54), Structure and Interpretation of Computer Programs (CS 61A), and Designing Information Devices and Systems I (EECS 16A)</p>
                    </div>
                </div> 
                <div data-aos="fade-up" class="row my-3">
                    <div class = "col-sm-4">
                        <h3>Milpitas High School</h3>
                        <p class="font-weight-light"> 2017-2021</p>
                    </div>
                    <div class= "col-sm-8">
                        <h4> High School Diploma </h4>
                        <p>GPA: 4.45 Weighted</p>
                        <p>Relevant Coursework:AP Calculus AB/BC, AP Micro/Macro Economics, AP Physics 1, Intro to Python Programming, Elementary Statistics, Multivariable Calculus</p>
                    </div>
                </div> 
            </div>
            </>
            );
    }