import Button from '@material-ui/core/Button';
import React, { PureComponent } from 'react';
import steamSignIn from '../../resources/images/steam_signin.png';
class UserSignin extends PureComponent {
	onClick = () => {
		window.location = 'http://localhost:8080/auth/login';
	};

	render() {
		return (
			<Button onClick={this.onClick}>
				<img className="userAvatarSteam" alt="Steam Signin" width={180} src={steamSignIn} />
			</Button>
		);
	}
}

export default UserSignin;
