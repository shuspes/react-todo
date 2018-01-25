import React from "react";
import PropTypes from "prop-types";
import { Form, TextArea } from 'semantic-ui-react'

class Textarea extends React.Component {
  handleChange = (ev, data) => {
    if(this.props.onChange) this.props.onChange(data.value);  
  };

  render() {
    const {className = "", isReadonly = false, property = {}, value = ""} = this.props;    
    return isReadonly
      ? value
      : (
        <Form className={className + " css-property"}>
          <TextArea placeholder={property.DisplayName} 
                    value={value} 
                    autoHeight={true}
                    onChange={this.handleChange} />
        </Form>
      )
  };
};

Textarea.propTypes = {
  isReadonly: PropTypes.bool,
  value: PropTypes.string,
  prop: PropTypes.shape({
    DisplayName: PropTypes.string
  }),
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default Textarea;