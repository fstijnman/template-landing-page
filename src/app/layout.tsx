import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Corrected import for Geist_Mono if it's named that way
import "./globals.css";
import Navbar from "../components/Navbar"; // Or './components/Navbar' if 'components' is inside 'app'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing page", // You can customize this
  description: "Landing page for Product X", // And this
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* The className is applied to the body to make fonts available via CSS variables */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* <--- Add your Navbar component here */}
        <main style={{ paddingTop: '1rem', paddingLeft: '1rem', paddingRight: '1rem' }}> {/* Optional: Add padding to main content */}
          {children} {/* This is where your page content (e.g., from page.tsx) will be rendered */}
        </main>
        {/* You could add a Footer component here later if you wish */}
      </body>
    </html>
  );
}
