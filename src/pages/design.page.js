import React, {Component} from 'react';
import AppBar from "../components/appBar.component";
import ThemeBar from '../components/themeBar.component';
import skillets from '../assets/images/design/skillets.svg';
import kangarooJobs from '../assets/images/design/kangarooJobs.svg';
import kangaroo from '../assets/images/design/kangaroo.svg';
import beaver from '../assets/images/design/beaver.svg';
import miab from '../assets/images/design/messageInABottle.svg';
import table from '../assets/images/design/tableGraphic.svg';
import beer from '../assets/images/design/beer.svg';
import anubis from '../assets/images/concept/anubis.svg';
import neonWars from '../assets/images/concept/neonWars.svg';

class DesignPage extends Component {
    render() {
        return (
            <div>

                <AppBar/>

                <div className={'design-body'}>
                    <p>Design</p>
                    <div className={'design-list'}>
                        <ul className={'design-list-top'}>
                            <li className={'long-image'}>
                                <img src={skillets} alt={'Skillets'}/>
                            </li>
                            <li className={'long-image'}>
                                <img src={kangarooJobs} alt={'Kangaroo Jobs'}/>
                            </li>
                        </ul>
                        <ul className={'design-list-mid'}>
                            <li className={'short-image'}>
                                <img src={kangaroo} alt={'Kangaroo Logo'}/>
                            </li>
                            <li className={'short-image'}>
                                <img src={beaver} alt={'Beaver'}/>
                            </li>
                            <li className={'short-image'}>
                                <img src={miab} alt={'Message in a Bottle'}/>
                            </li>
                        </ul>
                        <ul className={'design-list-bottom'}>
                            <li className={'long-image'}>
                                <img src={table} alt={'Programmer table'}/>
                            </li>
                            <li className={'short-image'}>
                                <img src={beer} alt={'Beer icon'}/>
                            </li>
                        </ul>
                    </div>
                    <p>Concept</p>
                    <div className={'design-list'}>
                        <ul className={'design-list-top'}>
                            <li className={'concept-tall'}>
                                <img src={anubis} alt={'Anubis concept art'}/>
                            </li>
                            <li className={'concept-long'}>
                                <img src={neonWars} alt={'Strategy game grid concept'}/>
                            </li>
                        </ul>
                    </div>
                </div>

                <ThemeBar/>

            </div>
        );
    }
}

export default DesignPage;
