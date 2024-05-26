import { theme } from "@/theme"
import { styles } from "./styles"
import { Pressable, Text } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { MenuButtonProps } from "./menuButton"

export function MenuButton({ title, icon }: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <FontAwesome
        style={styles.icon}
        name={icon ? icon : "home"}
        size={32}
        color={theme.colors.white}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}
