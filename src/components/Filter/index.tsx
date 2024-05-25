import React from "react"
import { styles } from "./styles"
import { Pressable, PressableProps, Text } from "react-native"

export function Filter({
  filter,
  selected,
  ...rest
}: FilterProps & PressableProps) {
  return (
    <Pressable
      style={[styles.pressable, selected && styles.pressableSelected]}
      {...rest}
    >
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  )
}
