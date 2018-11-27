import React, { Component } from "react";
import { View, AsyncStorage, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { withNavigation } from "react-navigation";
import { Item, Input, Button } from "native-base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 15
  },
  formContainer: {
    padding: 20
  },
  loginText: {
    color: "white"
  }
});

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  login = () => {
    const { email, password } = this.state;

    this.props.login({ email, password }).then(user => {
      AsyncStorage.setItem("user", user.name);
    });
    this.setState({ email: "", password: "" });
  };

  componentWillMount() {
    AsyncStorage.getItem("user").then(user => {
      if (user !== null) {
        this.props.navigation.navigate("Photos");
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login Page</Text>
        <View style={styles.formContainer}>
          <Item>
            <Input
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
              placeholder="Email..."
            />
          </Item>

          <Item>
            <Input
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password}
              placeholder="Password..."
            />
          </Item>
          <Button primary full onPress={this.login}>
            <Text style={styles.loginText}>Login</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapDispatch = {
  login: actions.login
};

export default connect(
  null,
  mapDispatch
)(withNavigation(Login));
