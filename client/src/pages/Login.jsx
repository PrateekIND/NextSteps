import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleRemember = () => setRememberMe((prev) => !prev);

  return (
    <section className="w-full py-20 min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-100 to-slate-200">
      <Card className="w-full max-w-md shadow-lg border-slate-200 rounded-2xl">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-slate-800">Welcome Back</h2>
          <p className="text-center text-slate-600">Log in to continue your journey ✨</p>

          <form className="space-y-4">
            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="border border-slate-300"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="border border-slate-300 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me Switch */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <div
                  className={`w-10 h-5 flex items-center bg-slate-300 rounded-full p-1 duration-300 ${
                    rememberMe ? "bg-blue-500" : ""
                  }`}
                  onClick={toggleRemember}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                      rememberMe ? "translate-x-5" : ""
                    }`}
                  ></div>
                </div>
                Remember me
              </label>

              <a
                href="#"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition"
            >
              Log In
            </button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Login;
