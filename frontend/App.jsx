import React,{Component} from "react";
import { render } from "react-dom";
import CreateMovie from "./components/CreateMovie";

export default class App extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return <CreateMovie/>
    }




    

}

