import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD9UahiLoNgxfLIk-Mgsu4JB_rw7j2tj2c',
  authDomain: 'netflix-clone-a2518.firebaseapp.com',
  databaseURL: 'https://netflix-clone-a2518.firebaseio.com',
  projectId: 'netflix-clone-a2518',
  storageBucket: 'netflix-clone-a2518.appspot.com',
  messagingSenderId: '998980906444',
  appId: '1:998980906444:web:9bbbf4adc2c91ad4ee8169',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
