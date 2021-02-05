import React from 'react'
import './index.css'
import cursor from "../../images/cursor.png"
import manWithCard from "../../images/man_with_card.png"
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-scroll-parallax';
import coin from "../../images/coin.png"

export default class PossibilityComponent extends React.Component {
    render() {
        return (
            <div className="possibility">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <Parallax y={[-10, 10]} tagOuter="figure2">
                                <h2 className="extraBold">Возможности</h2>
                                <h5>на прямую выводить и вводить на банковские карты<br />
                            мгновенные переводы внутри телеграмм без комиссии</h5>
                                <ScrollAnimation
                                    animateIn="bounceInUp">
                                    <div className="blueCard">
                                        <div className="blueCard_title">
                                            Быстрая покупка<br />
                                        и продажа
                                    </div>
                                        <div className="blueCard_text">
                                            bitcoin<br />
                                        etherium<br />
                                        USDT<br />
                                        </div>
                                        <img src={cursor} className="blueCard_cursor" alt="" />
                                    </div>
                                </ScrollAnimation>
                            </Parallax>
                        </div>
                        <div className="col-md-6">
                            <img src={manWithCard} draggable={false} className="manwithcard" alt="" />
                            <ScrollAnimation
                                offset={-400}
                                animateIn="bounceInLeft">
                                <div className="grayCard">
                                    <div className="grayCard_title bold">
                                        Зарабатывай вместе<br />
                                    с нами
                                </div>
                                    <div className="grayCard_text">
                                        <span className="bold">на остаток по депозиту</span><br />
                                    каждый день мы начисляем<br />
                                    % на депозит
                                </div>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation
                                animateIn="bounceInRight">
                                <div className="greenCard">
                                    <div className="greenCard_title bold">
                                        Совершай<br />
                                    платежи<br />
                                    и покупки
                                </div>
                                    <div className="greenCard_text">
                                        прямо из кошелька<br />
                                    (мобильный телефон,<br />
                                    Gift-карты)
                                </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}