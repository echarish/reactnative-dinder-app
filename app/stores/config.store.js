import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyCXDCHqAJKlduFA1AE-fW5W4FvwsP7aK-0",
    authDomain: "dinder-d1fa9.firebaseapp.com",
    databaseURL: "https://dinder-d1fa9.firebaseio.com",
    projectId: "dinder-d1fa9",
    storageBucket: "dinder-d1fa9.appspot.com",
    messagingSenderId: "496379018654"
};


export default class ConfigStore {

    constructor(){
        firebase.initializeApp(config);
        this.splashTime =  1000;
        this.splashImg = require('../../images/splash.jpg');
        this.loginBG = require('../../images/login.jpg');
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