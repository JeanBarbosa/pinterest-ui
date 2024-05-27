import { ScrollView, View } from "react-native"
import { styles } from "./styles"
import { Post } from "@/components/Post"

export function Posts({ posts }: PostsProps) {
  function postByColumn(column: "right" | "left") {
    const rest = column === "left" ? 0 : 1
    return posts
      .filter((_, index) => index % 2 === rest)
      .map((post) => (
        <Post
          key={`${post.id}`}
          id={post.id}
          title={post.title}
          image={post.image}
        />
      ))
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      <View style={styles.container}>
        <View style={styles.column}>{postByColumn("left")}</View>
        <View style={styles.column}>{postByColumn("right")}</View>
      </View>
    </ScrollView>
  )
}
