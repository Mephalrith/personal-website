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
                        I do some stuff. I'll tell you all about my life right here. I guess.<br/><br/>
                        After a short commercial break...<br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br/><br/>
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