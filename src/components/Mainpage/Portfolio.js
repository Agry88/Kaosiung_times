import React, { Component } from 'react'
import close_logo from "../../assets/img/close-icon.svg";

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        Activities: [
            {
                id: "1",
                img_src: require("../../assets/img//activity/1.jpg"),
                img_name: "活動照片1",
                img_tagname: "活動照片小標",

            },
            {
                id: "2",
                img_src: require("../../assets/img//activity/2.jpg"),
                img_name: "活動照片2",
                img_tagname: "活動照片小標",

            },
            {
                id: "3",
                img_src: require("../../assets/img//activity/3.jpg"),
                img_name: "活動照片3",
                img_tagname: "活動照片小標",

            },
        ]
    }
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">活動照片</h2>
                        <h3 className="section-subheading text-muted">小解說</h3>
                    </div>
                    <div className="row">
                        {this.state.Activities.map((Activitie) => (
                            <Portfolio_item key={Activitie.id} id={Activitie.id} img_src={Activitie.img_src} img_name={Activitie.img_name} img_tagname={Activitie.img_tagname} />
                        ))}
                    </div>
                </div>
                {/* <!-- Portfolio item modal popup--> */}
                {this.state.Activities.map((Activitie) => (
                    <Project_details key={Activitie.id} id={Activitie.id} img_src={Activitie.img_src} img_name={Activitie.img_name} img_tagname={Activitie.img_tagname}/>
                ))}
            </section>
        );
    }
}

export default Portfolio;

class Portfolio_item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-bs-toggle="modal" href={"#portfolioModal" + this.props.id}>
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={this.props.img_src} alt="..." />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.img_name}</div>
                        <div className="portfolio-caption-subheading text-muted">{this.props.img_tagname}</div>
                    </div>
                </div>
            </div>
        );
    }
}


class Project_details extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="portfolio-modal modal fade" id={"portfolioModal" + this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src={close_logo}
                            alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        {/* <!-- Project details--> */}
                                        <h2 className="text-uppercase">{this.props.img_name}</h2>
                                        <p className="item-intro text-muted">{this.props.img_tagname}</p>
                                        <img className="img-fluid d-block mx-auto" src={this.props.img_src} alt="..." />
                                        <p>活動主要說明</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>拍攝者:</strong>
                                                拍攝者名稱
                                            </li>
                                            <li>
                                                <strong>拍攝地點:</strong>
                                                拍攝地點
                                            </li>
                                        </ul>
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
