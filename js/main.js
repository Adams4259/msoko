const firebaseConfig = {
  apiKey: "AIzaSyBFBARD9MBjWJe-1PGoIrPfIJpdgpduNXs",
  authDomain: "msoko-8eab3.firebaseapp.com",
  databaseURL: "https://msoko-8eab3-default-rtdb.firebaseio.com",
  projectId: "msoko-8eab3",
  storageBucket: "msoko-8eab3.appspot.com",
  messagingSenderId: "599453734757",
  appId: "1:599453734757:web:03865267459e226a52b38c",
  measurementId: "G-V8VVDD7EPL",
};

const app = initializeApp(firebaseConfig);

//reference for database
const contactFormDB = app.database().ref("ContactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  console.log(name, emailid, msgContent);

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
