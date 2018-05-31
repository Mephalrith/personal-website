import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {push} from 'react-router-redux';

import github from '../assets/images/GitHub.png';
import linkedin from '../assets/images/LinkedIn.png';

class AppBar extends Component {

    isSelected(name) {
        if (name === this.props.local.pathname) {
            return 'selected';
        }
        return '';
    }

    render() {
        return (
            <div className={'header-app-bar'}>
                <a onClick={() => this.props.pushRoute('/')}
                   className={this.isSelected('/')}>
                    Home
                </a>
                <a onClick={() => this.props.pushRoute('/about')}
                   className={this.isSelected('/about')}>
                    About
                </a>
                <a onClick={() => this.props.pushRoute('/code')}
                   className={this.isSelected('/code')}>
                    Code
                </a>
                <a onClick={() => this.props.pushRoute('/design')}
                   className={this.isSelected('/design')}>
                    Design
                </a>
                <a onClick={() => this.props.pushRoute('/contact')}
                   className={this.isSelected('/contact')}>
                    Contact
                </a>
                <div className={'right-app-bar'}>
                    <a href={"https://github.com/Mephalrith"}>
                        <img src={github} alt={"github"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/brooke-porter-00307152/"}>
                        <img src={linkedin} alt={"linkedin"}/>
                    </a>
                </div>
            </div>
        )
    }
}

export default withRouter(connect((state) => ({
        local: state.router.location,
        theme: state.style.theme
    }),
    (dispatch) => ({
        pushRoute: (route) => dispatch(push(route)),
    })
)(AppBar))