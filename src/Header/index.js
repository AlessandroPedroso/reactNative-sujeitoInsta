import React from "react";

import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require("../img/logo.png")} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.send} source={require("../img/send.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: "#FFF",
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.2,
    shadowColor: "#000",
    elevation: 2,
  },
  send: {
    width: 23,
    height: 23,
  },
});
