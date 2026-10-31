import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { colors } from "../../theme/colors";
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.yellow[100],
        tabBarInactiveTintColor: colors.white[200],
        tabBarStyle: {
          backgroundColor: colors.black,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarShowLabel: true,
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name={"home"} size={18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="titulos"
        options={{
          title: "Titulos",
          headerShown: false,
          tabBarShowLabel: true,
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
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name={"newspaper-o"} size={18} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
