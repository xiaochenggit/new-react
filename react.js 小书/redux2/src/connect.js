import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const connect = (mapStateToProps, mapDispatchToProps) => (WapperComponent) => {

	class Connect extends Component {

		static contextTypes = {
			store: PropTypes.object
		}

		constructor() {
			super();
			this.state = {
				allProps: {}
			}
		}

		componentWillMount() {
			const { store } = this.context;
			this._updateProps();
			store.subscribe( () => this._updateProps() );
		}

		_updateProps() {
			const { store } = this.context;
			let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {};
			let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispath, this.props) : {};
			this.setState({
				allProps: {
					...stateProps,
					...dispatchProps,
					...this.props
				}
			})
		}

		render() {
			return <WapperComponent { ...this.state.allProps }/>
		}
	}

	return Connect;
} 