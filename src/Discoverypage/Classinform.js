/**
 * Created by kang on 2017/6/30.
 */
import React, { Component } from 'react';
import '../index.css';


export default class Classinform extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <a className="jj_ification" onClick={this.colorClick}>{this.props.nmsj}</a>
        )
    }
}
