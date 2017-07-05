/**
 * Created by kang on 2017/6/28.
 */
import React, { Component } from 'react';
import '../index.css';
import '../iconfont/iconfont.css';

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                <ul>
                    <li>
                        <a href="/">
                            <i className="iconfont icon-weibo"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="iconfont icon-weixin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="iconfont icon-wifi"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="iconfont icon-youjian"></i>
                        </a>
                    </li>
                </ul>
                <div className="copyright">
                    © 2017 惟物
                    <a href="/" className="icp"> · 粤 ICP 备 17030929 号</a>
                </div>
            </footer>
        )
    }
}
export default Footer;