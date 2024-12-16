import { Image, Pressable, Text, View } from "react-native";

const placeholderImage = require("@/assets/images/react-logo.png")

export default function AboutScreen() {
    return (
        <View>
            <Image source={placeholderImage} className="w-20 h-20" alt="React Logo" />
        </View>
    )
}