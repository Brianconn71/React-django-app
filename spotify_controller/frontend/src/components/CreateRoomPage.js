import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";

export default class CreateRoomPage extends Component {
    defaultVotes = 2;
    constructor(props){
        super(props);
    }

    render (){
        return( 
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component='h4' variant='h4'>
                    Create
                </Typography>
                <Typography component='h4' variant='h4'>
                    <FormControl component="fieldset">
                        <FormHelperText>
                            <div align="center">ewsfjkhdlasfirgh</div>
                        </FormHelperText>
                    </FormControl>
                    <RadioGroup row defaultValue="true">
                        <FormControlLabel value="true" control={<Radio></Radio color="primary" />} label="Play/Pause" labelPlacement="bottom" />
                        <FormControlLabel value="false" control={<Radio></Radio color="secondary" />} label="No control" labelPlacement="bottom" />
                    </RadioGroup>
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                
            </Grid>
        </Grid>
        );
    }
}