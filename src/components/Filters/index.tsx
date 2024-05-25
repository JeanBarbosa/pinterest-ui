import { Filter } from "@/components/Filter"
import { FlatList } from "react-native"
import { styles } from "./styles"

export function Filters({ filters, filter, onChange }: FiltersProps) {
  return (
    <FlatList
      data={filters}
      horizontal
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={filter === item}
          onPress={() => onChange(item)}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  )
}
