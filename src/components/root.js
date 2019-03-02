import NavBar from './bars/nav';
import React, { PureComponent } from 'react';
import { onUserFetch } from '../actions/userActions';
import { connect } from 'react-redux';
import BasicSnackBar from './snacks/basicSnackbar';
import Footer from './bars/footer';
import MainContent from './maincontent';

class Root extends PureComponent {
	state = {};

	componentWillMount() {
		this.props.onUserFetch();
	}

	getSnackBar() {
		const { snackMsg } = this.props;

		if (snackMsg) {
			return <BasicSnackBar isOpen={true} msg={snackMsg} />;
		}
	}

	render() {
		return (
			<div className="main-wrapper">
				<NavBar />
				<MainContent />
				<Footer />
				{this.getSnackBar()}
			</div>
		);
	}
}

const MapStateToProps = (state) => {
	return {
		snackMsg: state.page.snackMsg
	};
};

export default connect(MapStateToProps, { onUserFetch })(Root);
