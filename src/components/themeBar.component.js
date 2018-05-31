import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as styleActions from "../actions/style.actions";

class ThemeBar extends Component {
    render() {
        return (
            <div className={'theme-bar'}>
                <div className={'theme'}
                     onClick={() => this.props.switchTheme(this.props.theme)}>
                    <p>{this.props.theme} Theme</p>
                    {
                        this.props.theme === "Dark" ?
                            <i className={'material-icons md-36 light'}>compare</i> :
                            <i className={'material-icons md-36'}>compare</i>

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