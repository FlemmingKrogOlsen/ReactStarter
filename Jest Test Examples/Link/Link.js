import React from 'react';
import PropTypes from 'prop-types';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Link extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      classType: STATUS.NORMAL,
    };
  }

  onMouseEnter() {
    this.setState({ classType: STATUS.HOVERED });
  }

  onMouseLeave() {
    this.setState({ classType: STATUS.NORMAL });
  }

  render() {
    const { classType } = this.state;
    const { page, children } = this.props;
    return (
      <a
        className={classType}
        href={page || '#'}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {children}
      </a>
    );
  }
}

// Proptypes
Link.propTypes = {
  /** Link url */
  page: PropTypes.string.isRequired,
  /** child nodes */
  children: PropTypes.node.isRequired,
};
