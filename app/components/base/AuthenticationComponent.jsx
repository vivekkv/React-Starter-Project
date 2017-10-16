import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class AuthenticationComponent extends React.Component {

    componentWillMount() {

        debugger
        const { router } = this.context;

        if (!this.props.data.get("UserAuthenticated")) {

            router.push('/');
        }
    }

    componentDidMount() {
        alert()
    }
}

const storeState = (state, ownProps) => {
    return {
        'data': Map(state.auth.user)
    }
}

const mapDispatchToProps = (dispatch, ownState) => {

    return {
        dispatch
    }
}

AuthenticationComponent.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(
    storeState,
    mapDispatchToProps
)(AuthenticationComponent);