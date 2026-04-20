import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MD CONSTRUCTIONS",
  description: "Engineer your dreams with us. Kanchipuram based construction and architectural design firm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <body>
        {children}
        <a
          href="https://wa.me/919876543210?text=Hi%20sir"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 1000,
            backgroundColor: "#25D366",
            borderRadius: "50%",
            width: "56px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.75-1.813A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.97 0-3.82-.538-5.41-1.47l-.39-.23-4.6 1.077 1.1-4.48-.25-.4A9.96 9.96 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.47-7.47c-.3-.15-1.77-.873-2.044-.972-.274-.1-.474-.15-.673.15-.2.3-.773.972-.947 1.172-.174.2-.348.225-.648.075-.3-.15-1.267-.467-2.413-1.488-.892-.795-1.494-1.776-1.67-2.076-.174-.3-.018-.462.13-.61.135-.134.3-.35.45-.524.15-.175.2-.3.3-.5.1-.2.05-.374-.025-.524-.075-.15-.673-1.622-.922-2.22-.243-.583-.49-.504-.673-.513l-.573-.01c-.2 0-.524.075-.798.374-.274.3-1.047 1.022-1.047 2.494s1.072 2.893 1.222 3.093c.15.2 2.11 3.22 5.113 4.514.715.308 1.273.492 1.708.63.717.228 1.37.196 1.886.119.575-.086 1.77-.724 2.02-1.423.25-.7.25-1.3.175-1.423-.075-.124-.274-.2-.574-.35z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
