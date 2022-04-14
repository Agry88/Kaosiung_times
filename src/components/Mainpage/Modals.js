import React, { Component } from 'react';
import close_logo from "../../assets/img/close-icon.svg";
class Modals extends Component {
    state = {}
    render() {
        return (
            <div>
                {/* <!-- Portfolio item 1 modal popup--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-bs-dismiss="modal"><img src={close_logo}
                                alt="Close modal" /></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="modal-body">
                                            {/* <!-- Project details--> */}
                                            <h2 className="text-uppercase">活動照片</h2>
                                            <p className="item-intro text-muted">活動照片小備註</p>
                                            <img className="img-fluid d-block mx-auto" src={require("../../assets/img/activity/1.jpg")} alt="..." />
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
                {/* <!-- Portfolio item 2 modal popup--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-bs-dismiss="modal"><img src={close_logo}
                                alt="Close modal" /></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="modal-body">
                                            {/* <!-- Project details--> */}
                                            <h2 className="text-uppercase">Project Name</h2>
                                            <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                            <img className="img-fluid d-block mx-auto" src={require("../../assets/img/activity/2.jpg")} alt="..." />
                                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                                                repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                                                nostrum, reiciendis facere nemo!</p>
                                            <ul className="list-inline">
                                                <li>
                                                    <strong>Client:</strong>
                                                    Explore
                                                </li>
                                                <li>
                                                    <strong>Category:</strong>
                                                    Graphic Design
                                                </li>
                                            </ul>
                                            <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                                type="button">
                                                <i className="fas fa-times me-1"></i>
                                                Close Project
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio item 3 modal popup--> */}
                <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-bs-dismiss="modal"><img src={close_logo}
                                alt="Close modal" /></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="modal-body">
                                            {/* <!-- Project details--> */}
                                            <h2 className="text-uppercase">Project Name</h2>
                                            <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                            <img className="img-fluid d-block mx-auto" src={require("../../assets/img/activity/3.jpg")} alt="..." />
                                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                                                repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                                                nostrum, reiciendis facere nemo!</p>
                                            <ul className="list-inline">
                                                <li>
                                                    <strong>Client:</strong>
                                                    Finish
                                                </li>
                                                <li>
                                                    <strong>Category:</strong>
                                                    Identity
                                                </li>
                                            </ul>
                                            <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                                type="button">
                                                <i className="fas fa-times me-1"></i>
                                                Close Project
                                            </button>
                                        </div>
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

export default Modals;