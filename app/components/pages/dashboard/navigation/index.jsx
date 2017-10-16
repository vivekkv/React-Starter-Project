import React from 'react';
import MetisMenu from 'react-metismenu';
import Styles from './styles.css';
import navContent from './menuList';
import ActionBuilder from '../../../../reduxImplementations/actionBuilder';

export default class Navigation extends React.Component {

    render() {

        return <div>

            <div className={Styles.nav_bar_logo_wrapper}>
                <img src="/assets/img/Apvera.v2.5-286x48-white.png" title="Apvera" />
            </div>

            <div className={Styles.nav_bar_user_info}>

                <span className={Styles.nav_bar_user_name_lbl}>{this.props.data.get("userName")}</span>
                <span className={Styles.nav_bar_user_option_lbl}>Settings</span>
                <span className={Styles.nav_bar_user_option_lbl} onClick={this.logOff.bind(this)}>Logout</span>

            </div>

            <MetisMenu content={navContent}  />

        </div>
    }

    logOff() {

        this.props.dispatch(ActionBuilder("AUTH", "LOGOFF"));
    }
}