import { Button, createTheme, Grid, makeStyles, Paper, TextField, ThemeProvider, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { SwlSubmitError } from '../methods/Swal';
import background from '../images/bankImage.jpg'
import { createCard } from '../methods/postData';
const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",
        background: '#eae8e9',
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        opacity: "0.8",
        paddingBottom: "30rem"

    },
    typo: {
        fontFamily: 'Montserrat',
        fontSize: '4rem',
        opacity: "0.65"

    },
    divider: {
        width: "10%",
        height: "0.25rem",
        background: "black",
        opacity: "0.65",
        margin: "1rem"
    },
    customerDiv: {

        marginTop: "4rem"
    },
    text: {
        width: "20rem",
        marginBottom: '1.15rem',
        color: "#161616"
    },
    formDiv: {
        marginTop: "6rem"
    },
    btn: {
        background: '#1d968e',
        color: "#FFF",
        "&:hover": {
            background: "#1d968e"
        },
        width: "20rem",

        marginTop: "2rem"
    },
    helper: {
        marginTop: "0.75rem"
    },
    sidePaper: {
        backgroundImage:`url(${background})`,
        backgroundSize: "50.5rem , 45rem",
        height: "50.5rem",
        width: "45rem",
        padding: "2rem"
    },
    typoNew: {
        fontFamily: 'Overpass',
        fontSize: '2rem',
        color: '#3E3636',
    },
    LoginPaper: {
        padding: "2rem"
    },
    grid: {
        paddingTop: "7rem"
    },
    form: {
        marginTop: "3rem",
        width: "28rem"
    }
}))
export default function Verification(props) {

    const [vCode, setVcode] = useState(undefined);
    const classes = useStyles();
    const theme = createTheme({
        palette: {
            primary: {
                main: '#000',
            },

            secondary: {
                main: '#f44336',
            },
        },
    });
    const [data, setData] = useState(null);

    function handleChange(e) {
        if(e.target.id==='card_number'){
            props.setAccount(e.target.value)
        }
    }
    const handleSubmit =  () => {
        console.log("pi")
        props.handleSubmit();
    }
    return (
        <>
            <Paper className={classes.root} elevation={0}>
            <div>
                <Grid justifyContent='center' container className={classes.grid}>
    
                    <Paper square={true} className={classes.LoginPaper} elevation={0}>

                        <>

                    
                            <Typography align='center' className={classes.typoNew}>
                                your bank details
                            </Typography>
                         
                            <div className={classes.form} align='center' onChange={handleChange}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        id='card_number'
                                        color='primary'
                                        type='text'
                                        label='Card Number'
                                        className={classes.text}
                                        helperText="Your Card Number"
                                    />
                                    <TextField
                                        id='name_on_card'
                                        color='primary'
                                        type='tel'
                                        label='Name On Card'
                                        className={classes.text}
                                        helperText="Your Name On Card"
                                    />
                                    <TextField
                                        id='exp_mm'
                                        color='primary'
                                        type='month'
                                        className={classes.text}
                                        helperText="Expiration MM / YY"
                                    />
                                    <TextField
                                        id='cvv'
                                        color='primary'
                                        type='password'
                                        className={classes.text}
                                        helperText="Card Verification Code On Card"
                                    />
                                    <TextField
                                        id='secret'
                                        color='primary'
                                        type='password'
                                        className={classes.text}
                                        helperText="Provide a secret for security"
                                    />
                                    <TextField
                                        id='confirm_secret'
                                        color='primary'
                                        type='password'
                                        className={classes.text}
                                        helperText="Re-type the secret key"
                                    />
                                    <TextField onChange={(e) => { setVcode(e.target.value) }}
                                        id='vcode'
                                       helperText='Your verification code goes here'
                                      className={classes.text} />
                                </ThemeProvider >
                                <div>
                                    <Button onClick={() => {
                                       
                                            handleSubmit();
                                      
                                    }} className={classes.btn} variant='contained' >Confirm</Button>
                                </div>
                            </div>
                        </>

                    </Paper>

                </Grid>
            </div>
        </Paper>
        </>
    )
}
