import color from "@/assets/styles/color";
import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface IProps {
  onClick?: () => void;
  style?: ViewStyle;
  title?: string;
  loading?: boolean;
  disabled?: boolean;
}

function Button(props: IProps) {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        borderRadius: 10,
        backgroundColor: props.disabled ? color.grey3 : color.pink3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        ...props.style,
      }}
      disabled={props.disabled}
      onPress={() => {
        if (props.loading) return;
        props.onClick?.();
      }}
    >
      {props.loading ? (
        <ActivityIndicator color={color.white1} />
      ) : (
        <Text style={{ color: color.white2, fontWeight: "bold", fontSize: 16 }}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
