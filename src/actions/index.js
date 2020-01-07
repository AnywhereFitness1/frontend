import axioswithAuth from "../axiosWithAuth";

// constant variables
export const FETCH_CLASSES = "FETCH_CLASSES";
//

export const fetchClasses = () => dispatch => {
  axioswithAuth()
    .get("/classes")
    .then(res =>
      dispatch({
        type: FETCH_CLASSES,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
