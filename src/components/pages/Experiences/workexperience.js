import './Experiences.css';
import React , {useEffect} from "react"
import Aos from "aos";
import "aos/dist/aos.css";

export default function Experience(props){
    useEffect(() => {
        Aos.init({duration:1500});
     }, []);
    const name = props.name
    const company = props.company
    const descrip = props.descrip
    const date = props.date
    return (
        <div data-aos="fade-up" class="row my-3">
            <div class = "col-sm-4">
                <h3>{company}</h3>
                <p class="font-weight-light"> {date}</p>
            </div>
        <div class= "col-sm-8">
            <h4>{name} </h4>
            <p>{descrip}</p>
        </div>
        </div> 
    )
}