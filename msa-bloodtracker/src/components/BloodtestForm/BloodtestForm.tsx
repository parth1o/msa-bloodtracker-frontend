import React, { useState } from 'react';
import { Button,TextField, Typography, Grid, Container } from '@material-ui/core';
import { makeStyles, Theme } from "@material-ui/core/styles";

import { ADD_BLOODTEST} from '../../api/mutations';
import { AddBloodtest } from '../../api/__generated__/AddBloodtest';
import { useMutation } from '@apollo/client';

import './bloodtest-form.css';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color:'floralwhite',
      "& .MuiFilledInput-root": {
        color: "floralwhite",
      },
      '& label.Mui-focused': {
        color: 'floralwhite',
      },
      '& .MuiInputLabel-formControl':{
          color:'floralwhite',
        }
    },
    header: {
        fontFamily: 'Ubuntu',
        fontSize: '2em',
        color: 'rgb(248, 245, 218)',
        textAlign:'center',
        marginBottom:'4vh',
        marginTop: '4vh',
    },
  }));
export interface BloodtestFormProps {

}

export const BloodtestForm: React.FC<BloodtestFormProps> = () => {
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
        if (hb != null) {
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
            alert("You have to login to add bloodtests")
        }

    };

    return (
        <Container className="form_container">
            <Typography className={classes.header} >Add Bloodtest</Typography>
            {
                submit ?
                alert("Bloodtest successfully submited :)") : null
            }
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12}>
                    <TextField id="standard-basic" type="date"  fullWidth
                        variant="filled"
                        InputProps={{ disableUnderline: true }}
                        value={date}
                        error={hasFocus && date === ""}
                        className={hasFocus && date === ""?"":classes.root}
                        
                        onChange={e => setDate(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="test" label="Haemaglobin" fullWidth
                        variant="filled"
                        color="primary"
                        error={hasFocus && hb === null}
                        value={hb}
                        InputProps={{ disableUnderline: true }}
                        className={hasFocus && hb === null?"":classes.root}
                        
                        onChange={e => setHb((Number(e.target.value)))} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" label="Platelets" fullWidth
                        error={hasFocus && platelets === null}
                        value={platelets}
                        InputProps={{ disableUnderline: true }}
                        className={hasFocus && platelets === null?"":classes.root}
                        variant="filled"
                        onChange={e => setPlatelets((Number(e.target.value)))} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" type="number" label="White Blood Cells" fullWidth
                        error={hasFocus && wBC === null}
                        value={wBC}
                        InputProps={{ disableUnderline: true }}
                        className={hasFocus && wBC === null?"":classes.root}
                        variant="filled"
                        onChange={e => setWbc((Number(e.target.value)))} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" type="number" label="Neutraphils" fullWidth
                        error={hasFocus && neuts === null}
                        value={neuts}
                        className={hasFocus && neuts === null?"":classes.root}
                        variant="filled"
                        InputProps={{ disableUnderline: true }}
                        onChange={e => setNeuts((Number(e.target.value)))} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" type="number" label="Magnesium" fullWidth
                        error={hasFocus && mg === null}
                        value={mg}
                        InputProps={{ disableUnderline: true }}
                        className={hasFocus && mg === null?"":classes.root}
                        variant="filled"
                        onChange={e => setMg((Number(e.target.value)))} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="standard-basic" label="Creatinine" fullWidth
                        error={hasFocus && creatinine === null}
                        value={creatinine}
                        className={hasFocus && creatinine === null?"":classes.root}
                        variant="filled"
                        InputProps={{ disableUnderline: true }}
                        onChange={e => setCreat((Number(e.target.value)))} />
                </Grid>
                
            </Grid>
            <Grid container justify="center">
                <Button className="form_button" onClick={handleSubmit}>Add</Button>
            </Grid>
        </Container>
    );
};