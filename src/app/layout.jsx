import "./reset.css";
import "./index.css";
import { PHProvider } from "./providers";

export const metadata = {
  title: "Kapstan DevOps Bingo 2024",
  description: "Find out your DevOps persona by playing the DevOps Bingo",
  openGraph: {
    images: [{ url: "https://devops-bingo.demo.kapstan.app/bingo.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <PHProvider>
        <body>
          <div id="root">{children}</div>
        </body>
      </PHProvider>
    </html>
  );
}
