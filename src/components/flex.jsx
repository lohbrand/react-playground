/* eslint-disable no-return-assign */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { UIUtils } from "../utils";

export class Flex extends PureComponent {
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  };

  render = () => {
    const { children, style, onLayout } = this.props;
    const flexStyle = UIUtils.flexStyle(this.props);
    return (
      <div
        ref={(component) => (this._root = component)}
        onLayout={onLayout}
        style={[flexStyle, style]}
      >
        {children}
      </div>
    );
  };
}
Flex.propTypes = {
  row: PropTypes.bool,
  column: PropTypes.bool,
  between: PropTypes.bool,
  around: PropTypes.bool,
  middle: PropTypes.bool,
  center: PropTypes.bool,
  wrap: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  selfTop: PropTypes.bool,
  selfMiddle: PropTypes.bool,
  selfBottom: PropTypes.bool,
  flex: PropTypes.number
};

Flex.defaultProps = {
  row: false,
  column: false,
  between: false,
  around: false,
  middle: false,
  center: false,
  wrap: false,
  left: false,
  right: false,
  top: false,
  bottom: false,
  selfTop: false,
  selfMiddle: false,
  selfBottom: false,
  flex: null
};
