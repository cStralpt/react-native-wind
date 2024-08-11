import { Text, View } from "react-native";
import "../../global.css";
import Auth from "@/components/Auth";

export default function UserScreen() {
  return (
    <View className="mt-10 flex h-screen">
      <Text className="text-yellow-500 text-3xl bg-yellow-100 font-bold">
        this is user page
      </Text>
      <Auth />
    </View>
  );
}
