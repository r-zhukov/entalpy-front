import React from "react";
import PropTypes from 'prop-types';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

function CustomSelect({selectArray, value, onChange, name, label, className}) {

    return <>
        <FormControl variant="outlined" fullWidth size='small'>
            <InputLabel>{label}</InputLabel>
            <Select value={value} onChange={onChange} label={label} name={name} className={className}>
                <MenuItem value="">
                    <em>Не выбрано</em>
                </MenuItem>
                {selectArray.map((select) => {
                        const {_id, title} = select;
                        return <MenuItem key={_id} value={_id}>{title}</MenuItem>;
                    }
                )}
            </Select>
        </FormControl>
    </>;
}

CustomSelect.defaultProps = {
    onChange: () => {},
};

CustomSelect.propTypes = {
    selectArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default CustomSelect;