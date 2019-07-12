import Firebase from 'firebase';

import { firebaseConfig } from '~/config';

// Initialize Firebase
let app = Firebase.initializeApp(firebaseConfig);

const dp = () => app.database();

export default dp;