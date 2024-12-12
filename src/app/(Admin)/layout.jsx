
import AdminLayout from "@/Layouts/AdminLayout";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function AdminRootLayout({ children }) {
    return (
        <html lang="en" className="" >
            <body className={` antialiased`} >
                <AdminLayout>{children}</AdminLayout>
            </body>
        </html>
    );
}
