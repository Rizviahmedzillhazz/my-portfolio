import React, { Component } from 'react';
import image from "../tropical-green-leaves-background_53876-88891.jpg";


class Home extends Component {
    render() {
        return (
           <div  >
               
               
               <img src={image}
                    alt="red"
                    className="absoloute object-cover w-full h-full"
               />
               <section className=" centered relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                   <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hello. I'm Rizvi.</h1>
               </section>
              
           </div>
        );
    }
}

export default Home;