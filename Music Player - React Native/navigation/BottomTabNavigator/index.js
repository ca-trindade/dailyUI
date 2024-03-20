import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../../components/HomeScreen";
import ProfileScreen from "../../components/ProfileScreen";
import { styles } from "../../styles";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent";

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#CBE4DE"
      inactiveColor="#CBE4DE"
      barStyle={{ backgroundColor: "#191919" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#CBE4DE" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Music Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="play-circle"
              color="#CBE4DE"
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cog" color="#CBE4DE" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Feather name="settings" size={24} color="#CBE4DE" />
      <Text style={styles.text}>Settings</Text>
    </View>
  );
}
