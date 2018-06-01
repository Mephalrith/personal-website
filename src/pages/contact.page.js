import React, {Component} from 'react';
import AppBar from "../components/appBar.component";
import ThemeBar from '../components/themeBar.component';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import discord from '../assets/images/Discord.png';
import darkDiscord from '../assets/images/Dark-Discord.png';

class ContactPage extends Component {
    render() {
        return (
            <div>

                <AppBar/>

                <div className={'contact-body'}>
                    <h1>Contact Me</h1>
                    <p>I'd love to hear from you! I'm happy to chat in any of the below fashions:</p>

                    <div className={'contact-methods'}>
                        <div className={'contact-card'}>
                            {
                                this.props.theme === "Dark" ?
                                    <i className={'material-icons light'}>email</i> :
                                    <i className={'material-icons'}>email</i>
                            }
                            <p>mephalrith@gmail.com</p>
                        </div>
                        <div className={'contact-card'}>
                            {
                                this.props.theme === "Dark" ?
                                    <img src={discord} alt={"Discord"}/> :
                                    <img src={darkDiscord} alt={"Discord"}/>
                            }
                            <p>Mephalrith#3019</p>
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