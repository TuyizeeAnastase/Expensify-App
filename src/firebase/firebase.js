import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDFt987_v4fEzGnNUh2pBW70B1WkM1-96c",
    authDomain: "expensify-app-d9b0b.firebaseapp.com",
    databaseURL: "https://expensify-app-d9b0b.firebaseio.com",
    projectId: "expensify-app-d9b0b",
    storageBucket: "expensify-app-d9b0b.appspot.com",
    messagingSenderId: "197531416640",
    appId: "1:197531416640:web:d9877426908b773f2907a5",
    measurementId: "G-7KZYYSGC64"
  };

  firebase.initializeApp(config);
  
  const database=firebase.database();
  
  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

  export{googleAuthProvider,firebase, database as default};
 

  // database.ref('expenses').push({
  //   description:'rent',
  //   note:'',
  //   amount:10500000,
  //   createdAt:4567896789
  // });
  
  // database.ref('expenses')
  // .once('value')
  // .then((snapshot)=>{
  //   const expenses=[];
    
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id:childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //    console.log(expenses);
  // });
  
  // database.ref('expenses').on('value',(snapshot)=>{
  //   const expenses=[];
    
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id:childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //    console.log(expenses);
  
  // });
//   database.ref().set({
//       name:'Anastase Tuyizere',
//       age:24,
//       isSingle:false,
//       location:{
//           city:'Musanze',
//           country:'Rwanda'
//       }
//   }).then(()=>{
//       console.log('data saved');
//   }).catch((e)=>{
//       console.log('data fail',e);
//   });

// database.ref('attributes').set({
//       weight:56,
//       height:78
//   }); 

//   database.ref('isSingle').set(null);
// database.ref()
// .remove()
// .then(()=>{
//    console.log('data removed');
// })
// .catch((err)=>{
//    console.log('did not remove data',err);
// });
