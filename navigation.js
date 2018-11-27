import { createStackNavigator } from "react-navigation";
import { Login, Photos } from "./pages";

export default createStackNavigator({
  Home: Login,
  Photos
});
