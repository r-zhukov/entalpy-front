import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 170,

    },
    form: {
        display: "flex",
        justifyContent: "space-between",
        width: 600, // Fix IE 11 issue.
        minWidth: ""


    },
    submit: {
        margin: "0, 5, 0, 5",
        width: 120,

    },
}));

export default function FilterPanel() {
    const classes = useStyles();

    const [status, setStatus] = React.useState("");
    const [whoAdded, setAdded] = React.useState("");
    const [filtered, setFiltered] = React.useState([]);


    const statusHandleChange = (event) => {
        setStatus(event.target.value);
    };
    const whoAddedHandleChange = (event) => {
        setAdded(event.target.value);
    };

    const filteredButtonClick = () => {
        let filteredArray = [];
        filteredArray.push({"status": status});
        filteredArray.push({"whoAdded": whoAdded});
        setFiltered(filteredArray);
    };

    const clearButtonClick = () => {
        setFiltered([]);
        setAdded("");
        setStatus("");
    };

    const clearButtonDisabled = filtered.length === 0;
    const filteredButtonDisabled = !(status || whoAdded);


    return (

        <form className={classes.form} noValidate>
            <FormControl variant="standard" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Статус</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={status}
                    onChange={statusHandleChange}
                    label="Статус"

                >
                    <MenuItem value="">
                        <em>Не выбрано</em>
                    </MenuItem>
                    <MenuItem value={10}>В работе</MenuItem>
                    <MenuItem value={20}>Отказник</MenuItem>
                    <MenuItem value={30}>Ожидание тендера</MenuItem>
                    <MenuItem value={50}>Договор</MenuItem>
                    <MenuItem value={60}>Дозвон</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant='standard' className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Кто ведет</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={whoAdded}
                    onChange={whoAddedHandleChange}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>Не выбрано</em>
                    </MenuItem>
                    <MenuItem value={10}>Барков</MenuItem>
                    <MenuItem value={20}>Шестаков</MenuItem>

                </Select>
            </FormControl>
            <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={filteredButtonClick}
                disabled={filteredButtonDisabled}
            >
                Фильтровать
            </Button>
            <Button
                type="button"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={clearButtonClick}
                disabled={clearButtonDisabled}
            >
                Сбросить
            </Button>
        </form>
    );
}