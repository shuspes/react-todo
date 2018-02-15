import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeViewMode } from "../../actions";
import { Menu } from 'semantic-ui-react';

export class Header extends React.Component {
  handleModeClick(modeKey) {
    this.props.onModeClick(modeKey);
  }

  render() {
    const { activeMode, modes = [], onLogoutClick } = this.props;
    return (
      <Menu pointing secondary fixed="top" >
        {
          modes.map(
            mode => (
              <Menu.Item key={mode.key}
                name={mode.name}
                active={mode.key === activeMode}
                onClick={this.handleModeClick.bind(this, mode.key)} />
            )
          )
        }
        <Menu.Menu position='right'>
          <Menu.Item name='username' />
          <Menu.Item name='logout' onClick={onLogoutClick} />
        </Menu.Menu>
      </Menu>
    );
  }
};

Header.propTypes = {
  activeMode: PropTypes.string,
  modes: PropTypes.array,
  onModeClick: PropTypes.func,
  onLogoutClick: PropTypes.func
};

const mapStateToProps = state => {
  const {
    viewMode: {
      activeMode,
      modes = []
    } = {}
  } = state || {};
  return { activeMode, modes };
};

const mapDispatchToProps = dispatch => ({
  onModeClick: viewMode => dispatch(changeViewMode(viewMode)),
  onLogoutClick: () => { }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);