import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Categories from "../../components/Categories";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Input pressable onPress={() => navigation.navigate("Search")} />
      <Title text="Featured Recipes" />
      <Categories
        categories={["All", "Trending"]}
        selectedCategory="All"
        onCategoryPress={() => {}}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
