import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Udhetim } from "../lib/udhetimet";

interface Props {
  udhetim: Udhetim;
}

export const KartaUdhetimi = ({ udhetim }: Props) => {
  return (
    <Link href={`/udhetimi/${udhetim.id}`} asChild>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.title}>
          {udhetim.nisja} ➔ {udhetim.destinacioni}
        </Text>
        <Text style={styles.detail}>Data: {udhetim.data}</Text>
        <Text style={styles.price}>Çmimi: {udhetim.cmimi}</Text>
        <Text style={udhetim.vendeTeLira > 0 ? styles.vende : styles.joVende}>
          {udhetim.vendeTeLira > 0
            ? `Vende të lira: ${udhetim.vendeTeLira}`
            : "Nuk ka vende të lira"}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#333",
  },
  detail: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },
  vende: {
    marginTop: 6,
    color: "green",
    fontWeight: "600",
  },
  joVende: {
    marginTop: 6,
    color: "red",
    fontWeight: "600",
  },
});
