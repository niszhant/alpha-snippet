'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(customMiddleware);

app.get('/', (req, res) => {
    res.send('Home page (Nishant)');
});

app.get('/Users', authorizationMiddleware, (req, res) => {
    if (req.admin) {
        res.send('<h1>User page</h1>');
    }
});

/*
//Configure your whitelist 
var baseHostname ="https://example.com";
var redirectMapping ={'account':'/account','profile':'/profile'}
//Create a function to validate whitelist
function validateRedirect(key){ 
    if(key in redirectMapping) { return redirectMapping[key];} 
    else 
    {returnfalse;}
}

app.get('/login',function(req, res, next){if(req.session.isAuthenticated()){
		redirectPath =validateRedirect(req.query.url);if(redirectPath){
			res.redirect(encodeURI(baseHostname + redirectPath));}else{
            res.send('Not a valid redirect!');}}});
            
*/
app.get('/redirect', (req, res) => {
    if (req.query.url) {
        res.status(301).redirect(req.query.url);
    }
});

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});


function customMiddleware(req, res, next) {
    console.log(`${new Date().toISOString()}: ${req.originalUrl}`);
    next();
}

function authorizationMiddleware(req, res, next) {
    if (req.query.admin === 'true') {
        req.admin = true;
        return next();
    } else {
        res.send('ERROR: You must be an admin');
    }
}