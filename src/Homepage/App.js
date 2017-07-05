/**
 * Created by kang on 2017/6/29.
 */
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

import '../index.css';

export default class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let content;
        if (this.props.location.pathname=="/home/content"){
            content=React.cloneElement(this.props.children);
        }else if(this.props.location.pathname=="/home/find"){
            content=React.cloneElement(this.props.children);
        }else if(this.props.location.pathname=="/home/select"){
            content=React.cloneElement(this.props.children);
        }else if(this.props.location.pathname=="/home/login"){
            content=React.cloneElement(this.props.children);
        }else if(this.props.location.pathname=="/home/register"){
            content=React.cloneElement(this.props.children);
        }
        return(
            <div style={{height:'100%'}}>
                <Header />
                {
                    content
                }
                {
                    this.props.location.pathname=="/home/register"||this.props.location.pathname=="/home/login"?"":<Footer/>
                }
            </div>
        )
    }
}