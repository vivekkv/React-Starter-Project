import React from 'react';
import AuthenticationComponent from '../../base/AuthenticationComponent';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import Header from './header';
import Navigation from './navigation';
import Styles from './styles.css';

class Dashboard extends AuthenticationComponent {

    render() {

        return <div className={Styles.container}>
        
            <div className="nav_bar_wrapper">
                
                <Navigation {...this.props} />

            </div>

            <div className="main_content_wrapper">

                <Header {...this.props} />

                <div className="row">

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 main_content">

                        {this.props.children}

                    </div>

                </div>
                
             </div>
        </div>
    }
}

const storeState = (state, ownProps) => {
    return {
        'data': Map(state.home.dashboard)
    }
}

const mapDispatchToProps = (dispatch, ownState) => {

    return {
        dispatch
    }
}

export default connect(
    storeState,
    mapDispatchToProps
)(Dashboard);
