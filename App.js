import React, { Component } from "react";
import AppNavigator from "./navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducer from "./redux/reducers";
import NavigatorService from "./navigatorService";

const store = createStore(reducer, applyMiddleware(reduxThunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator
          ref={navigatorRef => {
            NavigatorService.setContainer(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
