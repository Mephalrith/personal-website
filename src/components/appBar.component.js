import React, {Component} from 'react';
import github from '../assets/images/GitHub-Mark-Light-64px.png';
import linkedin from '../assets/images/In-White-48px-R.png';

class AppBar extends Component {
    render() {
        return (
            <div className={'header-app-bar'}>
                <p>Home</p>
                <p>About</p>
                <p>Code</p>
                <p>Design</p>
                <p>Contact</p>
                <div className={'right-app-bar'}>
                    <a href={"https://github.com/Mephalrith"}><img src={github}/></a>
                    <a href={"https://www.linkedin.com/in/brooke-porter-00307152/"}><img src={linkedin}/></a>
                </div>
            </div>
        )
    }
}

export default AppBar