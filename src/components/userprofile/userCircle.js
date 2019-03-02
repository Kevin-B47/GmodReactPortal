import React, { PureComponent } from 'react';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { connect } from 'react-redux';
import steamSignin from '../../resources/images/steam_signin.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { onUserLogout } from '../../actions/userActions';
import { addSnackMsg, removeSnackMsg } from '../../actions/pageActions';

class UserCircle extends PureComponent {
	state = {
		dropDownTarget: undefined
	};

	onClick = (e) => {
		this.setState({ dropDownTarget: e.currentTarget });
	};

	onClose = (e) => {
		this.setState({ dropDownTarget: undefined });
	};

	onLogout = (e) => {
		const { addSnackMsg, removeSnackMsg, onUserLogout } = this.props;

		const didLogout = onUserLogout();

		if (didLogout) {
			addSnackMsg('You have logged out!');
		} else {
			removeSnackMsg('ERROR LOGGING OUT LOL');
		}
		this.setState({ dropDownTarget: undefined });
	};

	getUserAva() {
		const { steamInfo } = this.props;
		if (typeof steamInfo.largeAvatar !== 'undefined') {
			return (
				<Avatar
					src={steamInfo.largeAvatar}
					alt="user avatar"
					className="userAvatar steamAva"
					onClick={this.onClick}
				/>
			);
		}
		return <img className="userAvatarSteam" alt="Steam Signin" src={steamSignin} />;
	}

	getMenu() {
		const { dropDownTarget } = this.state;
		return (
			<Menu id="avatarMenu" open={Boolean(dropDownTarget)} onClose={this.onClose} anchorEl={dropDownTarget}>
				<MenuItem onClick={this.onLogout}>Logout</MenuItem>
			</Menu>
		);
	}

	render() {
		const { dropDownTarget } = this.state;
		return (
			<div className="avatarWrapper" aria-owns={dropDownTarget ? 'avatarMenu' : undefined} aria-haspopup="true">
				{this.getMenu()}
				{this.getUserAva()}
			</div>
		);
	}
}

const MapStateToProps = (state) => {
	const { steamInfo } = state.userData;
	return {
		steamInfo: steamInfo
	};
};

export default connect(MapStateToProps, { onUserLogout, addSnackMsg, removeSnackMsg })(UserCircle);
