/**
 * Created by kang on 2017/2/5.
 */
import React, { Component } from 'react';
import '../index.css';
import '../iconfont/iconfont.css';
import {Link} from 'react-router'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.addColor=this.addColor.bind(this);
        this.addColor1=this.addColor1.bind(this);
        this.addColor2=this.addColor2.bind(this);
        this.state={
            color: 1,
            cname: "",
            cname1: "",
            cname2: ""
        }
    }
    componentDidMount(){
        this.setState({color: this.state.color+1});
        console.log(this.state.color);
    }
    render(){
        return (
            <header className="header">
                <div className="header_inner">
                    <nav className="header_nav">
                        <ul>
                            <li className={this.state.cname} onClick={this.addColor}>
                                <Link to="/home/content">
                                    <i className="iconfont icon-shouye"></i>
                                    首页
                                </Link>
                            </li>
                            <li className={this.state.cname1} onClick={this.addColor1}>
                                <Link to="/home/find">
                                    <i className="iconfont icon-faxian"></i>
                                    发现
                                </Link>
                            </li>
                            <li className={this.state.cname2} onClick={this.addColor2}>
                                <Link to="/home/select">
                                    <i className="iconfont icon-fav"></i>
                                    精选
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="user_action">
                        <Link to="/home/register" className="button button_registered bianhs">注册</Link>
                        <Link to="/home/login" className="button button_login">登入</Link>
                    </div>
                    <h1 className="brina">
                        <a href="/">
                            <span className="logo_image">🐙</span>
                            <img className="brana_image" src={require('../img/logo.png')} alt="唯物"/>
                        </a>
                    </h1>
                </div>
            </header>
        )
    }
    addColor(){
        if (this.state.color==1){
            this.setState({
                color: 2,
                cname: 'is_active'
            });
        }else{
            this.setState({
                color: 1,
                cname: ""
            });
        }
    }
    addColor1(){
        this.setState({
            cname1: 'is_active'
        });
    }
    addColor2(){
        this.setState({
            cname2: 'is_active'
        });
    }
};