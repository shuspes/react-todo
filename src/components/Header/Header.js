import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeViewMode, removeUser } from "../../actions";
import { Menu } from 'semantic-ui-react';

export class Header extends React.Component {
  handleModeClick(modeKey) {
    this.props.onModeClick(modeKey);
  }

  render() {
    const { activeMode, modes = [], onLogoutClick, user } = this.props;
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
          <Menu.Item name={user.name} />
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
  onLogoutClick: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = state => {
  const {
    user = {},
    viewMode: {
      activeMode,
      modes = []
    } = {}
  } = state || {};
  return { activeMode, modes, user };
};

const mapDispatchToProps = dispatch => ({
  onModeClick: viewMode => dispatch(changeViewMode(viewMode)),
  onLogoutClick: () => dispatch(removeUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);