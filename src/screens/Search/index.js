import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input />
    </SafeAreaView>
  );
};

export default React.memo(Search);
