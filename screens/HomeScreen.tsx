import * as React from "react";
import tw from "tailwind-react-native-classnames";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function Home({
  navigation,
  route,
}: RootTabScreenProps<"Home">) {
  return (
    <View style={tw.style("flex-1 items-center justify-center")}>
      <Text style={tw.style("text-3xl ios:text-2xl")}>Tab One</Text>
      <View
        style={tw.style("my-4 h-1 w-80")}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>{route.params.params.name}</Text>
    </View>
  );
}
