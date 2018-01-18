import React from "react";

class Checkbox extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isChecked: props.value || false
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.checked;
    this.setState({isChecked: value});
  }

  render() {
    const {isReadonly = false, property = {}} = this.props;
    const {isChecked} = this.state;
    return (
      <label>
        <input type="checkbox" checked={isChecked} onChange={this.handleChange} disabled={isReadonly} />
        {property.ShouldDisplayLabel && property.DisplayName}
      </label>
    );
  };
};

export default Checkbox;