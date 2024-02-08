//old format of fetching url
const photo = document.querySelector(".photo");
const text = document.querySelector(".followers");
const following = document.querySelector(".following");
const name = document.querySelector(".name");

const requestUrl = "https://api.github.com/users/bsjana007";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data.login);
    console.log(data);
    photo.innerHTML = `<img src='${data.avatar_url}'></img>`;
    text.innerHTML = `<p>Followers = ${data.followers}</p>`;
    following.innerHTML = `<p>Following = ${data.following}</p>`;
    name.innerHTML = `<p>Name = ${data.name}</p>`;
  }
};
xhr.send();
