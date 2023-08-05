import {TextField} from "@mui/material";
import React from "react";

export default function FirstLast(props) {

    return (
        <React.Fragment>
            <TextField
                label="First Name"
                name="firstName"
                onChange={e => props.update(e)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                sx={{mb: 3}}
                fullWidth
                value={props.state.firstName}
                error={props.state.firstNameError != null}
                helperText={props.state.firstNameError}
            />
            <TextField
                name="lastName"
                label="Last Name"
                onChange={props.update}
                required
                variant="outlined"
                color="secondary"
                type="text"
                sx={{mb: 3}}
                fullWidth
                value={props.state.lastName}
                error={props.state.lastNameError != null}
                helperText={props.state.lastNameError}
            />
        </React.Fragment>
    );

}