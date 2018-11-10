import React, {Component} from 'react';
import AppBar from "../components/appBar.component";
import ThemeBar from '../components/themeBar.component';
import aboutHeader from '../assets/images/aboutHeader.svg';
import darkAboutHeader from '../assets/images/Dark-aboutHeader.svg';
import aboutFooter from '../assets/images/aboutFooter.svg';
import darkAboutFooter from '../assets/images/Dark-aboutFooter.svg';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class AboutPage extends Component {
    render() {
        return (
            <div>

                <AppBar/>

                <div className={'about-body'}>
                    {
                        this.props.theme === "Dark" ?
                            <img src={aboutHeader}
                                 alt={"My name is Brooke Porter"}
                                 className={'about-header'}/> :
                            <img src={darkAboutHeader}
                                 alt={"My name is Brooke Porter"}
                                 className={'about-header'}/>
                    }
                    <p className={'about-text'}>
                        I discovered my love for programming by creating macros and plugins for video games as a
                        teenager. At the time, I did not realize that programming was something that I could pursue.
                        <br/><br/>
                        I moved to Florida for a couple of years while I tried to figure out what I wanted from life,
                        decided that Florida was not the place for me, and moved back to California. I worked in food
                        service for a while, and finally realized that what I really wanted was to return to
                        programming.
                        <br/><br/>
                        I attended the Santa Rosa Junior College to work towards a Computer Science degree, and have
                        since transferred to San Francisco State University.
                    </p>
                    {
                        this.props.theme === "Dark" ?
                            <img src={aboutFooter}
                                 alt={"Fox tail"}
                                 className={'about-footer'}/> :
                            <img src={darkAboutFooter}
                                 alt={"Fox tail"}
                                 className={'about-footer'}/>
                    }

                </div>

                <ThemeBar/>

            </div>
        );
    }
}

export default withRouter(connect((state) => ({
        theme: state.style.theme
    })
)(AboutPage))