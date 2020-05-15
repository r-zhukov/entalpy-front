import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import blue from "@material-ui/core/colors/blue";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,

    },
    header: {
        background: blue700,
    },
}));

const blue700 = blue[700];

export default function Header({userInfo, logout}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                className={classes.header}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        align="left"

                    >
                        {userInfo.firstName + " " + userInfo.lastName}, рабочая книга
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={logout}
                    >
                        Выйти
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}