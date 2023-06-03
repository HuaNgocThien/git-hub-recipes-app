import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";

const Splash = () => {
  return (
    <SafeAreaView style={styles.backgroundImage}>
      <Text>HOME</Text>
    </SafeAreaView>
  );
};

export default React.memo(Splash);
