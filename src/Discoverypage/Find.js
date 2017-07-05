/**
 * Created by kang on 2017/6/30.
 */
import React, { Component } from 'react';
import Ification from './Ification';
import '../index.css';

export default class Find extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: {
                "inform" : [
                    "家居", "数码", "办公", "玩乐", "个护", "品牌", "礼物"
                ],
                "homeIng" : [
                    {
                        "hname": "家居",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "吸尘器",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "杯子",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "台灯",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "健身器具",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "家庭装饰",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "睡眠",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "榨汁机",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "开瓶器",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "烧水壶",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "衣帽架",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "家具",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "酒杯",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "工作椅",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "吹风机",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "音响",
                        "image": require('../img/fx1.jpg')
                    },
                    {
                        "hname": "台式电脑",
                        "image": require('../img/fx1.jpg')
                    },
                ],
                "Digital": [
                    {
                        "hname": "数码",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "耳机",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "存储装置",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "相机",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "移动电源",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "手机支架",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "无人机",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "降噪耳机",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "便携音箱",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "游戏鼠标",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "手机",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "无线耳机",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "电子阅读器",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "键盘",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "游戏机",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "游戏手柄",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "音响",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "笔记本电脑",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "鼠标",
                        "image": require('../img/fxs1.jpg')
                    },
                    {
                        "hname": "台式电脑",
                        "image": require('../img/fxs1.jpg')
                    }
                ],
                "office": [
                    {
                        "hname": "办公",
                        "image": require('../img/fxb1.jpg')
                    },
                    {
                        "hname": "卷笔刀",
                        "image": require('../img/fxb1.jpg')
                    },
                    {
                        "hname": "工作椅",
                        "image": require('../img/fxb1.jpg')
                    },
                    {
                        "hname": "键盘",
                        "image": require('../img/fxb1.jpg')
                    },
                    {
                        "hname": "笔记本电脑",
                        "image": require('../img/fxb1.jpg')
                    },
                    {
                        "hname": "鼠标",
                        "image": require('../img/fxb1.jpg')
                    },
                    {
                        "hname": "台式电脑",
                        "image": require('../img/fxb1.jpg')
                    }
                ],
                "playing": [
                    {
                        "hname": "玩乐",
                        "image": require('../img/fxw1.jpg')
                    },
                    {
                        "hname": "游戏机",
                        "image": require('../img/fxw1.jpg')
                    },
                    {
                        "hname": "游戏手柄",
                        "image": require('../img/fxw1.jpg')
                    },
                ],
                "Anurse": [
                    {
                        "hname": "个护",
                        "image": require('../img/fxg1.jpg')
                    },
                    {
                        "hname": "剃须刀",
                        "image": require('../img/fxg1.jpg')
                    },
                    {
                        "hname": "指甲刀",
                        "image": require('../img/fxg1.jpg')
                    },
                    {
                        "hname": "吹风机",
                        "image": require('../img/fxg1.jpg')
                    },
                ],
                "brand":[
                    {
                        "hname": "品牌",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Bose",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Apple",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Lumio",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Dyson",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Soylent",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Herman Miller",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "SteelSeries",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Humanscale",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Logitech",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Siny",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "LaCie",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Click & Grow",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Anglepoise",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Nintendo",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Braun",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Artemide",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Beats",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "TEMPUR",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "B&O",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Panasonic",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Leica",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Moleskine",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Valve",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Okamura",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Steelcase",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Twelve South",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Alienware",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Pablo",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "DJI",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Sonos",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Marshall",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Parrot",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Nest",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Philips",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Devialet",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "LINE FRIENDS",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "Bowers & Wilkins",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "elago",
                        "image": require('../img/fxp1.jpg')
                    },
                    {
                        "hname": "FLYTE",
                        "image": require('../img/fxp1.jpg')
                    },
                ],
                "gift": [
                    {
                        "hname": "礼物",
                        "image": require('../img/fxl1.jpg')
                    },
                    {
                        "hname": "送程序员",
                        "image": require('../img/fxl1.jpg')
                    },
                    {
                        "hname": "送游戏玩家",
                        "image": require('../img/fxl1.jpg')
                    },
                    {
                        "hname": "送男友",
                        "image": require('../img/fxl1.jpg')
                    },
                    {
                        "hname": "🐱 礼物",
                        "image": require('../img/fxl1.jpg')
                    },
                    {
                        "hname": "乔迁礼物",
                        "image": require('../img/fxl1.jpg')
                    },
                    {
                        "hname": "新婚礼物",
                        "image": require('../img/fxl1.jpg')
                    },
                    {
                        "hname": "生日礼物",
                        "image": require('../img/fxl1.jpg')
                    },
                    {
                        "hname": "送长辈",
                        "image": require('../img/fxl1.jpg')
                    },
                    {
                        "hname": "送小朋友",
                        "image": require('../img/fxl1.jpg')
                    },
                    {
                        "hname": "200元礼物",
                        "image": require('../img/fxl1.jpg')
                    },
                    {
                        "hname": "1000元礼物",
                        "image": require('../img/fxl1.jpg')
                    },
                    {
                        "hname": "2000元礼物",
                        "image": require('../img/fxl1.jpg')
                    },
                    {
                        "hname": "500元礼物",
                        "image": require('../img/fxl1.jpg')
                    }
                ]
            }
        }
    }
    render(){
        return(
            <div className="content find">
                {
                    <nav className="nav_tags">
                        {
                            this.state.data.inform.map(function(value,index){
                                return <a className="jj_ification">{value}</a>
                            })
                        }
                    </nav>
                }
                <ul className="tag_blocks">
                    {
                        this.state.data.homeIng.map(function(value,index){
                            return <Ification blockIng={value}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}