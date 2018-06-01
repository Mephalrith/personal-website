import React, {Component} from 'react';
import AppBar from "../components/appBar.component";
import ThemeBar from '../components/themeBar.component';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import discord from '../assets/images/Discord.svg';
import darkDiscord from '../assets/images/Dark-Discord.svg';
import github from '../assets/images/GitHub-Name.svg';
import darkGithub from '../assets/images/Dark-GitHub-Name.svg';
import linkedin from '../assets/images/LinkedIn-Name.svg';
import darkLinkedin from '../assets/images/Dark-LinkedIn-Name.svg';

class ContactPage extends Component {
    render() {
        return (
            <div>

                <AppBar/>

                <div className={'contact-body'}>
                    <h1>Contact Me</h1>
                    <p>I'd love to hear from you!<br/>I'm happy to chat in any of the below fashions:</p>

                    <div className={'contact-methods-top'}>
                        <div className={'contact-card'}>
                            <a href={'mailto:mephalrith@gmail.com'}>
                                <p>Email</p>
                                {
                                    this.props.theme === "Dark" ?
                                        <i className={'material-icons light'}>email</i> :
                                        <i className={'material-icons'}>email</i>
                                }
                            </a>
                            <p>mephalrith@gmail.com</p>
                        </div>
                        <div className={'contact-card'}>
                            <a href={"https://discordapp.com/"}>
                                {
                                    this.props.theme === "Dark" ?
                                        <img src={discord} alt={"Discord"}/> :
                                        <img src={darkDiscord} alt={"Discord"}/>
                                }
                            </a>
                            <p>Mephalrith#3019</p>
                        </div>
                    </div>

                    <div className={'contact-methods-bottom'}>
                        <div className={'contact-card'}>
                            <a href={"https://github.com/Mephalrith"}>
                                {
                                    this.props.theme === "Dark" ?
                                        <img src={github} alt={"github"}/> :
                                        <img src={darkGithub} alt={"github"}/>
                                }
                            </a>
                            <p>github.com/Mephalrith</p>
                        </div>
                        <div className={'contact-card'}>
                            <a href={"https://www.linkedin.com/in/brooke-porter-00307152/"}>
                                {
                                    this.props.theme === "Dark" ?
                                        <img src={linkedin} alt={"linkedin"}/> :
                                        <img src={darkLinkedin} alt={"linkedin"}/>
                                }
                            </a>
                            <p>linkedin.com/in/brooke-porter-00307152/</p>
                        </div>
                    </div>

                </div>

                <ThemeBar/>

            </div>
        );
    }
}

export default withRouter(connect((state) => ({
        theme: state.style.theme
    })
)(ContactPage))