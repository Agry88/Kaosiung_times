import React, { Component } from 'react'
class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <div className="collapse" id="collapseExample">
                    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                        <button type="button" className="btn btn-dark" onClick={() =>this.props.Switch_page("")}>首頁</button>
                        <button type="button" className="btn btn-dark" onClick={() =>this.props.Switch_page("News")}>最新消息</button>
                        <button type="button" className="btn btn-dark" onClick={() =>this.props.Switch_page("About")}>關於我們</button>
                        <button type="button" className="btn btn-dark" onClick={() =>this.props.Switch_page("Organization")}>協會組織</button>
                        <button type="button" className="btn btn-dark" onClick={() =>this.props.Switch_page("Company")}>企業連結</button>
                        <button type="button" className="btn btn-dark" onClick={() =>this.props.Switch_page("Reward")}>獲得獎項</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;