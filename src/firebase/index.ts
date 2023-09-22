import { initializeApp } from 'firebase/app';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBxdjp9hlcY2mGnq5Pp5wSumM6_OEzVFSs",
  authDomain: "courseproject-f468e.firebaseapp.com",
  projectId: "courseproject-f468e",
  storageBucket: "courseproject-f468e.appspot.com",
  messagingSenderId: "36874883245",
  appId: "1:36874883245:web:6aedbbb108776f29dff624"
};

export const api = initializeApp(firebaseConfig);
export const storage = getStorage(api);


