import React from "react";
import Header from "../../components/Header/Header";
import EnterprisePage from "../EnterprisePage/EnterprisePage";
import {Grid} from "@material-ui/core";
import {connect} from "react-redux";
import {getCurrentUserAction} from '../../redux/actions/actionsCreators'

class HomePage extends React.Component {

    logout(e) {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    }

    render() {
        return (<Grid
            container
            justify="center"
        >
            <Header userInfo={this.props.userInfo} logout={this.logout}/>
            <EnterprisePage/>
        </Grid>);
    }

    componentDidMount() {
        const currentUser = JSON.parse(localStorage.getItem('userInfo'));
        this.props.getCurrentUser(currentUser);
    }
}

const mapStateToProps = (store) => ({
    userInfo: store.userReducer.userInfo,
    isLogin: store.userReducer.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
    getCurrentUser: (data) => dispatch(getCurrentUserAction(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);