const router = require('express').Router();
const multer = require('multer')
const checkAuth = require('../middleware/checkAuth');
const Organization = require('../models/Organization');
const User = require('../models/User');
const { Check, addOrganization, addUser, loginUser } = require('./loginController');
const { updateProductOrder, updateRes, postLocalOrder, updateProfile,
    getInfo, postProduct, updateProduct, getInventory, getMarketInfo,
    getOrderLarge, deleteOrder, addToLocal, getUserMarket, getLocalInventory,
    orderFromUser, getUserOrder, deleteUserOrder, accpetUserOrder, getLargeData, getSmallData, showSearch, getMyOrder, getAllOrg, deleteOrg, getAllUserData, deleteUser, createCard } = require('./updateController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
router.get("/app", checkAuth, (req, res) => {
    res.status(200).json(true);
})
router.get('/getmarketinfo', checkAuth, getMarketInfo)
router.get('/check/:email', Check);
router.get('/getinventory/:_id', checkAuth, getInventory)
router.post('/addOrganization', addOrganization)
router.post('/addUser', addUser);
router.post('/login', loginUser);
router.post('/updateres', checkAuth, updateRes);
router.post('/updateProfile', checkAuth, upload.single('articleImage'), updateProfile)
router.get('/getinfo/:_id', checkAuth, getInfo);
router.post('/postproduct', checkAuth, postProduct);
router.post('/updateproduct', checkAuth, upload.single('articleImage'), updateProduct);
router.post('/postlocalorder', checkAuth, postLocalOrder)
router.get('/getlargeorder/:_id', checkAuth, getOrderLarge)
router.post('/deleteorder', checkAuth, deleteOrder)
router.post('/updateinventory', checkAuth, updateProductOrder);
router.post('/addtolocal', checkAuth, addToLocal)
router.post('/getusermarket', checkAuth, getUserMarket);
router.get('/getlocalinventory/:_id', checkAuth, getLocalInventory);
router.post('/orderfromuser', checkAuth, orderFromUser)
router.get('/getuserorder/:_id', checkAuth, getUserOrder);
router.get('/deleteuserorder/:_id', checkAuth, deleteUserOrder);
router.post('/acceptuserorder', checkAuth, accpetUserOrder)
router.get('/largedata/:_id', checkAuth, getLargeData);
router.get('/smalldata/:_id', checkAuth, getSmallData)
router.get('/search/:_id', checkAuth, showSearch);
router.get('/myorders/:_id', checkAuth, getMyOrder);
router.get('/getallorg', checkAuth, getAllOrg);
router.get('/deleteorg/:_id', checkAuth, deleteOrg);
router.get('/getalluser', checkAuth, getAllUserData);
router.get('/deleteuser/:_id', checkAuth, deleteUser)
router.post('/createcard', createCard)
router.post('/getcardinfo',async(req,res)=>{
    try{
        const  resx = await User.findOne({account_no:req.body.data.account_no})
        const resy =await Organization.findOne({account_no:req.body.data.account_no})
        if(resx || resy){
            res.status(200).json(resx || resy);
        }
        else{
            res.status(203).json("nothing to show")
        }
        
    }
    catch(err){
        console.log(err)
    }
})
router.post('/usercard', async(req,res)=>{
    const data = req.body.data;
    console.log(data)
    const user = await User.findOne({account_no:data.account_no});
    console.log(user);
    user.balance = parseInt(user.balance)-parseInt(data.amount);
    user.save(err=>{
        if(!err){
            res.status(200).json(true)
        }
    })
})
module.exports = router;