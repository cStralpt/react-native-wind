import { Image, StyleSheet, Pressable, Text } from "react-native";
import "../../global.css";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Auth from "@/components/Auth";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />

      }
    >
      <Link href="/(user)">
        <Text className="text-yellow-500 text-3xl bg-yellow-100 font-bold">
          go to user page
        </Text>
      </Link>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
