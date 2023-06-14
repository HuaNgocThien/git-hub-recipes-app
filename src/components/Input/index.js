import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { View } from "react-native";
import { TextInput } from "react-native";
import colors from "../../constants/colors";
import { Pressable } from "react-native";

const Input = ({ placeholder, showSearchIcon, pressable, onPress, style }) => {
  const renderInput = () => (
    <View style={[styles.container, style]}>
      {showSearchIcon ? (
        <Image
          style={styles.icon}
          source={require("../../../assets/search.png")}
        />
      ) : null}
      <TextInput
        editable={!pressable}
        placeholderTextColor={colors.ligthGrey}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
  if (pressable) {
    return <Pressable onPress={onPress}>{renderInput()}</Pressable>;
  }
  return renderInput();
};

Input.defaultProps = {
  placeholder: "Search recipe",
  showSearchIcon: true,
};

export default React.memo(Input);
