import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserSignin from './userSignin';
import UserCircle from './userCircle';
import UserName from './userName';
class UserProfile extends PureComponent {
	getProfileAvatar() {
		const { steamInfo } = this.props;
		return !steamInfo || !steamInfo.steam64 ? <UserSignin /> : <UserCircle />;
	}

	render() {
		return (
			<div className="userProfileHolder">
				<UserName />
				{this.getProfileAvatar()}
			</div>
		);
	}
}

const MapStateToProps = (state) => {
	return {
		steamInfo: state.userData.steamInfo
	};
};

export default connect(MapStateToProps)(UserProfile);
