import React, { Component } from 'react'
class Masthead extends Component {
    state = {}
    render() {
        return (
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">歡迎來到社團法人高雄市時代科技學術研究協會</div>
                    {/* <!-- <div className="masthead-heading text-uppercase">歡迎來到社團法人高雄市時代科技學術研究協會</div> --> */}
                    <a className="btn btn-primary btn-xl text-uppercase btn-more" href="#portfolio">了解更多</a>
                </div>
            </header>
        );
    }
}

export default Masthead;