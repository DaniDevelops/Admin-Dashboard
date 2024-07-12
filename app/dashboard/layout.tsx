import type { Metadata } from "next";

import Navbar from "@/components/dashboard/navbar/Navbar";
import styles from "@/components/dashboard/dashboard.module.css";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Admin  dashboard",
  description: "An Admin Dashboard created with Nextjs",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <aside className={styles.menu}>
            <Sidebar />
          </aside>
          <div className={styles.content}>
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
