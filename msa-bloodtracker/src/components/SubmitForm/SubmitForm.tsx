import React, { useState } from 'react';
import { TextField, Typography, Grid, Container } from '@material-ui/core';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from '../Button/Button';
import { ADD_BLOODTEST} from '../../api/mutations';
import { AddBloodtest } from '../../api/__generated__/AddBloodtest';
import { useMutation } from '@apollo/client';

import './submit-form.css';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      "& .MuiFormHelperText-root": {
        color: "white",
      }
    }
  }));
export interface SubmitFormProps {

}

export const SubmitForm: React.FC<SubmitFormProps> = () => {
    const classes = useStyles();
    const [date, setDate] = useState<string>("");
    const [hb, setHb] = useState<number>();
    const [platelets, setPlatelets] = useState<number>();
    const [wBC, setWbc] = useState<number>();
    const [neuts, setNeuts] = useState<number>();
    const [creatinine, setCreat] = useState<number>();
    const [mg, setMg] = useState<number>();


    const [submit, setSubmit] = useState(false);

    const [hasFocus, setHasFocus] = useState(false);

    const [addBloodtest] = useMutation<AddBloodtest>(ADD_BLOODTEST)

    const handleSubmit = async() => {
        if (hb !== null) {
            try {
                await addBloodtest({variables: {
                    date: date,
                    hb: hb,
                    platelets: platelets,
                    wBC: wBC,
                    mg: mg,
                    creatinine: creatinine,
                    neuts: neuts,
                }})
                setSubmit(true)
            } catch(e) {
                console.log(e)
            }
        }else{
            setHasFocus(true);
        }

    };

    return (
        <Container className="form_container">
            <Typography variant="h4" >Submit your bloodtest results here!</Typography>
            {
                submit ?
                    <Grid>
                        Congratulations! Your bloodtest results has been successfully submitted.
                    </Grid> : null
            }
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" type="date"  fullWidth
                        error={hasFocus && date === ""}
                        value={date}
                        className={hasFocus && date === ""?"":classes.root}
                        helperText="Invalid bloodtest date"
                        onChange={e => setDate(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" label="Haemaglobin" fullWidth
                        error={hasFocus && hb === null}
                        value={hb}
                        className={hasFocus && hb === null?"":classes.root}
                        helperText="Invalid bloodtest hb"
                        onChange={e => setHb((Number(e.target.value)))} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" label="Platelets" fullWidth
                        error={hasFocus && platelets === null}
                        value={platelets}
                        className={hasFocus && platelets === null?"":classes.root}
                        helperText="Invalid bloodtest hb"
                        onChange={e => setPlatelets((Number(e.target.value)))} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" type="number" label="White Blood Cells" fullWidth
                        error={hasFocus && wBC === null}
                        value={wBC}
                        className={hasFocus && wBC === null?"":classes.root}
                        helperText="Invalid bloodtest wBC"
                        onChange={e => setWbc((Number(e.target.value)))} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" type="number" label="Neutraphils" fullWidth
                        error={hasFocus && neuts === null}
                        value={neuts}
                        className={hasFocus && neuts === null?"":classes.root}
                        helperText="Invalid bloodtest neuts"
                        onChange={e => setNeuts((Number(e.target.value)))} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" type="number" label="Magnesium" fullWidth
                        error={hasFocus && mg === null}
                        value={mg}
                        className={hasFocus && mg === null?"":classes.root}
                        helperText="Invalid bloodtest mg"
                        onChange={e => setMg((Number(e.target.value)))} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" label="Creatinine" fullWidth
                        error={hasFocus && creatinine === null}
                        value={creatinine}
                        className={hasFocus && creatinine === null?"":classes.root}
                        helperText="Invalid bloodtest creat"
                        onChange={e => setCreat((Number(e.target.value)))} />
                </Grid>
                
            </Grid>
            <Button className="form_button" backgroundColor="limegreen" label="Submit" onClick={handleSubmit} primary size="medium" />
        </Container>
    );
};