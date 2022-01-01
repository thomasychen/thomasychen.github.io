import './Projects.css';
import React , {useEffect} from "react"
import Aos from "aos";
import "aos/dist/aos.css";

export default function Project(props){
    useEffect(() => {
        Aos.init({duration:1500});
     }, []);
    const name = props.name
    const image = props.image
    const descrip = props.descrip
    const link = props.link
    return (
        <div class="col-md-4 my-4">
        <div data-aos="fade-up" class="card h-100 border-info my-3 mx-3">
            <img src={image} class="card-img-top" alt="pic"></img>
        <div class="card-body">
            <h5 class="card-title projName px-3 pt-3">{name} </h5>
            <p class="card-text projDesc px-3 pb-3">{descrip}</p>
        </div>
        <div class="card-footer">
            <a href={link} class="btn btn-primary text-center" target=" blank">Learn More!</a>
        </div>
        </div>
        </div>
    )
}