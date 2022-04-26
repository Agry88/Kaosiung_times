import React, { Component } from 'react'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import News_content from "./News_content";
class News extends Component {
    state = {
        news: [
            {
                id: '1',
                date_time: "2019-11-25 10:07",
                title: "國防工業發展基金會委託研究計畫期中報告",
                content: "國防工業發展基金會委託研究計畫期中報告內容",
            },
            {
                id: '2',
                date_time: "2019-11-22 11:27",
                title: "108年第8次理監事會議",
                content: "108年第8次理監事會議內容",
            },
            {
                id: '3',
                date_time: "2019-11-20 15:14",
                title: "108年海洋研究成果發表展",
                content: "108年海洋研究成果發表展內容",
            },
            {
                id: '4',
                date_time: "2019-08-15 14:35",
                title: "108年國防基金會成果訪查",
                content: "108年國防基金會成果訪查內容",
            },
            {
                id: '5',
                date_time: "2019-06-25 13:30",
                title: "振動應力消除製程技術示範觀摩",
                content: "振動應力消除製程技術示範觀摩內容",
            },
            {
                id: '6',
                date_time: "2019-05-17 14:05",
                title: "108年第7次理監事會議及第4次會員大會",
                content: "108年第7次理監事會議及第4次會員大會內容",
            },
            {
                id: '7',
                date_time: "2019-04-29 13:30",
                title: "副總統接見國際傑出發明家",
                content: "副總統接見國際傑出發明家內容",
            },
            {
                id: '8',
                date_time: "2018-11-26 14:37",
                title: "國防工業發展基金會委託研究計畫期中報告",
                content: "國防工業發展基金會委託研究計畫期中報告內容",
            },
        ]
    }
    content_page = (New) => {
        const contentElement = document.getElementById("page-news");
        const Content = createRoot(contentElement);
        Content.render(
            <StrictMode>
                <News_content New={New}/>
            </StrictMode>,
        );

    }

    Even_numbers = (id) => {
        const ans = id % 2 == 0 ? true : false;
        console.log(id + "被點:" + ans);
        return ans
    }

    render() {
        const background_1 = {
            backgroundColor: 'white',
        };
        const background_2 = {
            backgroundColor: "#E0EFFE",
        }
        const random_list = this.state.news;
        random_list.sort(function() {
            return (0.5-Math.random());
        });
        return (
            <section className="page-section bg-light" id='page-news'>
                {random_list.map((New,index) => (
                    <div className="news" style={this.Even_numbers(index) ? background_1 : background_2}>
                        <News_item New={New} content_page={this.content_page} />
                    </div>
                ))}
                <div className="news Nextpage-section">
                    <a href="#" onClick={()=>this.forceUpdate()}>
                        1
                    </a>
                    <a href="#" onClick={()=>this.forceUpdate()}>
                        2
                    </a>
                    <a href="#" onClick={()=>this.forceUpdate()}>
                        3
                    </a>
                </div>
            </section>
        );
    }
}

function News_item(props) {
    return (
        <div>
            <div className="news_content news_time">{props.New.date_time}</div>
            <a className="news_content news_title atag_color" onClick={() => props.content_page(props.New)}>{props.New.title}</a><br />
            <a href="#" className="news_href atag_color" onClick={() => props.content_page(props.New)}>閱讀更多</a>
        </div>
    );
}

export default News;