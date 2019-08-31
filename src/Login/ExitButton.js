import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router"
import "./ExitBtn.css";

class ExitBtn extends React.Component{
    constructor(props){
        super(props);
            this.state = {}
    }
    render(){
        return(
            <div>
                <a href="http://Muhammeday99.github.io/loginpagegtu">
                <button type="button" className="exitbtn" >
                Exit
                </button>
                </a>
            </div>
        )
    }

}

export default ExitBtn;