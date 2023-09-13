import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AnimeExpress",
    description: "AnimeExpress App",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} w-full`}>
                <Navbar />
                <main className="w-full">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
