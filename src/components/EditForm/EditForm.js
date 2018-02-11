import React from "react";
import PropTypes from 'prop-types';
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { changeTask, closeForm as closeFormAction } from "../../actions";
import { Form } from "../Form";

export class EditForm extends React.Component {
  static defaultProps = {
    buttonName: "Edit"
  }

  handleEditTask = task => {
    this.props.editTask(task);
    this.props.closeForm();
  }

  render() {
    const { properties, buttonName, task, isOpen, closeForm } = this.props;
    return isOpen && task
      ? (
        <Modal open={isOpen} closeOnDimmerClick={true} onClose={closeForm} closeIcon={true} >
          <Modal.Header>Edit Task</Modal.Header>
          <Form shouldDisplayBorder={false}
            itemValues={task}
            isDisabled={task.IsComplete}
            properties={properties}
            buttonName={buttonName}
            handleSubmit={this.handleEditTask} />
        </Modal>
      )
      : null;
  };
};

EditForm.propTypes = {
  properties: PropTypes.array,
  buttonName: PropTypes.string,
  task: PropTypes.object,
  editTask: PropTypes.func,
  isOpen: PropTypes.bool,
  closeForm: PropTypes.func
};

const mapStateToProps = state => {
  const {
    startupData: {
      formProperties = []
    } = {},
    editTaskForm: {
      isOpen = false,
      taskId = ""
    } = {},
    tasks = []
  } = state || {};

  const task = isOpen ? tasks.find(it => it.Id === taskId) : null;

  return { properties: formProperties, task, isOpen };
};

const mapDispatchToProps = dispatch => ({
  editTask: task => dispatch(changeTask(task.Id, task)),
  closeForm: () => dispatch(closeFormAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);