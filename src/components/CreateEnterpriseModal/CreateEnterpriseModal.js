import React from 'react';
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {Grid} from "@material-ui/core";
import {createEnterpriseAction, getAllEnterpriseStatusAction} from "../../redux/actions/actionsCreators";
import EnterpriseStatusSelect from "./components/EnterpriseStatusSelect/EnterpriseStatusSelect";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class CreateEnterpriseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                role: "User",
                enterprises: [],
                contracts: [],
                possibleWorks: [],
                calls: [],
                _id: "5ea2da0bba04ff12507cf85a",
                email: "r.o.zhukov@ukr.net",
                phone: "+380665597170",
                firstName: "Роман",
                lastName: "Жуков",
                codeName: "notMarked",
                created_at: "2020-04-24T12:22:35.859Z",
                updatedAt: "2020-04-24T12:22:35.859Z",
            },
            title: "",
            corporation: "",
            industry: "",
            enterpriseStatus: "",
        };
        this.titleHandleChange = this.titleHandleChange.bind(this);
        this.corporationHandleChange = this.corporationHandleChange.bind(this);
        this.industrialHandleChange = this.industrialHandleChange.bind(this);
        this.enterpriseStatusChange = this.enterpriseStatusChange.bind(this);
        this.createBodyEnterprise = this.createBodyEnterprise.bind(this);
    }

    titleHandleChange(event) {
        this.setState({title: event.target.value});
    };

    corporationHandleChange(event) {
        this.setState({corporation: event.target.value});
    };

    industrialHandleChange(event) {
        this.setState({industry: event.target.value});
    };

    enterpriseStatusChange(event) {
        this.setState({enterpriseStatus: event.target.value});
    };

    createBodyEnterprise = () => {
        const {title, corporation, industry, enterpriseStatus} = this.state;
        const body = {
            "title": title,
            "corporation": corporation,
            "industry": industry,
            "status": enterpriseStatus,
            "whoAdded": this.state.user._id
        };
        this.props.createEnterprise(body);
        this.setState({title: "", status: "", corporation: "", industry: ""});
        this.props.handleClose();

    };

    render() {

        let classes = {
            submit: {
                margin: "0, 20, 0, 20",
                width: "120px",

            },
            formControl: {

                minWidth: "120px",
                width: '120px',
                margin: '10px',
            },
            selectEmpty: {
                marginTop: 5,
            },
        };
        const {allEnterpriseStatus} = this.props;
        const {title, corporation, industry, enterpriseStatus} = this.state;
        const {titleHandleChange, corporationHandleChange, industrialHandleChange, enterpriseStatusChange, createBodyEnterprise} = this;


        return (
            <div>
                <Dialog
                    open={this.props.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.props.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Добавить новое предприятие:"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Для создания нового предприятия заполните поля.
                        </DialogContentText>
                        <Grid container direction="column" style={{padding: "10px"}}>
                            <Grid container>
                                <TextField
                                    id="standard-full-width"
                                    label="Название предприятия"
                                    style={{margin: 8}}
                                    placeholder="Введите название предприятия"
                                    helperText="Например: Энтальпия плюс, ЧП"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    name="title"
                                    value={title}
                                    onChange={titleHandleChange}
                                />

                            </Grid>
                            <Grid container direction="column">
                                <FormControl
                                    variant="outlined"
                                    className={classes.formControl}
                                    style={{margin: "10px"}}
                                >
                                    <InputLabel id="demo-simple-select-outlined-label">Промышленная группа</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={corporation}
                                        onChange={corporationHandleChange}
                                        label="Промышленная группа"
                                        name="corporation"
                                    >
                                        <MenuItem value="">
                                            <em>Не выбрано</em>
                                        </MenuItem>
                                        <MenuItem value="Метинвест">Метинвест</MenuItem>
                                        <MenuItem value="Интерпайип">Интерпайип</MenuItem>
                                        <MenuItem value="Ferrexpo">Ferrexpo</MenuItem>
                                        <MenuItem value="ДТЭK">ДТЭK</MenuItem>
                                        <MenuItem value="HARVEAST">HARVEAST</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl variant="outlined" className={classes.formControl}
                                             style={{margin: "10px"}}>
                                    <InputLabel id="demo-simple-select-outlined-label">Отрасль
                                        промышленности</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={industry}
                                        onChange={industrialHandleChange}
                                        label="Отрасль промышленности"
                                        name="industry"
                                    >
                                        <MenuItem value="">
                                            <em>Не выбрано</em>
                                        </MenuItem>
                                        <MenuItem value="Металлургия">Металлургия</MenuItem>
                                        <MenuItem value="Добывающая">Добывающая</MenuItem>
                                        <MenuItem value="Химфарм">Химфарм</MenuItem>
                                        <MenuItem value="Пищевая">Пищевая</MenuItem>
                                        <MenuItem value="Спиртовики">Спиртовики</MenuItem>
                                    </Select>
                                </FormControl>
                                <EnterpriseStatusSelect
                                    enterpriseStatusChange={enterpriseStatusChange}
                                    enterpriseStatus={enterpriseStatus}
                                    allEnterpriseStatus={allEnterpriseStatus}
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Grid container wrap="nowrap" style={{padding: "10px"}}>
                            <Button
                                onClick={this.props.handleClose}
                                type="button"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                                style={{padding: "10px"}}
                            >
                                Отмена
                            </Button>
                            <Button
                                onClick={createBodyEnterprise}
                                color="primary"
                                type="submit"
                                fullWidth
                                variant="contained"
                            >
                                Добавить
                            </Button>
                        </Grid>

                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    componentDidMount() {
        this.props.getAllEnterpriseStatus();
    }
}

const mapStateToProps = (store) => ({
    allEnterpriseStatus: store.enterpriseStatusReducer.allEnterpriseStatus,
});

const mapDispatchToProps = (dispatch) => ({
    createEnterprise: (body) => dispatch(createEnterpriseAction(body)),
    getAllEnterpriseStatus: () => dispatch(getAllEnterpriseStatusAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEnterpriseModal)