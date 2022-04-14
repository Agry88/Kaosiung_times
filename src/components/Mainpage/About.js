import React, { Component } from 'react'
class About extends Component {
    state = {}
    render() {
        return (
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">組織歷史</h2>
                        <h3 className="section-subheading text-muted">組織歷史小標</h3>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../../assets/img//about/1.jpg")}
                                alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2009-2011</h4>
                                    <h4 className="subheading">組織歷史標題</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">組織歷史說明1</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../../assets/img//about/2.jpg")}
                                alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>五月 2011</h4>
                                    <h4 className="subheading">組織歷史標題</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">組織歷史說明2</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../../assets/img//about/3.jpg")}
                                alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>December 2015</h4>
                                    <h4 className="subheading">組織歷史標題</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">組織歷史說明3</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={require("../../assets/img//about/4.jpg")}
                                alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>July 2020</h4>
                                    <h4 className="subheading">組織歷史標題</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">組織歷史說明4</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image timeline-words">
                                <h4>
                                    加入
                                    <br />
                                    我們吧!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default About;