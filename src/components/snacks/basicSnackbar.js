import React, { PureComponent } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
class BasicSnackBar extends PureComponent {
	onClose = () => {
		if (typeof this.props.oClose === 'function') {
			this.props.onClose();
		}
	};

	render() {
		return (
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				open={this.props.isOpen}
				autoHideDuration={6000}
				onClose={this.props.onClose}
				ContentProps={{
					'aria-describedby': 'message-id'
				}}
				message={<span id="message-id">{this.props.msg}</span>}
			/>
		);
	}
}

export default BasicSnackBar;
