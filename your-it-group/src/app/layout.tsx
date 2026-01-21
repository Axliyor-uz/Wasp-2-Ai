import "./globals.css";
import { AppProvider } from "@/lib/AppContext";
import Navigation from "@/components/layout/Navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Navigation />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

