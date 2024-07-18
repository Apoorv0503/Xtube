import { commentsData } from "./constants";

//we will utilize this nested comments objects Array to generate a random chat

//first we need to flatten the nested comments
function flattenComments(comments) {
  let flatArray = [];
  comments.forEach((comment) => {
    flatArray.push(comment);
    if (comment.replies.length > 0) {
      flatArray = flatArray.concat(flattenComments(comment.replies));
    }
  });
  return flatArray;
}

//now from this flat array, generate a random object like this:
// {
//     name: "John Doe",
//     text: "This is an amazing article!",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//     replies: [],
// }

export const getRandomComment=(commentsData)=> {
  const flatComments = flattenComments(commentsData);
  const randomIndex = Math.floor(Math.random() * flatComments.length);
  return flatComments[randomIndex];
}
