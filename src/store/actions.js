const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

//action carries the payload to the reducer

export const addAuthor = () => {
  let newAuhor = {
    id: 2,
    first_name: "George R.R.",
    last_name: "Martin",
    imageUrl:
      "https://typeset-beta.imgix.net/elite-daily/2016/03/06144207/elite-daily-George-RR-Martin.jpg?w=800&h=800&auto=format&q=70&fit=crop&crop=faces",
    books: [
      {
        title: "A Game of Thrones",
        color: "blue"
      }
    ]
  };
  return {
    type: ADD_AUTHOR,
    payload: newAuhor
  };
};
export const deleteAuthor = author => {
  return {
    type: DELETE_AUTHOR,
    payload: author
  };
};
