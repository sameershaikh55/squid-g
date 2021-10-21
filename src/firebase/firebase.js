import * as firebase from "firebase";
import "firebase/firestore";

export var firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCE1pnyBMf26zkWqJsUoW2Ya38DZ7BJteE",
	authDomain: "squide-database-a13f5.firebaseapp.com",
	projectId: "squide-database-a13f5",
	storageBucket: "squide-database-a13f5.appspot.com",
	messagingSenderId: "150664388790",
	appId: "1:150664388790:web:c1972516b163e766698617",
});

var db = firebaseApp.firestore();

export { db };
