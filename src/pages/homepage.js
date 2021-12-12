import React from 'react';
import img from '../assets/zu.jpeg';
import "../styles/style.css";

const Homepage = () => {
    return (
        <div style={{padding:30}}>
            <div className='container'>
            <div >
               <img src={img} alt="" className='imgContainer'/>
            </div>
            <div className='textContainer'>
                My name is Audrey Zunuoh Ponu. I work with Nsano Limited as a Software Engineer.
                You can reach out to me on <a href ="https://www.linkedin.com/in/audrey-z-ponu">LinkedIn</a> , <a href='https://www.twitter.com/theaudreyzunuoh'>Twitter</a> or <a href='https://www.gmail.com/audponu@gmail.com'>Email</a>.
                You can also check out my projects on github.
                <div style={{fontWeight:"bold", fontSize:30}}>
                    CHEERS!
                </div>
            </div>
            </div>
        </div>
    )
}

export default Homepage
