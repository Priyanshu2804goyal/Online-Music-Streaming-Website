const mongoose=require('mongoose');
const express=require('express');
const passport = require('passport');
const server=express();
require('dotenv').config();
// const passport=require('passport');
const user=require('./models/user.js');
const authroutes=require('./routes/auth.js')
const  gettoken=require('./utils/helper.js');
server.use(express.json());
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
 // console.log(process.env.db_password);
 // connect with mongodb
 console.log(process.env.db_password);
 mongoose.connect("mongodb+srv://priyanshugoyal:"+ process.env.db_password+"@cluster0.jvmbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 50000, // Increase timeout to 30 seconds
        }
    
).then((x)=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
    console.log("error is while coonecting");
})
// set up authentication
/*console.log("mongodb+srv://priyanshugoyal:"+ process.env.db_password+"@cluster0.jvmbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)*/
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secret_key;
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    user.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));
// making server for project;
server.get("/",(req,res)=>{
    res.end('hello world');
})
server.use('/auth',authroutes);
server.listen(8000,()=>{
    console.log('this is node.js server 8000');
})