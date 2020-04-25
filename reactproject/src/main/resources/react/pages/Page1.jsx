import React, { Component } from "react";

export default class Page1 extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        fetch("/page1")
        .then(response => response.json())
        .then(responseObj => {
            console.log(responseObj.success);
        })
        .catch(err => console.log(err))
    } 

    /*fixed by adding plugin into webpack.config.js and adding to package.json
   *
    plugins: [ '@babel/plugin-proposal-class-properties'    ] : webpack
     "@babel/plugin-proposal-class-properties": "7.8.3" package.json  
   */
   
    test = () => {
        console.log("hello console");
    }

    render(){
        this.test();
        return (
            <div>page1</div>
        );
    }
}