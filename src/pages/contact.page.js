import React, {Component} from 'react';
import AppBar from "../components/appBar.component";
import ThemeBar from '../components/themeBar.component';

class ContactPage extends Component {
    render() {
        return (
            <div>

                <AppBar/>

                <div className={'contact-body'}>
                    <h1>Contact Me</h1>
                    <p>I'd love to hear from you! I'm happy to chat in any of the below fashions:</p>
                </div>

                <ThemeBar/>

            </div>
        );
    }
}

export default ContactPage;
