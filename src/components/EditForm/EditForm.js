import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Form } from "../Form";

export class EditForm extends React.Component {
  static defaultProps = {
    buttonName: "Edit"
  }

  render() {
    const { properties, buttonName, task = {}, editTask } = this.props;
    return (
      <Form shouldDisplayBorder={false}
        itemValues={task}
        isDisabled={task.IsComplete}
        properties={properties}
        buttonName={buttonName}
        handleSubmit={editTask} />
    );
  };
};

EditForm.propTypes = {
  properties: PropTypes.array,
  buttonName: PropTypes.string,
  task: PropTypes.object,
  editTask: PropTypes.func
};

const mapStateToProps = state => {
  const {
    startupData: {
      formProperties = []
    } = {}
  } = state || {};

  return { properties: formProperties };
};

export default connect(mapStateToProps, undefined)(EditForm);