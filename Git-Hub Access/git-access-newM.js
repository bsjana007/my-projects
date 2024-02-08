// new method of fetching url


const photo = document.querySelector(".photo");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const userName = document.querySelector(".name");

const requestUrl = "https://api.github.com/users/bsjana007";

(async () => {
  let response = await fetch(requestUrl);
  // console.log(response);
  let data = await response.json();
  console.log(data);
  photo.innerHTML = `<img src='${data.avatar_url}'></img>`;
  followers.innerHTML = `<p>Followers = ${data.followers}</p>`;
  following.innerHTML = `<p>Following = ${data.following}</p>`;
  userName.innerHTML = `<p>Name = ${data.name}</p>`;
})();
