import { ImageResponse } from "next/server";
import { FC } from "react";

export const Component: FC<{ text: string }> = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        whiteSpace: "pre-wrap",
        textAlign: "center",
        backgroundColor: "#fbfdfc",
      }}
    >
      <span
        style={{
          fontFamily: "Inter",
          fontWeight: "Black",
          fontSize: "80px",
          color: "white",
          backgroundImage: "linear-gradient(60deg, #0081f1, #0e9888, #299764)",
          marginBottom: "40px",
          padding: "0 20px 8px 20px",
          borderRadius: "8px",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export const OgImage = (text: string) =>
  new ImageResponse(<Component text={text} />, {
    width: 1200,
    height: 630,
  });
