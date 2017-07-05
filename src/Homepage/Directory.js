/**
 * Created by kang on 2017/6/29.
 */
import React, { Component } from 'react';
import '../index.css';
import '../iconfont/iconfont.css';

export default class Directory extends Component{
    render(){
        return(
            <li>
                <section className="thing">
                    <small className="this_price">{this.props.list.price}</small>
                    <a href="/" className="this_image">
                        <img src={this.props.list.image} alt=""/>
                    </a>
                    <div className="this_body">
                        <div className="this_content">
                            <h5 className="this_name">
                                <a href="/">{this.props.list.introduction}</a>
                            </h5>
                        </div>
                    </div>
                    <div className="this_actions">
                        <a className="button button_like" href="/">
                            <i className="iconfont icon-aixin"></i>
                        </a>
                        <a className="button button_addTo" href="/">
                            <i className="iconfont icon-iconfontadd"></i>
                        </a>
                    </div>
                </section>
            </li>
        )
    }
}