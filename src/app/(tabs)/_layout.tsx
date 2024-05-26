import { useRef } from "react"
import { theme } from "@/theme"
import { Tabs } from "expo-router"
import { View } from "react-native"
import { Menu } from "@/components/Menu"
import { Avatar } from "@/components/Avatar"
import BottomSheet from "@gorhom/bottom-sheet"
import { FontAwesome5, Foundation, Ionicons } from "@expo/vector-icons"

export default function TabLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleBootomsheetOpen = () => {
    bottomSheetRef.current?.expand()
  }

  const handleBootomsheetClose = () => {
    bottomSheetRef.current?.snapToIndex(0)
  }

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.gray[600],
          tabBarStyle: {
            backgroundColor: theme.colors.black,
            borderColor: theme.colors.black,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ size, color }) => {
              return <Foundation name="home" size={size} color={color} />
            },
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ size, color }) => {
              return <Ionicons name="search" size={size} color={color} />
            },
          }}
        />

        <Tabs.Screen
          name="menu"
          options={{
            tabBarIcon: ({ size, color }) => {
              return <FontAwesome5 name="plus" size={size} color={color} />
            },
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault()
              handleBootomsheetOpen()
            },
          })}
        />
        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({ size, color }) => {
              return (
                <Ionicons
                  name="chatbubble-ellipses"
                  size={size}
                  color={color}
                />
              )
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => (
              <Avatar
                selected={color == theme.colors.white}
                source={{ uri: "https://github.com/jeanbarbosa.png" }}
              />
            ),
          }}
        />
      </Tabs>
      <Menu ref={bottomSheetRef} onClose={handleBootomsheetClose} />
    </View>
  )
}
