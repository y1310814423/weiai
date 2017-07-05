/**
 * Created by kang on 2017/6/28.
 */
import React, { Component } from 'react';
import '../index.css';
import '../iconfont/iconfont.css';
import Directory from './Directory';

export default class Content extends Component {
    constructor(props){
        super(props);
        this.addClick = this.addClick.bind(this);
        this.state = {
            index:1,
            data: {
                "message": "登录成功",
                "information": [
                    {
                        "price": "¥1166",
                        "introduction": "Cube 方糖触控音箱",
                        "image": require('../img/da1.jpg')
                    },
                    {
                        "price": "¥119",
                        "introduction": "U2SIM 双享号 Pro",
                        "image": require('../img/da2.jpg')
                    },
                    {
                        "price": "¥548",
                        "introduction": "Super NES Classic Edition 任天堂复古主机",
                        "image": require('../img/da3.jpg')
                    },
                    {
                        "price": "¥3254",
                        "introduction": "reMarkable Paper Tablet 电纸平板",
                        "image": require('../img/da4.jpg')
                    },
                    {
                        "price": "¥2500",
                        "introduction": "HomePod 智能音箱",
                        "image": require('../img/da5.jpg')
                    },
                    {
                        "price": "¥35000",
                        "introduction": "iMac Pro 为真正 Pro 用户而生的台式电脑",
                        "image": require('../img/da6.jpg')
                    },{
                        "price": "¥5188",
                        "introduction": "iPad Pro 10.5 英寸",
                        "image": require('../img/da7.jpg')
                    },
                    {
                        "price": "¥2040",
                        "introduction": "Cam IQ",
                        "image": require('../img/da8.jpg')
                    },
                    {
                        "price": "¥612",
                        "introduction": "Fuze Card 多卡合一",
                        "image": require('../img/da9.jpg')
                    },
                    {
                        "price": "¥899",
                        "introduction": "MX MASTER 2S 蓝牙鼠标",
                        "image": require('../img/da10.jpg')
                    },
                    {
                        "price": "¥1020",
                        "introduction": "the Light Phone 极简手机",
                        "image": require('../img/da11.jpg')
                    },
                    {
                        "price": "¥815",
                        "introduction": "Arc Hub USB-C 七合一转接坞站",
                        "image": require('../img/da12.jpg')
                    },
                    {
                        "price": "¥184",
                        "introduction": "Norlan Glass 威士忌酒杯",
                        "image": require('../img/da13.jpg')
                    },
                    {
                        "price": "¥469",
                        "introduction": "Facemaker Original 艺术积木",
                        "image": require('../img/da14.jpg')
                    },
                    {
                        "price": "¥95",
                        "introduction": "Tattly 趣味插画纹身贴",
                        "image": require('../img/da15.jpg')
                    },
                    {
                        "price": "¥199",
                        "introduction": "Baby Nulle 玩偶",
                        "image": require('../img/da16.jpg')
                    },
                    {
                        "price": "¥150",
                        "introduction": "Doomor Cup 大耳朵杯",
                        "image": require('../img/da17.jpg')
                    },
                    {
                        "price": "¥66",
                        "introduction": "石黑亚矢子「てんまると家族絵日記」",
                        "image": require('../img/da18.jpg')
                    },
                    {
                        "price": "¥2000",
                        "introduction": "Stool 60 凳子",
                        "image": require('../img/da19.jpg')
                    },
                    {
                        "price": "¥2048",
                        "introduction": "Lightning McQueen 闪电麦坤智能遥控车",
                        "image": require('../img/da20.jpg')
                    },
                    {
                        "price": "¥1799",
                        "introduction": "Watches - King 创意手表",
                        "image": require('../img/da21.jpg')
                    },
                    {
                        "price": "¥103",
                        "introduction": "Pea Wind Up 发条玩具",
                        "image": require('../img/da22.jpg')
                    },
                    {
                        "price": "¥98",
                        "introduction": "Classic Baby Bumble 弹簧跳跳人",
                        "image": require('../img/da23.jpg')
                    },
                    {
                        "price": "¥2056",
                        "introduction": "Thunderbolt 3 Dock",
                        "image": require('../img/da24.jpg')
                    },
                    {
                        "price": "¥3299",
                        "introduction": "「晓」Spark 掌上无人机",
                        "image": require('../img/da25.jpg')
                    },
                    {
                        "price": "¥5888",
                        "introduction": "Surface Pro (2017) 二合一平板电脑",
                        "image": require('../img/da26.jpg')
                    },
                    {
                        "price": "¥100",
                        "introduction": "Tengu 天狗口型秀",
                        "image": require('../img/da27.jpg')
                    },
                    {
                        "price": "¥2404",
                        "introduction": "Dash Pro 无线耳机",
                        "image": require('../img/da28.jpg')
                    },
                    {
                        "price": "¥238",
                        "introduction": "Electric Stapler 自动订书机",
                        "image": require('../img/da29.jpg')
                    },
                    {
                        "price": "¥399",
                        "introduction": "3310 手机",
                        "image": require('../img/da30.jpg')
                    },
                    {
                        "price": "¥1148",
                        "introduction": "Beddit 3",
                        "image": require('../img/da31.jpg')
                    },
                    {
                        "price": "¥248",
                        "introduction": "Grow Greenhouse 迷你温室盆栽",
                        "image": require('../img/da32.jpg')
                    },
                    {
                        "price": "¥682",
                        "introduction": "BatteryPro 移动电源",
                        "image": require('../img/da33.jpg')
                    },
                    {
                        "price": "¥855",
                        "introduction": "Knot Cushion 抱枕",
                        "image": require('../img/da34.jpg')
                    },
                    {
                        "price": "¥1718",
                        "introduction": "Friday Lock 智能门锁",
                        "image": require('../img/da35.jpg')
                    },
                    {
                        "price": "¥6490",
                        "introduction": "360 Eye RB01 智能吸尘机器人",
                        "image": require('../img/da36.jpg')
                    },
                    {
                        "price": "¥1378",
                        "introduction": "sensor mirror 8'' round 感应式化妆镜",
                        "image": require('../img/da37.jpg')
                    },
                    {
                        "price": "¥6888",
                        "introduction": "Surface Laptop",
                        "image": require('../img/da38.jpg')
                    },
                    {
                        "price": "¥208",
                        "introduction": "ActionSleeve Armband Apple Watch 运动臂带",
                        "image": require('../img/da39.jpg')
                    }
                ]
            }
        }
    }
    render(){
        return (
            <div>
                <div className="content">
                    <section className="stream">
                        <ul className="stream_body things">
                            {
                                this.state.data.information.map(function(value,index){
                                    if (index <= 17*this.state.index&&index>=0){
                                        return <Directory list={value}/>;
                                    }
                                },this)
                            }
                        </ul>
                    </section>
                </div>
                <a className="stream_trigger" onClick={this.addClick}>浏览更多</a>
            </div>
        )
    }
    addClick(){
        this.setState({index: this.state.index+1});
    }
}