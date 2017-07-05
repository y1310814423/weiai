/**
 * Created by kang on 2017/7/3.
 */
import React, { Component } from 'react';
import '../index.css';
import '../iconfont/iconfont.css';
import { Link  } from 'react-router';


export default class Registered extends Component{
    render(){
        return(
            <div className="bodys">
                <div className="login content">
                    <nav className="login_nav">
                        <ul>
                            <li>
                                <Link to="/home/login" className="login_xx">登入</Link>
                            </li>
                            <li>
                                <Link to="/home/register" className="login_xx xx_one">注册</Link>
                            </li>
                        </ul>
                    </nav>
                    <form action="" className="form">
                        <div className="form_group">
                            <input type="text" placeholder="邮箱" type="email" className="form_flied"/>
                        </div>
                        <div className="form_group">
                            <input type="password" placeholder="密码(至少6位)" className="form_flied"/>
                        </div>
                        <div className="form_group">
                            <input type="text" placeholder="用户名" className="form_flied" required="required"/>
                        </div>
                        <footer className="footer_action">
                            <input type="submit" className="button" value="注册"/>
                        </footer>
                        <p className="thing_auth">社交帐号登录</p>
                        <div className="social">
                            <a href="/">
                                <i className="iconfont icon-weixin"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
