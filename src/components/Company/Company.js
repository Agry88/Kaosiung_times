import React, { Component } from 'react';
class Company extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        Companys: [
            {
                id: "1",
                name: "旅遊俱樂部",
                link_name: "www.dreamtrips.com",
                link: "https://www.dreamtrips.com",
            },
            {
                id: "2",
                name: "鼎樫科技股份有限公司",
                link_name: "www.apexgreen.com.tw/",
                link: "https://www.apexgreen.com.tw/",
            },
            {
                id: "3",
                name: "國立高雄應用科技大學",
                link_name: "www.kuas.edu.tw/bin/home.php",
                link: "https://www.kuas.edu.tw/bin/home.php",
            },
            {
                id: "4",
                name: "國立中興大學",
                link_name: "www.nchu.edu.tw/index1.php",
                link: "https://www.nchu.edu.tw/index1.php",
            },
            {
                id: "5",
                name: "正修科技大學電子工程系",
                link_name: "https://www.csu.edu.tw/ndep/super_pages.php?ID=ndep1",
                link: "https://www.csu.edu.tw/ndep/super_pages.php?ID=ndep1",
            },
            {
                id: "6",
                name: "虎尾科技大學機械與電腦輔助工程系",
                link_name: "https://nfumcae.nfu.edu.tw/bin/home.php",
                link: "https://nfumcae.nfu.edu.tw/bin/home.php",
            },
        ]
    }
    render() {
        return (
            <section className="page-section bg-light">
                <div className="cos_title">
                    <h1>合作企業連結</h1>
                </div>
                {this.state.Companys.map((Company) => (
                    <div className='cos_item'>
                        <div>{Company.name}</div>
                        <a href={Company.link}>{Company.link_name}</a>
                    </div>
                ))}
            </section>
        );
    }
}

export default Company;