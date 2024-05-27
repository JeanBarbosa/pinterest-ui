import { Image, Text, View } from "react-native"
import { styles } from "./styles"
import { Feather } from "@expo/vector-icons"
import { theme } from "@/theme"
import { useEffect, useState } from "react"

export function Post({ title, image }: PostProps) {
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => {
        setAspectRatio(width / height)
      })
    }
  }, [])

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={[styles.image, { aspectRatio }]} />
      <View style={styles.footer}>
        <Text style={styles.title}>{title}</Text>
        <Feather name="more-horizontal" size={16} color={theme.colors.white} />
      </View>
    </View>
  )
}
