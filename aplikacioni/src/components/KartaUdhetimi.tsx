import Link from "next/link";
import type { Udhetim } from "../lib/udhetimet";

interface Props {
  udhetim: Udhetim;
}

const cardStyle: React.CSSProperties = {
  display: "block",
  backgroundColor: "#ffffff",
  padding: 16,
  borderRadius: 8,
  marginBottom: 12,
  border: "1px solid #e0e0e0",
  color: "#111827",
  textDecoration: "none",
};

const titleStyle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  marginBottom: 6,
};

const detailStyle: React.CSSProperties = {
  fontSize: 14,
  color: "#4b5563",
  marginBottom: 4,
};

const priceStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  color: "#007AFF",
};

const vendeStyle: React.CSSProperties = {
  marginTop: 6,
  color: "#15803d",
  fontWeight: 600,
};

const joVendeStyle: React.CSSProperties = {
  marginTop: 6,
  color: "#dc2626",
  fontWeight: 600,
};

export const KartaUdhetimi = ({ udhetim }: Props) => {
  return (
    <Link href={`/udhetimi/${udhetim.id}`} style={cardStyle}>
      <div style={titleStyle}>
        {udhetim.nisja} ➔ {udhetim.destinacioni}
      </div>
      <div style={detailStyle}>Ora: {udhetim.ora}</div>
      <div style={detailStyle}>Vendtakimi: {udhetim.vendtakimi}</div>
      <div style={priceStyle}>Vende: {udhetim.vende}</div>
      <div style={udhetim.vende > 0 ? vendeStyle : joVendeStyle}>
        {udhetim.vende > 0
          ? `Vende të lira: ${udhetim.vende}`
          : "Nuk ka vende të lira"}
      </div>
    </Link>
  );
};
