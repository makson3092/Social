import React from "react";
import "./Posts.css";
import stores from "./images/stores.jpg";

const Post = (props) => {
  return (
    <div className="stores">
      <img src={stores} alt="stores"></img>
      <p>{props.message}</p>
      <button>Like {props.likes}</button>
    </div>
  );
};

// Масив обєктів
let posts = [
  { id: 1, message: "#first message", likes: 10 },
  { id: 1, message: "#second message", likes: 31 },
  { id: 1, message: "#third message", likes: 24 },
  { id: 1, message: "#fourth message", likes: 15 },
  { id: 1, message: "#fifth message", likes: 44 },
];

// Перебиражм масив
let postElement = posts.map((post) => (
  <Post message={post.message} likes={post.likes} />
));

//Відтворюєм дані з  масиву
const Posts = () => {
  return <div>{postElement}</div>;
};

//Вложення без масиву Без <map>
//    const Posts = () => {
//   return (
//     <div>
//       <Post message="first post" likes="10" />
//       <Post message="second post" likes="31" />
//       <Post message="third post" likes="24" />
//       <Post message="fourth post" likes="15" />
//       <Post message="fifth post" likes="44" />
//     </div>
//   );
// };

export default Posts;
