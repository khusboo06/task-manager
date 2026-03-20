


"use client";

import { useState } from "react";
import api from "@/services/api";
import Link from "next/link";
import toast from "react-hot-toast"; // 👈 ADD

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidPassword = (password: string) => {
        return password.length >= 6; // 👈 ADD
    };

    const login = async () => {

        // ✅ EMAIL VALIDATION
        if (!isValidEmail(email)) {
            return toast.error("Enter a valid email (e.g. user@gmail.com)");
        }

        // ✅ PASSWORD VALIDATION
        if (!isValidPassword(password)) {
            return toast.error("Password must be at least 6 characters");
        }

        try {
            const res = await api.post("/auth/login", { email, password });
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken); 
            toast.success("Login successful 🎉"); // 👈 ADD
            window.location.href = "/dashboard";
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Login failed"); // 👈 ADD
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-slate-950">
            <div className="bg-white/10 p-8 rounded-2xl w-80 backdrop-blur-lg">
                <h2 className="text-xl font-bold mb-4">🔐 Login</h2>

                <input
                    className="w-full p-2 mb-3 rounded bg-black/30"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="w-full p-2 mb-4 rounded bg-black/30"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={login} className="w-full bg-indigo-500 py-2 rounded">
                    Login
                </button>

                <p className="text-center text-gray-400 mt-4 text-sm">
                    Don’t have an account?{" "}
                    <Link href="/register" className="text-indigo-400 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}