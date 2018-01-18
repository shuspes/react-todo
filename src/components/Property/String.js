import React from "react";

class String extends React.Component {
  render() {
    const {isReadonly = false, property = {}, value = ""} = this.props;
    return isReadonly
      ? value
      : <input placeholder={property.DisplayName} />
  };
};

export default String;