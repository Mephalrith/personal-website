import React, {Component} from 'react';
import foxBox from '../assets/images/foxBox.svg';
import darkFoxBox from '../assets/images/Dark-foxBox.svg';
import AppBar from "../components/appBar.component";
import ThemeBar from '../components/themeBar.component';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class HomePage extends Component {

    render() {
        return (
            <div>

                <AppBar/>

                <div className={'home-body'}>
                    <p>Brooke Porter</p>
                    <div className={'home-container'}>
                        {
                            this.props.theme === "Dark" ?
                                <img src={foxBox} alt={"Programming & Graphic Design"}/> :
                                <img src={darkFoxBox} alt={"Programming & Graphic Design"}/>
                        }
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
)(HomePage))