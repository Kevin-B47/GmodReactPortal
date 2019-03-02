import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import UserProfile from '../userprofile/userProfile';
class NavBar extends PureComponent {
	state = {};
	render() {
		return (
			<AppBar classes={{ colorPrimary: 'appBar' }}>
				<div className="navLogo">
					<img src="https://titsrp.com/images/funky/logo.png" alt="logo" />
				</div>
				<UserProfile />
			</AppBar>
		);
	}
}

export default NavBar;
