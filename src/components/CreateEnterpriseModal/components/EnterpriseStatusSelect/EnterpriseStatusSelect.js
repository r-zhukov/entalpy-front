import React from "react";
import PropTypes from 'prop-types';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";


function EnterpriseStatusSelect({allEnterpriseStatus, enterpriseStatus, enterpriseStatusChange}) {
    let classes = {
        formControl: {
            minWidth: "120px",
            width: '120px',
            margin: '20px',
        },
    };
    return <>
        <FormControl variant="outlined" className={classes.formControl} >
            <InputLabel>Статус</InputLabel>
            <Select value={enterpriseStatus} onChange={enterpriseStatusChange} label="Статус" name="status">
                <MenuItem value="">
                    <em>Не выбрано</em>
                </MenuItem>
                {allEnterpriseStatus.map((status) => {
                        const {_id, title} = status;
                        return <MenuItem key={_id} value={_id}>{title}</MenuItem>;
                    }
                )}
            </Select>
        </FormControl>
    </>;
}

EnterpriseStatusSelect.defaultProps = {
    enterpriseStatusChange: () => {
    },
};

EnterpriseStatusSelect.propTypes = {
    allEnterpriseStatus: PropTypes.arrayOf(PropTypes.object).isRequired,
    enterpriseStatus: PropTypes.string.isRequired,
    enterpriseStatusChange: PropTypes.func,
};

export default EnterpriseStatusSelect;