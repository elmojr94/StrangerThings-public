const BASE_URL = "https://strangers-things.herokuapp.com/api/2101-LSU-RM-WEB-PT/";
// const username = document.getElementById("username")
// const password = document.getElementById("password")
async function loginUser(username, password) {
   const userInfo = {
     user: {
       username: username,
       password: password,
     },
   };
   try {
     const response = await fetch(`${BASE_URL}/users/login`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(userInfo),
     });
     const { data, success } = await response.json();
     localStorage.setItem("token", data.token);
     localStorage.setItem("username", username);
     return success;
   } catch (error) {
     console.error(error);
   }
 }

async function RegisterUser(username, password) {
   const userInfo = {
     user: {
       username: username,
       password: password,
     },
   };
   try {
     const response = await fetch(`${BASE_URL}/users/register`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(userInfo),
     });
     const { data, success } = await response.json();
     localStorage.setItem("token", data.token);
     localStorage.setItem("username", username);
     return success;
   } catch (error) {
     console.error(error);
   }
 }
//  async function authorizeUser (username, password){
//     const 
//  }

// $("signIn").on('submit', async function loginUsers (event) {
//     event.preventDefault();
//     const username = $('#username').val();
//     const password = $('#password').val();
//     try {
//       const response = await fetch(`${BASE_URL}/users/register`, {
//          method: "POST",
//          headers: {'Content-Type':'application/json'},
//          body: JSON.stringify({
//             user: {username, password}
//          })
//       })
//       const data = await response.json();
//       console.log(data);
//       localStorage.setItem("authToken", data.token)
//       const userTOKEN = localStorage.getItem("authToken")
//       console.log(userTOKEN)
//       $(".loginErrorMsg").empty()
//       if (userTOKEN && data.error) {
//          $(".loginErrorMsg").text(`${data.error.message}`)
//       } else {
//          localStorage.setItem("authToken", data.token);
//       }
//    } catch (error) {
//       console.error(error);
//    }
// });
// $('signIn').on('click', () => {
//    console.log("i worked")
//    window.location.href = window.location.href/"../index.html"
// });