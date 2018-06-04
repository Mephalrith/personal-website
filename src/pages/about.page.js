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
                        I am a developer with experience in graphic design and computer animation. I can make assets and
                        also code!
                        <br/><br/>
                        I went to Full Sail University in Winter Park, Florida for my BS in Computer Animation, but was
                        unable to find a job with that degree when I returned home to Santa Rosa, California. I decided
                        to return to school for Computer Science. I found that I enjoyed programming more than I ever
                        enjoyed animation, and began learning languages on my own outside of class work.
                        <br/><br/>
                        I am very fluent in using Photoshop and Maya, and have experience with Illustrator and
                        other software such as Inkscape, Sketchbook, and Paint Tool Sai.
                        <br/><br/>
                        Working in frontend development has been a very interesting experience for me, because I
                        already had exposure to art and design before learning to program. I am able to make my own
                        designs, create the assets, and then build the UI myself.
                        <br/><br/>
                        Because of that, I am particularly looking forward to working on backend and full stack
                        applications, since I already have experience with frontend.
                        <br/><br/>
                        Contact me! I'd love to work with you.
                        <br/>
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