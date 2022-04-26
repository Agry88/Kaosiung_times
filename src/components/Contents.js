import React, { Component } from 'react'
import Mainpage from './Mainpage/Mainpage';
import News from './News/News';
import Organization from './Organization/Organization';
import About from './About/About';
import Company from './Company/Company';
import Reward from './Reward/Reward';
import News_content from './News/News_content';

class Contents extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() {
        var select_page =this.props.Switched_page;
        console.log("select_page:",select_page);
        switch (select_page) {
            case "News":
                select_page = <News />
                break;

            case "News_content":
                select_page = <News_content />
                break;
            
            case "About":
                select_page = <About />
                break;
            
            case "Organization":
                select_page = <Organization />
                break;

            case "Company":
                select_page = <Company />
                break;

            case "Reward":
                select_page = <Reward />
                break;
            
    
            default:
                select_page = <Mainpage />
                break;
        }
        return (
            <div id="Content">
                {select_page}
            </div>
        );
    }
}

export default Contents;