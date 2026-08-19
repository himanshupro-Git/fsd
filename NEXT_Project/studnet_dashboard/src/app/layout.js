import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
        
        <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-black ">Welcome to the Home Page</h1>

          <div className="flex gap-6">
            <Link href="/student" className="text-black">Student</Link>
            <Link href="/settings" className="text-black">Settings</Link>
            <Link href="/courses" className="text-black">Courses</Link>
            <Link href="/login" className="text-black">login</Link>
          </div>
        </nav>
        
        <main className="flex-1 p-6">
          {children}
        </main>

      </body>
    </html>
  );
}