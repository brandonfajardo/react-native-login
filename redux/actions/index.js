import { LOGIN_SUCCESS, GET_PHOTOS_PENDING, GET_PHOTOS_SUCCESS } from "./types";
import NavigatorService from "../../navigatorService";

export const login = ({ email, password }) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:3000/user", {
        // POST email & password
        method: "GET"
      })
        .then(res => res.json())
        .then(user => {
          dispatch({ type: LOGIN_SUCCESS, payload: user });
          NavigatorService.navigate("Photos");
          resolve(user);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
};

export const getPhotos = () => {
  return dispatch => {
    dispatch({ type: GET_PHOTOS_PENDING });

    fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET"
    })
      .then(res => res.json())
      .then(photos => {
        dispatch({ type: GET_PHOTOS_SUCCESS, payload: photos });
      });
  };
};
