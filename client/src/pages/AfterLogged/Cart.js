import { Avatar, Box, Button, Grid, IconButton, makeStyles, Modal, Paper, TextField, Typography } from '@material-ui/core'
import Cookies from 'js-cookie';
import React, { useState } from 'react'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import LoggedAppBar from './components/LoggedAppBar'
import { postLocalOrder } from '../../methods/postData';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#FFF",
        minWidth: 300,
        maxWidth: 600,
        marginLeft: '1rem',
        marginRight: "1rem",
        marginTop: "2rem"
    },
    rootPaper: {
        backgroundColor: "#FFF",
        minWidth: 300,
        maxWidth: 600,
        minHeight: 50,
        marginLeft: '1rem',
        marginRight: "1rem",
        marginTop: "2rem"
    },
    btn: {
        marginTop: "1.5rem",
        height: "3.5rem",
        width: "8rem",
        borderRadius: "0.5rem"
    },
    typo: {
        marginTop: "20rem",
        fontFamily: "Roboto condensed",
        fontSize: "2.5rem",
        fontWeight: "900",
        opacity: "0.8",
        color: "grey"
    },
    div: {
        marginTop: '10rem',
        marginBottom: "10rem"
    },
    title: {
        fontFamily: "Abhaya",
        fontSize: "1.25rem",
        marginLeft: "1rem",
        color: "#2C394B"
    },
    helper: {
        fontFamily: "Abhaya",
        fontSize: "1.25rem",
        marginLeft: "1rem",
        color: "grey",

    },
    img: {
        margin: "1rem",
        borderRadius: '0',
        height: "10rem",
        width: "40%"
    },
    btnControlAdd: {
        color: "green",
        fontFamily: "Roboto",
        fontWeight: "700",
        margin: "1rem"
    },
    btnControlRemove: {
        color: "red",
        fontFamily: "Roboto",
        fontWeight: "700",
        margin: "1rem"
    },
    total: {
        padding: "0.5rem",
        fontFamily: "Abhaya",
        fontSize: "1.5rem"
    },
    logo: {

        fontFamily: "Laila",
        color: "green",
        margin: "0rem 1rem 0 1rem",
        fontSize: "2rem",
    },
    rainbow: {
        fontFamily: "Laila",
        fontSize: "2.5rem",
        fontWeight: "600",
        width: "20rem",
        color: "#1b5e20",
        marginLeft: "2rem"
    },
    nav: {
        height: "auto",
        background: '#fff',
        zIndex: theme.zIndex.drawer + 1,
    },
    div1: {
        flexGrow: 2
    },
    div2: {

        flexGrow: 1
    },
    icons: {
        fontSize: '2rem'
    },
    btn: {
        fontFamily: "Laila",
        color: "black",
        margin: "0rem 1rem 0 1rem"
    },
    typo: {
        background: "white",
        "&:hover": {
            background: 'white'
        }
    },
    modal: {
        width: "35rem",
        height: "50rem",

        backgroundSize: "cover",

    },
    postModal: {

        background: "transparent",

        width: "30rem",
        height: "50rem",

        backgroundSize: "cover",
    },
    anotherPaper: {
        background: "transparent",
        width: "30rem",
        height: "35rem",
        background: "#F1F0EC"
    },
    myModal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formTypo: {
        fontFamily: "Laila",
        color: '#3E3636',
        fontSize: "2.5rem",
        marginBottom: "4rem"

    },
    textFeild: {
        width: "20rem",
        marginTop: '2rem'
    },
    loginBtn: {
        background: "#004d40",
        color: "#FFF",
        "&:hover": {
            background: "#004d40",
            color: "#FFF"
        },
        width: "7rem",
        marginTop: "2rem"
    },
    loginTypo: {
        width:"17rem",
        fontWeight: "800"
    }
}))
export default function Cart() {
    const classes = useStyles();
    const [order, setOrder] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const [updateprice, setUpdate] = React.useState(0)
    const [modal ,setModal] = useState(false)
    const [account ,setAccount] =useState(undefined)
    React.useEffect(() => {
        const data = Cookies.get('orders');
        if (data) {
            setOrder(JSON.parse(data));
            const dt = JSON.parse(data);
            let sum = 0;
            dt.forEach(element => {
                sum += (element.quantity * element.price)
            });
            setTotal(sum)
        }
        else {
            setOrder(undefined);
        }
    }, [])
    function setData(item, str) {
        let data = order;
        data.find((o, i) => {
            if (o === item) {
                if (str === 'add') {
                    let tmp = parseInt(o.quantity);
                    tmp++;
                    o.quantity = tmp;
                }
                else {
                    let tmp = parseInt(o.quantity);
                    tmp--;
                    o.quantity = tmp;
                }
            }
        });
    }
    const state = {
        role: "LOCAL"
    }
    return (
        <div>
           
           <Modal
                                                className={classes.myModal}
                                                open={modal}
                                                onClose={() => { setModal(false) }}
                                            >
                                          
                                            
                                                  
                                                        <Paper className={classes.anotherPaper}>
                                                        
                                                                <div  align='center' elevation={0} onChange={(e)=>{
                                                                    if(e.target.id === 'account_no'){
                                                                        setAccount(e.target.value)
                                                                        
                                                                    }
                                                                }}>
                                                                    <Typography className={classes.formTypo}>
                                                                        Provide your bank info
                                                                    </Typography>
                                                                    <div style={{ marginTop: "4rem" }}>
                                                                        <TextField variant='standard' color='secondary' className={classes.textFeild} id='account_no' label='Account' type='email' placeholder='Enter your account no please' />
                                                                        <TextField variant='standard' color='secondary' className={classes.textFeild} id='secret' label='Secret' type='password' placeholder='Enter your secret please' />
                                                                    </div>
                                                                    
                                                                    <Button onClick={()=>{
                                                                              Cookies.remove('orders');
                                                                              for (var i=0 ;i<order.length; i++){
                                                                                order[i].account_no=account;
                                                                              }

                                                                              postLocalOrder(order)
                                                                              window.location.href = '/app'
                                                                    }}  className={classes.loginBtn} size='large'>
                                                                        <Typography className={classes.loginTypo} >Proceed</Typography>
                                                                    </Button>
                                                                </div>
                                                    
                                                        </Paper>
                                             

                                        </Modal>
            <LoggedAppBar state={state} />
            <div className={classes.div} align='center'>{order ?

                <div>

                    {order.map(item =>
                        <Paper className={classes.root} elevation={3}>
                            <Grid justifyContent='flex-start' container>
                                <Avatar className={classes.img} src={`/uploads/${item.img}`}></Avatar>
                                <div style={{ margin: "1rem" }} align='center'>
                                    <Grid container >
                                        <Typography className={classes.title}>Product:</Typography>
                                        <Typography className={classes.helper}>{item.seller}</Typography>
                                    </Grid>
                                    <Grid container >
                                        <Typography className={classes.title}>Quantity:</Typography>
                                        <Typography className={classes.helper}>{parseInt(item.quantity) + parseInt(updateprice)}</Typography>
                                    </Grid>
                                    <Box align='center'>
                                        <Grid align='center' container >
                                            <Typography className={classes.title}>Price:</Typography>
                                            <Typography className={classes.helper}>{(parseInt(item.quantity) + parseInt(updateprice)) * parseInt(item.price)}</Typography>
                                        </Grid>
                                    </Box>
                                    <div >
                                        <Button onClick={() => {
                                            setData(item, 'add')
                                            setTotal(parseInt(total) + parseInt(item.price))
                                        }} className={classes.btnControlAdd}>Add</Button>
                                        <Button onClick={() => {
                                            setData(item, 'sub');
                                            setTotal(parseInt(total) - parseInt(item.price))
                                        }} className={classes.btnControlRemove}>Remove</Button>
                                    </div>
                                </div>
                            </Grid>
                        </Paper>
                    )}
                    <Paper className={classes.rootPaper}>
                        <div align='center'>

                            <Typography className={classes.total}>Total: {total}</Typography>

                        </div>
                    </Paper>
                    <Grid style={{ width: 300, }} container justifyContent="space-around">
                        <Button onClick={() => {
            
                            setModal(true)
                        }} variant='contained' color='primary' className={classes.btn}>Checkout</Button>
                        <Button onClick={() => {
                            Cookies.remove('orders');
                            window.location.href = '/app'
                        }} variant='contained' color='secondary' className={classes.btn}>Cancel</Button>
                    </Grid>

                </div>
                :
                <Typography align='center' className={classes.typo}>Orderd goods will apperar here</Typography>
            } </div>

        </div>
    )
}
