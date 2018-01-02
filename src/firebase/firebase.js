import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
//  });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
//  }, (e) => {
//   console.log('Error', e);
//  });


// database.ref('expenses').push({
//   description: 'Water Bill',
//   note: 'Note three,',
//   amount: 1823,
//   createdAt: 2942
// });
// database.ref().on('value', (snapshot) => {
//   const user =snapshot.val();
//   console.log(`${user.name} is a ${user.job.title} at ${user.job.company}.`);
//  }, (e) => {
//   console.log('Error', e);
//  });

//  setTimeout(() => {
//    database.ref('name').set('Otasek');
//  },3500);

//  setTimeout(() => {
//    database.ref('job/company').set('ECU');
//  },3500);
//console.log(`Andrew is a Software Developer at Amazon`)
// chamnge fata and reprint

// database.ref().set({
//   name: 'Oto Drahonovsky',
//   age: 39,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Perth',
//     country: 'Australia'
//   }
// })
// .then(() => {
//   console.log('Data succesfully saved!');

// })
// .catch((e) => {
//   console.log('Failed attempt!', e);
// });

// // database.ref('isSingle')
// // .remove()
// // .then (() => {
// //   console.log('Successfully deleted.');
// // })
// // .catch((e) => {
// //   console.log('Error deleting item.', e);
// // });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })
// .then(() => {
//   console.log('Successfully updated.');
// })
// .catch((e) => {
//   console.log('Error updating item.', e);
// });