import React from "react";

class Date extends React.Component {
  render() {
    const {value = "", isReadonly = false} = this.props;    
    return isReadonly
    ? value
    : (
      <input type="date" value={value} onChange={() => {}} />
    );
  };
};

export default Date;