import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

class NavBar extends Component {
    render() {
        return (
            
            <header className="bg-green-600">
            <div className="container mx-auto flex justify-between">
                
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className=" inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Rizvi
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-green-100 bg-green-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-regreend-100 bg-green-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-green-100 bg-green-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ">
                        About me 
                    </NavLink>
                </nav>

                <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon url="https://twitter.com/RizV666" className="mr-4 align-middle" target="_blank" fgColor="#fff" style={{height:35,width:35}}></SocialIcon>
            <SocialIcon url="https://www.facebook.com/rizvi04/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}></SocialIcon>
            <SocialIcon url="https://www.instagram.com/zillhaz/?hl=en" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}></SocialIcon>
            <SocialIcon url="https://github.com/Rizviahmedzillhazz" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}></SocialIcon>
            <SocialIcon url="https://www.linkedin.com/in/rizvi-ahmed-25990517b/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}></SocialIcon>


            </div>
            </div>

           
            </header>
        );
    }
}

export default NavBar;