import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Button,
  AsyncStorage,
  StyleSheet
} from "react-native";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";
import { Card, Text } from "native-base";

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 5
  },
  image: {
    height: 50,
    width: 50
  },
  photoTitle: {
    padding: 5
  }
});

class Photos extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Photos",
    headerLeft: (
      <Button
        onPress={() => {
          AsyncStorage.removeItem("user").then(() => {
            navigation.navigate("Home");
          });
        }}
        title="Logout"
      />
    )
  });

  componentWillMount() {
    this.props.getPhotos();
  }

  render() {
    return this.props.photos.length ? (
      <FlatList
        data={this.props.photos}
        renderItem={({ item }) => (
          <Card style={styles.cardContainer}>
            <Image style={styles.image} source={{ uri: item.url }} />
            <Text style={styles.photoTitle}>{item.title}</Text>
          </Card>
        )}
      />
    ) : (
      <ActivityIndicator />
    );
  }
}

const mapState = ({ photos }) => ({
  photos: photos.list
});

const mapDispatch = {
  getPhotos: actions.getPhotos,
  logout: actions.logout
};

export default connect(
  mapState,
  mapDispatch
)(Photos);
