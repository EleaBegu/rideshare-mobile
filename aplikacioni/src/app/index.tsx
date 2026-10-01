import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { udhetimet } from "../lib/udhetimet";
import { KartaUdhetimi } from "../components/KartaUdhetimi";

export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Udhëtimet e Disponueshme</Text>
      {udhetimet.map((u) => (
        <KartaUdhetimi key={u.id} udhetim={u} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    maxWidth: 480,
    width: "100%",
    alignSelf: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
});

