import React, { Component } from 'react';
class News_content extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className="news_page">
                {this.props.New.content}
                213213
            </div>
        );
    }
}

export default News_content;