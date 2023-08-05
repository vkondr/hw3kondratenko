import React from "react";
import {TextField} from "@mui/material";


export default function EmailPassword(props) {
return (
    <React.Fragment>
        <TextField
            name="email"
            label="Email"
            onChange={props.update}
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{mb: 3}}
            fullWidth
            value={props.state.email}
            error={props.state.emailError != null}
            helperText={props.state.emailError}
        />
        <TextField
            name="password"
            label="Password"
            onChange={props.update}
            required
            variant="outlined"
            color="secondary"
            type="password"
            value={props.state.password}
            error={props.state.passwordError != null}
            helperText={props.state.passwordError}
            fullWidth
            sx={{mb: 3}}
        />
    </React.Fragment>
);
}