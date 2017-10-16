import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import FormContainer from '../../presentational/formContainer';
import Row from '../../presentational/row';
import Column from '../../presentational/column';
import Input from '../../presentational/input';
import FormButtons from '../../presentational/formButtons';
import Form from '../../presentational/form';
import Grid from '../../presentational/grid';
import ActionBuilder from '../../../reduxImplementations/actionBuilder';
import { showValidations, clearValidation } from '../../../utils/validation';
import validate from 'validate.js';

class Website extends React.Component {

    render() {

        return <div>

            <Row>


                <FormContainer title="Website" icon="fa-internet-explorer">

                    <Form onSubmit={this.onWebsiteSubmit.bind(this)}>

                        <Row>

                            <Column label="Category" size="threeColumn" required={true}>

                                <Input name="Category" value={this.props.data.get("Category")} onChange={this.props.onChange} />

                            </Column>

                            <Column label="CN" size="threeColumn" required={true}>

                                <Input name="CN" value={this.props.data.get("CN")} onChange={this.props.onChange} />

                            </Column>

                            <Column label="Website" size="threeColumn" required={true}>

                                <Input name="Website" value={this.props.data.get("Website")} onChange={this.props.onChange} />

                            </Column>

                        </Row>

                        <Row>

                            <FormButtons onResetForm={this.props.onResetForm} />

                        </Row>

                    </Form>

                </FormContainer>

            </Row>

            <Row>

                <Grid showFilter={false} dispatch={this.props.dispatch}
                    editAction={this.onEdit.bind(this)}
                    resultsPerPage={20}
                    primaryKey="Id" enableEdit={true} enableDelete={true}
                    data={this.props.data.get("WebsiteList").toArray()}
                    columns={["Category", "CN", "Website", "Id"]} />

            </Row>

        </div>
    }

    onWebsiteSubmit(e) {

        e.preventDefault(); 

        let validations = validate(this.props.data.toObject(), { 'Category': { 'presence': true }, 'CN': { 'presence': true }, "Website": { 'presence': true } });

        if (!validations) {

            clearValidation();
            this.props.dispatch(ActionBuilder("MASTER_ENTRIES", "WEBSITE_SUBMIT_FORM"));

        } else {

            showValidations("Fix the following errors to continue !", validations);
        }

    }

    onEdit(id) {

        this.props.dispatch(ActionBuilder("MASTER_ENTRIES", "WEBSITE_SUBMIT_EDIT_CLICK",  { id }));
    }
}

const storeState = (state, ownProps) => {
    return {
        'data': Map(state.masterEntries.website)
    }
}

const mapDispatchToProps = (dispatch, ownState) => {

    return {
        dispatch,
        onChange: function(name, value) {
           dispatch(ActionBuilder("MASTER_ENTRIES", "WEBSITE_INPUT_CHANGED",  { name, value }));
        },
        onResetForm: function() {
            dispatch(ActionBuilder("MASTER_ENTRIES", "WEBSITE_CLEAR_FORM"));
        }
    }
}

export default connect(
    storeState,
    mapDispatchToProps
)(Website);
