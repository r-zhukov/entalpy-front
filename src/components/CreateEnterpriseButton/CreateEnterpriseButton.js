import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        position: "absolute",
        right: 50,
        bottom: 50,
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

function CreateEnterpriseButton({onCreateEnterpriseButtonClick}) {
    const classes = useStyles();

    return (<Fab
        color="secondary"
        aria-label="add"
        className={classes.margin}
        onClick={onCreateEnterpriseButtonClick}
    >
        <AddIcon/>
    </Fab>);
}

export default CreateEnterpriseButton;

