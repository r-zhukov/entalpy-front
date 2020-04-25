import React from "react";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import EnterpriseList from "../../components/EnterpriseList";
import SearchInput from "../../components/SearchInput/SearchInput";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import CreateEnterpriseModal from "../../components/CreateEnterpriseModal/CreateEnterpriseModal";
import CreateEnterpriseButton from "../../components/CreateEnterpriseButton/CreateEnterpriseButton";
import {getAllEnterprisesAction} from "../../redux/actions/actionsCreators";


class EnterprisePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClickOpen() {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {open} = this.state;
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
                    <EnterpriseList
                        enterprises={enterprises}
                    />
                </Grid>
                <CreateEnterpriseModal
                    open={open}
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

});

const mapDispatchToProps = (dispatch) => ({
    getAllEnterprise: () => dispatch(getAllEnterprisesAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(EnterprisePage);