import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from "moment";
import grey from '@material-ui/core/colors/grey';

const grey800 = grey[700];
const grey200 = grey[300];

const useStyles = makeStyles({
    root: {
        width: '100%',
        minWidth: 900,
        //maxWidth: 1200,
        display: "flex",
        justifyContent: "center",
        position: "relative"
    },
    container: {
        maxHeight: 700,
    },
    headerCell: {
        color: grey800,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        background: grey200

    },
    bodyCell: {
        color: grey800,
        fontFamily: 'Montserrat',
        fontWeight: '500',
    },
    BodyRow: {
        '&:hover': {
            border: "solid 1px rgba(0, 0, 0, 1)",
            transition: "500ms",
            cursor: "pointer"
        },
    }

});

function EnterpriseList({enterprises}) {

    const headerRow = ["Название предприятия", "Принадлежность", "Отрасль промышленности", "Статус", "Принадлежность", "Изменен"];
    const classes = useStyles();

    function TableBodyRowCreate(title, corporation, industry, status, whoAdded, updatedAt) {
        updatedAt = moment(updatedAt).format('DD.MM.YYYY');
        return [title, corporation, industry, status, whoAdded, updatedAt];
    }


    return (
        <>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {headerRow.map((cell, index) => {
                                    return (<TableCell className={classes.headerCell} key={index}>
                                        {cell}
                                    </TableCell>);
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {enterprises.map((enterprise) => {
                                const {title, corporation, industry, status, _id, whoAdded, updatedAt} = enterprise;
                                const {firstName, lastName} = whoAdded;
                                const fullName = firstName + " " + lastName;
                                return (
                                    <TableRow hover role="checkbox" key={_id} className={classes.BodyRow}>
                                        {TableBodyRowCreate(title, corporation.title, industry.title, status.title, fullName, updatedAt).map((cell, index) => {
                                            return (<TableCell className={classes.bodyCell} key={index}>
                                                {cell}
                                            </TableCell>);
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </>
    );
}

export default EnterpriseList;