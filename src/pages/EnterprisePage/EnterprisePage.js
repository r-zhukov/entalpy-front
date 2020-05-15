import React from "react";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import EnterpriseList from "../../components/EnterpriseList";
import SearchInput from "../../components/SearchInput/SearchInput";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import CreateEnterpriseModal from "../../components/CreateEnterpriseModal/CreateEnterpriseModal";
import CreateEnterpriseButton from "../../components/CreateEnterpriseButton/CreateEnterpriseButton";
import {getAllEnterprisesAction, isModalOpenAction} from "../../redux/actions/actionsCreators";
import {Spin} from "antd";


class EnterprisePage extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClickOpen.bind(this);
    }

    handleClickOpen() {
        this.props.modalSwitch();
    };

    handleClose() {
        this.props.modalSwitch();
    };

    render() {
        const {enterprises} = this.props;
        return (
            <Grid
                container
                style={{margin: "30px", minWidth: "900px", maxWidth: "1600px"}}
                justify="center"
                direction="column"
            >
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    wrap="nowrap"
                    style={{marginBottom: "10px"}}
                >
                    <SearchInput/>
                    <FilterPanel/>
                </Grid>
                <Grid
                    container
                >
                    <EnterpriseList enterprises={enterprises}/>

                </Grid>
                <CreateEnterpriseModal
                    handleClose={this.handleClose}
                />
                <CreateEnterpriseButton
                    onCreateEnterpriseButtonClick={this.handleClickOpen}
                />

            </Grid>
        );
    }

    componentDidMount() {
        this.props.getAllEnterprise()
    }
}

const mapStateToProps = (store) => ({
    enterprises: store.enterpriseReducer.enterprises,
    isModalOpen: store.enterpriseReducer.isModalOpen,
    user: store.userReducer.userInfo,

});

const mapDispatchToProps = (dispatch) => ({
    getAllEnterprise: () => dispatch(getAllEnterprisesAction()),
    modalSwitch: () => dispatch(isModalOpenAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(EnterprisePage);