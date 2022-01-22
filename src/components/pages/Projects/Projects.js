import Project from "./project.js"
import axios from 'axios'
import React from "react";
import "aos/dist/aos.css";
import "./Projects.css";

export default function Projects(){
const [Projects, setProjects] = React.useState(null);
  async function fetData(){
    const res = await axios.get(
        "https://api.airtable.com/v0/appG70zCIA96qYHIV/Projects1?view=Grid%20view",
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      }
    )
    setProjects(res.data.records)
    console.log(res.data.records)
  }
  React.useEffect(() => {
    fetData();
  }, []);
  if(!Projects){
    return (
      <div class="container-fluid banner py-5">
      <h1 class="display-2 py-5 text-center heading">Loading...</h1>
      </div>
    )
  }
    return(
      <><div class="container-fluid banner py-5">
      <h1 class="display-2 py-5 text-center heading">My Projects</h1>
      </div>
      <div class="container">
          <div class= "cards mb-5">
            {
                 Projects.map((record) => (
                    <Project 
                     name = {record.fields.Name}
                    image = {record.fields.Logo[0].url}
                    descrip = {record.fields.description}
                    link= {record.fields.Link}
                    >
                    </Project>
                  
          ))
        }
        </div>
        </div>
        </>
        );
}