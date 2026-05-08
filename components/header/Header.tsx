import { User } from "lucide-react";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-10 py-5 border-b bg-white">
            <h1 className="text-2xl font-bold text-blue-600">
                HandyPro
            </h1>

            <nav className="flex gap-8 text-gray-700">
                <a href="#">Services</a>
                <a href="#">Providers</a>
                <a href="#">My Requests</a>

                <User className="w-6 h-6 text-blue-500" />
            </nav>
        </header>
    );
}