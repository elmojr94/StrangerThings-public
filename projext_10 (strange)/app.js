const BASE_URL2 =
  "https://strangers-things.herokuapp.com/api/2101-LSU-RM-WEB-PT";

async function fetchPosts() {
  const myToken = localStorage.getItem("token");
  console.log(myToken);

  try {
    const url = `${BASE_URL2}/posts`;
    const response = await fetch(url);
    const { data } = await response.json();
    console.log(data.posts);
    return data.posts;
  } catch (error) {
    console.log(error);
  }
}
const createPostHTML = (post) => {
  return `
  <div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${post.title}</h5>
  <p class="card-text">${post.description}</p>
  <p class="card-text">${post.price}</p>
  <p class="card-text">${post.isAuthor}</p>
  <footer class="blockqoute-footer">Go somewhere</footer>
</div>
</div>
`;
};

(async () => {
  const posts = await fetchPosts();
  posts.forEach((post) => {
    const postHTML = createPostHTML(post);
    $('#posts').append(postHTML)
  });
})();
// submit button, new posts
function newPostOnClickSubmitHandler(e) {
  e.preventDefault()
const newTitle = $("#newPost-Title").val();
const newDescription = $("#newPost-Description").val();
const newPrice = $("#newPost-Price").val();
const newDeliveryMethod = $("#newPost-DeliveryMethod").val();


  const newPostObject = {
    title: newTitle,
    description: newDescription,
    price: newPrice,
    willDeliver: newDeliveryMethod,
  };
 newPosts(newPostObject);
}
// get newPosts 
// const newPosts = async (newPostObject) => {
//   const myToken = localStorage.getItem("token");
//   const url = `${BASE_URL2}/posts`;
//   try {
//     const response = await fetch(url,{
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${myToken}`,
//       },
//       body: JSON.stringify({
//         post: newPostObject,
//       }),
//     });
//     console.log(response);
//   } catch (e) {
//     console.error(e);
//   }
// };

newPosts();
// async function loginUser(username, password) {
//   const userInfo = {
//     user: {
//       username: username,
//       password: password,
//     },
//   };
//   try {
//     const response = await fetch(`${BASE_URL}/users/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userInfo),
//     });
//     const { data, success } = await response.json();
//     localStorage.setItem("token", data.token);
//     localStorage.setItem("username", username);
//     return success;
//   } catch (error) {
//     console.error(error);
//   }
// } moved to register.js

async function registerUser(username, password) {
  const userInfo = {
    user: {
      username: username,
      password: password,
    },
  };
  console.log(userInfo);
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const { data } = await response.json();
    console.log(data);
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", username);
    return success;
  } catch (error) {
    console.error(error);
  }
}
// $("btn btn-block btn-primary").on("click", async function (e) {
//   e.preventDefault();
//   let username = $("#username-register").val();
//   let password = $("#password-register").val();
//   console.log(username, password)
//   // await registerUser(username, password);
//   // $(".close-register").click();
// });

loginUser("user404000", "234567");
