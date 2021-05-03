import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function PostsList() {
  const [state, dispatch] = useStoreContext();

  const removePost = id => {
    API.deletePost(id)
      .then(() => {
        dispatch({
          type: REMOVE_POST,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getPosts = () => {
    dispatch({ type: LOADING });
    API.getPosts()
      .then(results => {
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Car Notes</h1>
      {state.posts.length ? (
        <List>
          {state.posts.map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removePost(post._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No Car Notes!</p>
      )}
      <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div>
    </div>
  );
}

export default PostsList;
