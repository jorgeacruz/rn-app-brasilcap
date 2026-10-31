import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { colors } from "../../theme/colors";
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blue[100],
        tabBarInactiveTintColor: colors.black,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: colors.blue[100],
          tabBarStyle: {
            backgroundColor: "#fff100",
            paddingTop: 10,
          },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name={"home"} size={18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="titulosCapital"
        options={{
          title: "Titulos",
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: colors.blue[100],
          tabBarStyle: {
            backgroundColor: "#fff100",
            paddingTop: 10,
          },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name={"money"} size={18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: colors.blue[100],
          tabBarStyle: {
            backgroundColor: "#fff100",
            paddingTop: 10,
          },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name={"user"} size={18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="blog"
        options={{
          title: "Blog",
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: colors.blue[100],
          tabBarStyle: {
            backgroundColor: "#fff100",
            paddingTop: 10,
          },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name={"newspaper-o"} size={18} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
