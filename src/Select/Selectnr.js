/**
 * Created by kang on 2017/7/3.
 */
import React, { Component } from 'react';
import '../index.css';
import Selectcontent from './Selectcontent';


export default class Selects extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    "selectName": "桌上博物馆",
                    "productInformation": "8 个产品 · 最后更新于 2017/06/17",
                    "selectImage": require("../img/jx1.jpg")
                },
                {
                    "selectName": "Talk #1: niea & 特特 | 大大儿童商店创始人",
                    "productInformation": "8 个产品 · 最后更新于 2017/06/06",
                    "selectImage": require("../img/jx2.jpg")
                },
                {
                    "selectName": "童心不泯",
                    "productInformation": "9 个产品 · 最后更新于 2017/05/31",
                    "selectImage": require("../img/jx3.jpg")
                },
                {
                    "selectName": "超凡设计师 #1: Eames 夫妇",
                    "productInformation": "3 个产品 · 最后更新于 2017/05/29",
                    "selectImage": require("../img/jx4.jpg")
                },
                {
                    "selectName": "2017 母亲节礼物清单",
                    "productInformation": "10 个产品 · 最后更新于 2017/06/05",
                    "selectImage": require("../img/jx5.jpg")
                },
                {
                    "selectName": "惟物商店上架的奇酷产品",
                    "productInformation": "10 个产品 · 最后更新于 2017/06/24",
                    "selectImage": require("../img/jx6.jpg")
                },
                {
                    "selectName": "组建你的 Apple HomeKit",
                    "productInformation": "3 个产品 · 最后更新于 2017/07/01",
                    "selectImage": require("../img/jx7.jpg")
                },
                {
                    "selectName": "时至 2017，有哪些仍然值得买的办公座椅",
                    "productInformation": "6 个产品 · 最后更新于 2017/04/24",
                    "selectImage": require("../img/jx8.jpg")
                },
                {
                    "selectName": "值得买的 Apple Watch 周边产品",
                    "productInformation": "4 个产品 · 最后更新于 2017/06/24",
                    "selectImage": require("../img/jx9.jpg")
                },
                {
                    "selectName": "它们的主要特点是能让你更爱工作",
                    "productInformation": "10 个产品 · 最后更新于 2017/04/25",
                    "selectImage": require("../img/jx10.jpg")
                },
                {
                    "selectName": "家居小件",
                    "productInformation": "13 个产品 · 最后更新于 2017/05/04",
                    "selectImage": require("../img/jx11.jpg")
                }
            ]
        }
    }
    render(){
        return(
            <div className="seclectnr content">
                <section className="stream">
                    <ul className="stream_body select">
                        {
                            this.state.data.map(function(value,index){
                               return <Selectcontent laxt={value}/>
                            })
                        }
                    </ul>
                </section>
            </div>
        )
    }
}