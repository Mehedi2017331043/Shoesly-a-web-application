# CSE446-Shoesly-a-web-application
This is an academic project we are (Mehedi Hasan, Reg. No.2017331043 and Partha Gosh, Reg. No.2017331039) build a eshop where anyone can buy their preferred product and they can payment the bills with bank transaction. Here we also add an extra api where supplier automatically can supply their product in our eshop.  



We created this for educational purpose. This is developed using mern stack.


Once the repository is cloned you will see three folders 
1.Client
2.Server
3.Bank

you need to go to client folder and need to run
# npm install && npm start

now a react app will open in your browser


Later on you need to go server folder and need to run 

#nodemon server.js

The backend will start then

#nodemon app.js start for starting bank api
#

There are some env variables in an env file which cannot be provided

URL=<Your mongo uri>
JWT_SECRET=<Your jwt secret>
REACT_APP_MAP_API=<MAPBOX token>
REACT_APP_BASE_URL=<Your hosting uri>
REACT_APP_SERVICE=<Your Emailjs credentials>
REACT_APP_TEMPLATE=<Emailjs template token>
REACT_APP_USER=<Email js user token>


You need to get these api tokens from
mapbox.api
emailjs.com
mongo atlas
