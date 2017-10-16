import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard';

class App  extends React.Component {

    render() { 

         if(!this.props.user.get("UserAuthenticated")) {

            return <Login />
        }

        return <Dashboard />
    }
}

const storeState = (state, ownProps) => {
    return {
        'user': Map(state.auth.user)
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
)(App);   
