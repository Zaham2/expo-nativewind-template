import { Link } from "expo-router";
import { Text, View, Image } from "react-native";

const placeholderImage = require("@/assets/images/react-logo.png")

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={placeholderImage} alt="React Logo" className="w-10 h-10" />
      <Text className="text-2xl font-bold">Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about" className="text-blue-500">
        GO TO ABOUT
      </Link>
    </View>
  );
}
