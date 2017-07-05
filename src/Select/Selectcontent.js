/**
 * Created by kang on 2017/7/3.
 */
import React, { Component } from 'react';
import '../index.css';

export default class Selectcontent extends Component{
    render(){
        return(
            <li>
                <a className="list_select">
                    <div className="list_fuzzy">
                        <img src={this.props.laxt.selectImage} alt=""/>
                    </div>
                    <div className="list_select_inner">
                        <h5 className="select_inner_name">{this.props.laxt.selectName}</h5>
                        <p className="select_inner_meta">{this.props.laxt.productInformation}</p>
                    </div>
                </a>
            </li>
        )
    }
}