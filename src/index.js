import axios from "axios"; 

async function getData(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    ); 
    const userData = response.data;

    const responsePosts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?id=${id}`
    );
    const postData = responsePosts.data;

    let newData = Object.assign(userData, { posts: postData }); // iki farklı veri aynı obje içerisine yerleştirildi
    console.log(newData);
  } catch (error) {
    console.error(error);
  }
}
getData(1);
