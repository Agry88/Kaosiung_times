import React, { Component } from 'react';
import close_logo from "../../assets/img/close-icon.svg";
class Reward extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [
                {
                    id: "1",
                    Reward_name: "機械裝置的平衡校正系統及其校正方法",
                    Reward_small_explain: "活動照片小標",
                    img_src: require("../../assets/img/page_about/1.jpg"),
                    Reward_explain: "機械裝置的平衡校正系統及其校正方法",
                },
                {
                    id: "2",
                    Reward_name: "機械裝置的平衡校正系統及其校正方法",
                    Reward_small_explain: "活動照片小標",
                    img_src: require("../../assets/img/page_about/2.jpg"),
                    Reward_explain: "機械裝置的平衡校正系統及其校正方法",
                },
                {
                    id: "3",
                    Reward_name: "鐵捲門之防壓檢測裝置",
                    Reward_small_explain: "活動照片小標",
                    img_src: require("../../assets/img/page_about/3.jpg"),
                    Reward_explain: "鐵捲門之防壓檢測裝置",
                },
                {
                    id: "4",
                    Reward_name: "賽普勒斯國際創新發明獎",
                    Reward_small_explain: "活動照片小標",
                    img_src: require("../../assets/img/page_about/4.jpg"),
                    Reward_explain: "賽普勒斯國際創新發明獎",
                },
                {
                    id: "5",
                    Reward_name: "賽普勒斯國際創新發明獎",
                    Reward_small_explain: "活動照片小標",
                    img_src: require("../../assets/img/page_about/5.jpg"),
                    Reward_explain: "賽普勒斯國際創新發明獎",
                },
                {
                    id: "6",
                    Reward_name: "烏克蘭國際發明獎",
                    Reward_small_explain: "活動照片小標",
                    img_src: require("../../assets/img/page_about/6.jpg"),
                    Reward_explain: "烏克蘭國際發明獎",
                },
                {
                    id: "7",
                    Reward_name: "烏克蘭國際發明獎",
                    Reward_small_explain: "活動照片小標",
                    img_src: require("../../assets/img/page_about/7.jpg"),
                    Reward_explain: "烏克蘭國際發明獎",
                },
                {
                    id: "8",
                    Reward_name: "IIC國際創新發明_太陽能得獎證書",
                    Reward_small_explain: "活動照片小標",
                    img_src: require("../../assets/img/page_about/8.jpg"),
                    Reward_explain: "IIC國際創新發明_太陽能得獎證書",
                },
                {
                    id: "9",
                    Reward_name: "俄羅斯阿基米德國際發明競賽",
                    Reward_small_explain: "活動照片小標",
                    img_src: require("../../assets/img/page_about/9.jpg"),
                    Reward_explain: "俄羅斯阿基米德國際發明競賽",
                },
                {
                    id: "10",
                    Reward_name: "俄羅斯阿基米德國際發明競賽",
                    Reward_small_explain: "活動照片小標",
                    img_src: require("../../assets/img/page_about/10.jpg"),
                    Reward_explain: "俄羅斯阿基米德國際發明競賽",
                },
                {
                    id: "11",
                    Reward_name: "俄羅斯阿基米德國際發明競賽",
                    Reward_small_explain: "活動照片小標",
                    img_src: require("../../assets/img/page_about/11.jpg"),
                    Reward_explain: "俄羅斯阿基米德國際發明競賽",
                },
                {
                    id: "12",
                    Reward_name: "烏克蘭榮譽院士_歐招輝",
                    Reward_small_explain: "活動照片小標",
                    img_src: require("../../assets/img/page_about/12.jpg"),
                    Reward_explain: "烏克蘭榮譽院士_歐招輝",
                },
                {
                    id: "13",
                    Reward_name: "烏克蘭榮譽院士_歐招輝",
                    Reward_small_explain: "活動照片小標",
                    img_src: require("../../assets/img/page_about/13.jpg"),
                    Reward_explain: "烏克蘭榮譽院士_歐招輝",
                },
            ]
        }
    }
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">獲得獎項</h2>
                        {/* <h3 className="section-subheading text-muted">小解說</h3> */}
                    </div>
                    <div className="row">
                        {this.state.contents.map((content) => (
                            <Reward_item key={content.id} Reward_name={content.Reward_name}
                                Reward_small_explain={content.Reward_small_explain}
                                img_src={content.img_src} Reward_explain={content.Reward_explain}
                            />
                        ))}
                    </div>
                </div>
                {/* <!-- Reward item modal popup--> */}
                {this.state.contents.map((content) => (
                    <Reward_modal key={content.id} Reward_name={content.Reward_name}
                        Reward_small_explain={content.Reward_small_explain}
                        img_src={content.img_src} Reward_explain={content.Reward_explain} />
                ))}
            </section>

        );
    }
}

export default Reward;

class Reward_item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            /* <!-- Reward item--> */
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-bs-toggle="modal" href={"#rewardModal" + this.props.id}>
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={this.props.img_src} alt="..." />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.Reward_name}</div>
                        {/* <div className="portfolio-caption-subheading text-muted">{this.props.Reward_small_explain}</div> */}
                    </div>
                </div>
            </div>
        );
    }
}

class Reward_modal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="portfolio-modal modal fade" id={"rewardModal" + this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src={close_logo}
                            alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project details--> */}
                                        <h2 className="text-uppercase">{this.props.Reward_name}</h2>
                                        {/* <p className="item-intro text-muted">活動照片小備註</p> */}
                                        <img className="img-fluid d-block mx-auto" src={this.props.img_src} alt="..." />
                                        <p>{this.props.Reward_explain}</p>
                                        {/* <ul className="list-inline">
                                                    <li>
                                                        <strong>拍攝者:</strong>
                                                        拍攝者名稱
                                                    </li>
                                                    <li>
                                                        <strong>拍攝地點:</strong>
                                                        拍攝地點
                                                    </li>
                                                </ul> */}
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                            type="button">
                                            <i className="fas fa-times me-1"></i>
                                            關閉
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}