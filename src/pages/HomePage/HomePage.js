import React from "react";
import Header from "../../components/Header/Header";
import EnterprisePage from "../EnterprisePage/EnterprisePage";
import {Grid} from "@material-ui/core";

function HomePage() {
    return (<Grid
        container
        justify="center"
    >
        <Header/>
        <EnterprisePage/>
    </Grid>);
}

export default HomePage;