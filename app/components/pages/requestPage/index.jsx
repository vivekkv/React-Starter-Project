import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import FormContainer from '../../presentational/formContainer';
import Row from '../../presentational/row';
import Column from '../../presentational/column';
import Input from '../../presentational/input';
import FormButtons from '../../presentational/formButtons';

class RequestPage extends React.Component {

    render() {

        return <div>

                

        </div>
    }
}

const storeState = (state, ownProps) => {
    return {
        'data': Map(state.masterEntries.requestPage)
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
)(RequestPage);
