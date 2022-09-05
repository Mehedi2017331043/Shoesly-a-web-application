import { Box, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import pharmacy from '../../../images/pharmacyExplain.jpg'
import lessCost from '../../../images/LessCostExplain.jpg'
import medicalCard from '../../../images/medicalCard.jpg'
import expandBusiness from '../../../images/expandBusiness.jpg'
import onlineSupport from '../../../images/onlineSupport.jpg'
function SpanBox() {
    const useStyles = makeStyles((theme) => ({
        root: {
            paddingBottom: "0"
        },

        box: {
            height: 'auto',
            width: "100%",
            marginBottom: "5%"
        },
        boxMobile: {
            height: 'auto',
            width: "100%",
            marginBottom: "2%"
        },
        imgRight: {
            float: "right",
            width: '40%',
            height: '90%',
            borderRadius: "10px",
            marginRight: "5%",
            marginLeft: "2%"
        },
        imgLeft: {
            float: "left",
            width: '40%',
            height: '90%',
            borderRadius: "10px",
            marginRight: "2%",
            marginLeft: "5%"
        },
        imgRightMobile: {

            width: '100%',
            height: '300px',
            borderRadius: "5%",
            marginBottom: "10%"
        },
        imgLeftMobile: {

            width: '100%',
            height: '300px',
            borderRadius: "5%",
            marginBottom: "10%"
        },
        TypographyLeft: {
            width:"45%",
            paddingBottom: "5%",
            paddingLeft: "5%",
            paddingRight: "10rem",
            textAlign: "justify",
            lineHeight: "2",
            fontFamily: 'Guwan',
            fontSize: "1.35rem",
            fontWeight: '400',
            opacity: "0.8"
        },
        TypographyRight: {
            width:"45%",
            paddingBottom: "5%",
            paddingLeft: "55%",
            paddingRight: "10rem",
            textAlign: "justify",
            lineHeight: "2",
            paddingTop:"15rem",
            fontFamily: 'Guwan',
            fontSize: "1.35rem",
            fontWeight: '400',
            opacity: "0.8"
        },

        title: {
            opacity: "0.5",
            paddingBottom: theme.spacing(0.01),
            fontFamily: 'Guwan',
            fontWeight: "900",
            fontSize: "2.5rem"
        },
        TypographyLeftMobile: {
            paddingLeft: "5%",
            paddingRight: "5%",
            textAlign: "justify",
            lineHeight: "2",
            fontFamily: 'Guwan',
            fontSize: "1.35rem",
            fontWeight: '400',
            opacity: "0.7",
            paddingBottom: "5%"
        },

        titleMobile: {
            opacity: "0.5",
            paddingBottom: theme.spacing(0.01),
            fontFamily: 'Guwan',
            fontWeight: "900",
            fontSize: "1.5rem"
        }
    }));
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('600'));
    if (!isMatch)
        return (

            <div className={classes.root}>
                <Box id="span1" className={classes.box}>
                    <img
                        src="https://c1.wallpaperflare.com/preview/516/198/509/baby-shoes-outdoor-spring-day-waiting.jpg"
                        alt="Manage Pharmacy"
                        className={classes.imgRight}
                    />
                    <Typography className={classes.TypographyLeft}>
                        <Typography className={classes.title}>
                            Kids shoe
                        </Typography>
                        Many foot issues like bunions, hammer toes, weak arches, or just overall weak feet are caused by wearing shoes that too narrow, have too much cushion, and don’t allow the feet to move naturally. Feet have muscles too – over 29 of them! Wearing minimal, foot-shaped shoes means these muscles can grow and develop properly, helping children to avoid developing foot issues caused by unhealthy shoes.
                    </Typography>
                </Box>
                <Box id="span2" className={classes.box}>
                    <img
                        src="https://c0.wallpaperflare.com/preview/943/148/889/nike-air-jordan-1-shoes-near-chain-link-fence.jpg"
                        alt="Less Cost"
                        className={classes.imgLeft}
                    />
                    <Typography paragraph={true} className={classes.TypographyRight}>
                        <Typography className={classes.title}>
                            Mens Shoes
                        </Typography>
                        The footwear market is quite a wide niche that can serve people of all ages and with various needs. Moreover, shoes are a product in constant demand, which points to its relevance regardless of the time of the year and any other aspects that may endanger other sectors—tourism,

                    </Typography>
                </Box>
                <Box id="span3" className={classes.box}>
                    <img
                        src="https://c0.wallpaperflare.com/preview/260/719/775/beige-elegant-fashion-fashionable.jpg"
                        alt='Medical Card'
                        className={classes.imgRight}
                    />
                    <Typography paragraph={true} className={classes.TypographyLeft}>
                        <Typography className={classes.title}>
                           Womens wears
                        </Typography>
                        Choosing your niche is the first step on the journey of conquering the market; it will be of critical importance to your future direction and the ecosystem you will build and expand around your business. You can either focus on a narrow niche or select several footwear types and target a larger customer segment.
                    </Typography>
                </Box>
             
            </div>
        )
    else {
        return (
            <div>
                
            </div>
        )
    }
}
export default SpanBox
