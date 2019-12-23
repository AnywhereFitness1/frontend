import axioswithAuth from "../axiosWithAuth";
// constant variables
export const FETCH_POSTS = "FETCH_POSTS";
//

export const fetchClasses = () => dispatch => {
  axioswithAuth()
    .get("/posts")
    .then(res =>
      dispatch({
        type: FETCH_POSTS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
