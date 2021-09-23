import React from "react";
import { Box, Grid, Hidden, Link } from "@material-ui/core";


import "./footer.css";

export const Footer = () => {

    return (
        <footer className="footer">
            <Hidden smDown>
                <Grid container direction="row" justify="center" alignItems="center">
                    
                        {`Made with ♡ by Parth Patel`}

                </Grid>
            </Hidden>
        </footer >
    );
}

