import { Box, makeStyles, Typography, useTheme, useMediaQuery, Button, Grid, Paper } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme) => ({
    root: {
       
    },
    paper1:{
        backgroundImage:`url(${"https://c0.wallpaperflare.com/preview/822/951/691/pair-of-white-red-and-black-nike-air-jordan-1-shoes-on-floor.jpg"})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"87vh",
        width:"100%"
    },
    box: {

        height: theme.spacing(10),
        background: "#2C394B",

    },
    box1: {
        height: theme.spacing(40),
        background: "inherit",
        justifyContent: 'cente'

    },
    typo: {
        color: "#fff",
        fontFamily:"Laila",
        paddingTop: theme.spacing(1.8)
    },
    title: {
        padding: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(0.01),
        fontFamily: "Abhaya libre",
        fontSize: "3.5rem"
    },
    titleSm: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(0.01),
        fontFamily: "Abhaya libre",
        fontSize: "2.5rem"
    },
    name: {
        fontSize:"60px",
        color:"#1d968e",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:"150px",
        flexDirection:"column",


    },
    decription: {
        color: "#787A91",
        fontSize: "1.25rem",
        fontFamily: "Guwan Batang",
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(5)
    },
    Button: {
        display: "inline-block",
        width: theme.spacing(40),
        background: "red",
        height: theme.spacing(5),
        color: "#fff",
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
            background: "#2C394B",
            transform: "scale3d(1.05,1.05,1)"
        },
    },
}))

function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <>
        <div className={classes.root}>
            <Box className={classes.box}>
                <Typography paragraph={true} align="center" className={classes.typo}>
                    Get a discount of 10% on your first Order!<br />
                </Typography>
            </Box>
        </div>
        <Paper className={classes.paper1}><div className={classes.name}><h1>Welcome to Shoesly</h1>
        <p>Feel Your Every Step</p>
        </div>
        </Paper>
      
        </>
    )
}

export default Header
