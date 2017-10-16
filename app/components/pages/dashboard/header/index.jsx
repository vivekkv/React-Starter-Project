import React from 'react';
import Styles from '../styles.css';

export default class Header extends React.Component {

    render() {

        return <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 padding-zero">
                <div className={Styles.header}></div>
            </div>
        </div>
    }
}