    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
    import { getDatabase, ref , child, get, set } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAqBhr1DQVLIqBwCb1X6AkU838Va8vcB9k",
      authDomain: "esp32-firebase-35007.firebaseapp.com",
      databaseURL: "https://esp32-firebase-35007-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "esp32-firebase-35007",
      storageBucket: "esp32-firebase-35007.appspot.com",
      messagingSenderId: "346343301999",
      appId: "1:346343301999:web:bcb20f9d27076683f83e9a",
      measurementId: "G-VRC1E72472"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getDatabase(app);
    const dbRef = ref(getDatabase());
    get(child(dbRef, "1")).then((snapshot) => {
      if (snapshot.exists()) {
        document.getElementById("humi").innerHTML = snapshot.val().humi;
        document.getElementById("temp").innerHTML = snapshot.val().temp;
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    
    });
    function turnON() {
      console.log('on');
      console.log('onsdadadasda');
      set(ref(db, 'LED'), {

        LED_STATUS : 'ON'
      });
    };
    function turnOFF() {
      console.log('off');
      set(ref(db, 'LED'), {
        LED_STATUS : 'OFF'
      });
    };
    const btn_on = document.getElementById("turn_on");
    btn_on.addEventListener("click", turnON);
    const btn_off = document.getElementById("turn_off");
    btn_on.addEventListener("click", turnOFF);