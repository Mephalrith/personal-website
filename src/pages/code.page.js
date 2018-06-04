import React, {Component} from 'react';
import AppBar from "../components/appBar.component";
import ThemeBar from '../components/themeBar.component';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import foxLogo from '../assets/images/code/foxLogo.svg';
import darkFoxLogo from '../assets/images/code/Dark-foxLogo.svg';
import boat from '../assets/images/code/boat.svg';
import electron from '../assets/images/code/electron.svg';

class CodePage extends Component {
    render() {
        return (
            <div>

                <AppBar/>

                <div className={'code-body'}>

                    <h1>Code</h1>
                    <div className={'code-list-top'}>

                        <div className={'code-card-contents'}>
                            <div className={'code-card'}>
                                <a href={"https://github.com/Mephalrith/personal-website"}>
                                    {
                                        this.props.theme === "Dark" ?
                                            <img src={foxLogo} alt={"this website logo"}/> :
                                            <img src={darkFoxLogo} alt={"this website logo"}/>
                                    }
                                    <p>My Website</p>
                                </a>
                                <p className={'code-paragraph'}>
                                    You're looking at it! This website is built in React using Redux. I designed this
                                    website using the Google Material Design guidelines, and built all assets myself.
                                </p>
                            </div>
                        </div>

                        <div className={'code-card-contents'}>
                            <div className={'code-card'}>
                                <a href={"https://github.com/Mephalrith/WPM_Game"}>
                                    <img src={boat} alt={'WPM game'}/>
                                    <p>WPM Game</p>
                                </a>
                                <p className={'code-paragraph'}>
                                    I built a word-per-minute game in Java. Type faster than each level's threshold to
                                    get through the level. How long can you survive?
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={'code-list-mid'}>
                        <div className={'code-card-contents'}>
                            <div className={'code-card'}>
                                <a href={'https://github.com/Mephalrith/mkm-formulator'}>
                                    <img src={electron} alt={"electron"}/>
                                    <p>MKM</p>
                                </a>
                                <p className={'code-paragraph'}>
                                    A complete rebuild of the software used by MKM & Associates for document management
                                    and logs. It is built as an Electron app using React and Redux.
                                </p>
                            </div>
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
)(CodePage))