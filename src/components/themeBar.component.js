import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as styleActions from "../actions/style.actions";
import compare from '../assets/images/compare.svg';
import darkCompare from '../assets/images/Dark-compare.svg';

class ThemeBar extends Component {
    render() {
        return (
            <div className={'theme-bar'}>
                <div className={'theme'}
                     onClick={() => this.props.switchTheme(this.props.theme)}>
                    <p>{this.props.theme} Theme</p>
                    {
                        this.props.theme === "Dark" ?
                            <img src={compare} alt={'Switch theme'}/> :
                            <img src={darkCompare} alt={'Switch theme'}/>
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(connect((state) => ({
        theme: state.style.theme
    }),
    (dispatch) => ({
        switchTheme: (theme) => dispatch(styleActions.changeTheme(theme))
    })
)(ThemeBar))