// Challenge

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => res.json())
  .then((user) => {
    console.log("User data:", user);
  });

async function getExampleText() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log("User data:", user);
    return user;
}
getExampleText()



fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json())
  .then((comment) => {
    console.log("Comment data:", comment);
  })
  .catch((error) => {
    console.error("Error fetching comment:", error);
  });

  async function getComment() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments/1"
    );
    const comment = await response.json();
    console.log("Comment data:", comment);
    return comment;
  }
  getComment();



fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    console.log("All posts:", posts);
  })
  .catch((error) => {
    console.error("Error fetching posts:", error);
  });

  async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log("All posts:", posts);
    return posts;
  }
  getPost();



// 1 album iig fetch hiij avaad ter album-niha buh zurgiig avah
fetch("https://jsonplaceholder.typicode.com/albums/1")
  .then((response) => response.json())
  .then((album) => {
    console.log("Album data:", album);
    return fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`
    );
  })
  .then((response) => response.json())
  .then((photos) => {
    console.log("Photos in Album 1:", photos);
  })
  .catch((error) => {
    console.error("Error fetching album or photos:", error);
  });

 async function getAlbum() {
   const response = await fetch(
     "https://jsonplaceholder.typicode.com/albums/1"
   );
   const album = await response.json();
   console.log("Album data:", album);
   
   const albums = await fetch(
     `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`
   );
   const photos = await albums.json()
   console.log("Photos in Album 1:", photos);
   return photos;
 }
 getAlbum();



//   User data fetch hiiged ter user-inhe post iig fetch hiij avah
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    console.log("User data:", user);
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
  })
  .then((response) => response.json())
  .then((posts) => {
    console.log("User posts:", posts);
  })
  .catch((error) => {
    console.error("Error fetching user or posts:", error);
  });

  async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    console.log("Album data:", user);

    const postuud = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    const posts = await postuud.json();
    console.log("User posts:", posts);
    return posts;
  }
  getData();

