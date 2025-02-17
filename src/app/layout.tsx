import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Second Test Next",
  description: "Transforming Secure, Modern Development with AdaptsAI",
  openGraph: {
    title: "Second Test Next",
    description: "AI Chatbots don’t create enterprse-grade apps",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
        alt: "Second Test Next Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Test Next",
    description: "AI Chatbots don’t create enterprse-grade apps",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
