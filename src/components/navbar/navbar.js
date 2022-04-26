import React, { Component } from 'react'
class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        Userwidth:window.innerWidth,
     }
     timer_resize=setInterval(() => {
         const newWidth = window.innerWidth;
         this.setState({ Userwidth: newWidth });
    }, 500);
     
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container navbar-container">
                    <div className="SidebarMenu">
                            <button className="btn btn-dark" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" id="SidebarMenu">
                                <i className="fas fa-bars"></i>
                            </button>
                    </div>

                    <a className="navbar-brand" href="#page-top">社團法人高雄市時代科技學術研究協會</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#portfolio" onClick={() =>this.props.Switch_page("")}>活動照片</a></li>
                            <li className="nav-item"><a className="nav-link" href="#team" onClick={() =>this.props.Switch_page("")}>組織成員</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact" onClick={() =>this.props.Switch_page("")}>聯絡我們</a></li>
                        </ul>
                    </div>
                    {this.state.Userwidth<1000?"":
                    <div className="input-group2">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control" placeholder="搜尋..." />
                        </div>
                        <button type="button" className="btn btn-primary2">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    }
                </div>
            </nav>
        );
    }
}

export default Navbar;

