import React from 'react';
import {connect} from 'react-redux'
//import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from "@material-ui/core/TextField";
import {
    createEnterpriseAction,
    getAllEnterpriseStatusAction,
    getAllIndustryAction,
    getAllCorporationAction
} from "../../redux/actions/actionsCreators";
import CustomSelect from "./components/CustomSelect/CustomSelect";
import style from './CreateEnterpriseModal.module.css'
import {Spin} from 'antd';
import {Button} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class CreateEnterpriseModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            corporation: "",
            industry: "",
            enterpriseStatus: "",
            egrpoy: ""
        };
        this.textChange = this.textChange.bind(this);
        this.createBodyEnterprise = this.createBodyEnterprise.bind(this);
    }

    textChange(event) {
        const {name} = event.target;
        this.setState({[name]: event.target.value});
    };

    createBodyEnterprise = () => {
        const {title, corporation, industry, enterpriseStatus} = this.state;
        const body = {
            "title": title,
            "corporation": corporation,
            "industry": industry,
            "status": enterpriseStatus,
            "whoAdded": this.props.userInfo._id
        };
        this.props.createEnterprise(body);
        this.setState({title: "", enterpriseStatus: "", corporation: "", industry: ""});
    };

    render() {
        const {allEnterpriseStatus, allIndustry, allCorporation, handleClose, isFetching, isModalOpen} = this.props;
        const {title, corporation, industry, enterpriseStatus, egrpoy} = this.state;
        const {textChange, createBodyEnterprise} = this;

        return (
            <Dialog open={isModalOpen} TransitionComponent={Transition} keepMounted onClose={handleClose}>
                <DialogTitle>{"Добавить новое предприятие:"}</DialogTitle>
                <Spin spinning={isFetching}>
                    <div className={style.dialogContent}>
                        <div className={style.selectContainer}>
                            <TextField
                                label="ЕГРПОУ"
                                placeholder="34868910"
                                fullWidth
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                name="egrpoy"
                                value={egrpoy}
                                onChange={textChange}
                            />
                            <Button type="primary" icon={<SearchOutlined/>} size="large" className={style.searchButton}>
                                Искать в ЕГР
                            </Button>
                        </div>
                        <div className={style.selectContainer}>
                            <TextField
                                autoFocus={true}
                                label="Название предприятия"
                                placeholder="Энтальпия плюс, ЧП"
                                fullWidth
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                name="title"
                                value={title}
                                onChange={textChange}
                            />
                        </div>
                        <div className={style.selectContainer}>
                            <TextField
                                autoFocus={true}
                                label="Юридический адрес"
                                placeholder="Страна, Область, город, улица, дом"
                                fullWidth
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                name="title"
                                value={title}
                                onChange={textChange}
                            />
                        </div>
                        <div className={style.selectContainer}>
                            <TextField
                                autoFocus={true}
                                label="Фактический адрес"
                                placeholder="Страна, Область, город, улица, дом"
                                fullWidth
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                name="title"
                                value={title}
                                onChange={textChange}
                            />
                        </div>
                        <div className={style.selectContainer}>
                            <CustomSelect
                                className={style.customSelect}
                                value={corporation}
                                label="Промышленная группа"
                                name="corporation"
                                onChange={textChange}
                                selectArray={allCorporation}

                            />
                        </div>
                        <div className={style.selectContainer}>
                            <CustomSelect
                                value={industry}
                                label="Отрасль промышленности"
                                name="industry"
                                onChange={textChange}
                                selectArray={allIndustry}
                            />
                        </div>
                        <div className={style.selectContainer}>
                            <CustomSelect
                                value={enterpriseStatus}
                                label="Статус предприятия"
                                name="enterpriseStatus"
                                onChange={textChange}
                                selectArray={allEnterpriseStatus}
                            />
                        </div>
                        <div className={style.buttonModalContainer}>
                            <Button
                                onClick={handleClose}
                                size="large"
                                variant="contained"
                                type="default"
                                className={style.buttonModal}
                            >
                                Отмена
                            </Button>
                            <Button
                                onClick={createBodyEnterprise}
                                type="primary"
                                size="large"
                                variant="contained"
                                className={style.buttonModal}
                            >
                                Добавить
                            </Button>
                        </div>
                    </div>

                </Spin>
            </Dialog>
        );
    }

    componentDidMount() {
        this.props.getAllEnterpriseStatus();
        this.props.getAllIndustry();
        this.props.getAllCorporation();

    }
}

const mapStateToProps = (store) => ({
    allEnterpriseStatus: store.enterpriseStatusReducer.allEnterpriseStatus,
    allIndustry: store.industryReducer.allIndustry,
    allCorporation: store.corporationReducer.allCorporation,
    userInfo: store.userReducer.userInfo,
    isFetching: store.enterpriseReducer.isFetching,
    isModalOpen: store.enterpriseReducer.isModalOpen,

});

const mapDispatchToProps = (dispatch) => ({
    createEnterprise: (body) => dispatch(createEnterpriseAction(body)),
    getAllEnterpriseStatus: () => dispatch(getAllEnterpriseStatusAction()),
    getAllIndustry: () => dispatch(getAllIndustryAction()),
    getAllCorporation: () => dispatch(getAllCorporationAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEnterpriseModal)