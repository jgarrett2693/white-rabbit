import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "White Rabbit Productions",
  description: "Luxury creative production, consulting, wellness, property, and bespoke experiences."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          {children}
          <footer className="footer">
            <span>White Rabbit Productions</span>
            <span>Matte Black • Brushed Silver • Blood Red</span>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
