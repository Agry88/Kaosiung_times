import React, { Component } from 'react';
import img from "../../assets/img/Organization/organ.PNG";
class Organization extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <section className="page-section bg-light">
                <div className="organ_img">
                    <img src={img} alt="協會組織圖照片" />
                </div>
            </section>
        );
    }
}

export default Organization;