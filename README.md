# CSE446-Shoesly-a-web-application
An academic project  for ensuring supply  of medicine from  pharmacy factory to  pharmacy and patient by a web-app 



We created this for educational purpose.This is developed using mern stack


Once the repository is cloned you will see two folders 
1.Client
2.Server
3.Bank

you need to go to client folder and need to run
# npm install && npm start

now a react app will open in your browser


Later on you need to go server folder and need to run 

#nodemon server.js

The backend will start then


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
