import firebase from 'firebase';
import 'firebase/firestore'

//Se não tiver uma app inicializada, ou seja, se for valor 0
if(!firebase.apps.length){
    firebase.initializaApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}

export default firebase