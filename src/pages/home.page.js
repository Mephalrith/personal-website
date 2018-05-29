import React, {Component} from 'react';
import foxbox from '../assets/images/foxBox.svg';
import AppBar from "../components/appBar.component";

class HomePage extends Component {
    render() {
        return (
            <div>

                <AppBar/>

                <div className={'home-body'}>
                    <p>Brooke Porter</p>
                    <div className={'home-container'}>
                        <img src={foxbox} alt={"Programming & Graphic Design"}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default HomePage;
