import React, {Component} from 'react';
import AppBar from "../components/appBar.component";
import ThemeBar from '../components/themeBar.component';

class CodePage extends Component {
    render() {
        return (
            <div>

                <AppBar/>

                <div>
                    <p>Code Page</p>
                </div>

                <ThemeBar/>

            </div>
        );
    }
}

export default CodePage;