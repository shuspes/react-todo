import React from "react";
import PropTypes from "prop-types";
import { Button as SemanticButton } from 'semantic-ui-react';

class Button extends React.Component {
  render() {
    const {className = "", property = {}, onChange, isReadonly = false} = this.props;
    return <SemanticButton color="red" 
                  disabled={isReadonly} 
                  className={className} 
                  onClick={onChange}>
                    {property.DisplayName}
            </SemanticButton>
  }
};

Button.propTypes = {
  isReadonly: PropTypes.bool,
  onChange: PropTypes.func,
  property: PropTypes.object,
  className: PropTypes.string
};

export default Button;