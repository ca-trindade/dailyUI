import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../../styles";

const Drawer = createDrawerNavigator();

export default function HomeScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#CBE4DE",
          width: 240,
        },
        headerTintColor: "#CBE4DE",
        drawerActiveTintColor: "#CBE4DE",
        drawerActiveBackgroundColor: "#191919",
        drawerInactiveTintColor: "#191919",
      }}
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

function Feed() {
  return (
    <View style={styles.container}>
      <AntDesign name="home" size={24} color="#CBE4DE" />
      <Text style={styles.text}>Home/Feed</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={styles.container}>
      <AntDesign name="home" size={24} color="#CBE4DE" />
      <Text style={styles.text}>Home/Article</Text>
    </View>
  );
}
