import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Explore the portfolio of Levente Otta, a Senior Software Engineer specializing in building scalable, secure, and performant backend and frontend applications in Laravel and NextJs.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const meImageData = await readFile(join(process.cwd(), "src/assets/images/me.png"));
  const meImageSrc = Uint8Array.from(meImageData).buffer;

  const greatVibesFontData = await readFile(join(process.cwd(), "src/assets/fonts/GreatVibes-Regular.ttf"));
  const greatVibesFont = Uint8Array.from(greatVibesFontData).buffer;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: "#d8d8d8",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={meImageSrc}
          alt="Levente Otta"
          height="80%"
          style={{
            borderRadius: "0.5rem",
            border: "5px solid #000000",
            padding: "1rem",
            fontFamily: "GreatVibes",
          }}
          className="rounded-lg"
        />
        <p>Levente Otta</p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "GreatVibes",
          data: greatVibesFont,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
