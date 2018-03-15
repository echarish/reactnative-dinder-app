import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyCbrRIKY5QXUBgFtx6g0tZ2T4UMoBTHMCY",
    authDomain: "dinder-5ae29.firebaseapp.com",
    databaseURL: "https://dinder-5ae29.firebaseio.com",
    projectId: "dinder-5ae29",
    storageBucket: "dinder-5ae29.appspot.com",
    messagingSenderId: "407251296505"
};


export default class ConfigStore {

    constructor(){
        firebase.initializeApp(config)
        this.splashTime =  1000
        this.splashImg = require('../../images/splash.jpg')
        this.loginBG = require('../../images/login.jpg')
    }

    get SplashImg(){
        return this.splashImg
    }

    get SplashTime(){
        return this.splashTime
    }

    get LoginBG(){
        return this.loginBG
    }
}