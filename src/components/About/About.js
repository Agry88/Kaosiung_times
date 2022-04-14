import React, { Component } from 'react'
class About extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <section className="page-section bg-light">
                <div className="about">
                    <h1>
                        關於我們
                    </h1>
                </div>
                <div className="about">
                    本會以提供學術研究、合作交流平台以促進跨領域學術交流，增進產學合作為宗旨。
                </div>
                <div className="about">
                    本會之任務如下：
                </div>
                <div className="about">
                    一、提供學術研究、合作交流平台。
                </div>
                <div className="about">
                    二、促進跨領域學術交流。
                </div>
                <div className="about">
                    三、增進產學合作為宗旨。
                </div>
                <div className="about">
                    四、其它與學術研究發展有關事宜。
                </div>
                <div className="about">
                    歡迎認同本會宗旨、設籍或工作於本市、年滿二十歲、有行為能力、具碩士以上學歷資格或於特殊領域學有專精人士，填具入會申請書加入本會行列。
                </div>
            </section>
        );
    }
}

export default About;