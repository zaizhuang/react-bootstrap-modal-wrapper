import React from 'react';
import PropTypes from 'prop-types';

export default (Component) => {
    return class ModalWrapper extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                isOpen: false
            };
        }

        close (evt) {
            if (evt)
                evt.preventDefault();

            this.setState({
                isOpen: false
            });
        }

        open (evt) {
            if (evt)
                evt.preventDefault();

            this.setState({
                isOpen: true
            });
        }

        render () {
            return (
                <Component
                    {...this.props}
                    modalProps={{
                        isOpen: this.state.isOpen,
                        close: this.close.bind(this),
                        open: this.open.bind(this)
                    }}
                />
            );
        }
    };
};

export const propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    open: PropTypes.func.isRequired
};
