import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";

const Splash = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../../assets/splash.png")}
    >
      <View style={styles.container}>
        <Image
          source={require("../../../assets/logoWhite.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>100+ Premium Recipes</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.bigTitle}>Get </Text>
        <Text style={styles.bigTitle}>Cooking</Text>
        <Text style={styles.subTitle}>Simple way to destroy your home</Text>
        <Button onPress={() => navigation.navigate("Home")}>
          Start Cooking
        </Button>
      </View>
    </ImageBackground>
  );
};

export default React.memo(Splash);
