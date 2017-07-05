/**
 * Created by kang on 2017/6/30.
 */
import React, { Component } from 'react';
import '../index.css';

export default class Ification extends Component{
    render(){
        return(
            <li>
                <div className="tag_block">
                    <a href="/" className="tag_block_name">
                        {this.props.blockIng.hname}
                    </a>
                    <a href="/" className="tag_block_image">
                        <img src={this.props.blockIng.image} alt=""/>
                    </a>
                </div>
            </li>
        )
    }
}