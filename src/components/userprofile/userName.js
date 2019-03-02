import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
class UserName extends PureComponent {
	getUserName() {
		const { steamInfo } = this.props;
		if (!steamInfo || !steamInfo.name) {
			return null;
		}

		return <div className="userName">{steamInfo.name}</div>;
	}

	render() {
		return this.getUserName();
	}
}

const MapStateToProps = (state) => {
	const { steamInfo } = state.userData;
	return {
		steamInfo: steamInfo
	};
};

export default connect(MapStateToProps)(UserName);
