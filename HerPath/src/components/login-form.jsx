import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-[600px] bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Left Side - Illustration */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-pink-50 to-rose-50 items-center justify-center p-8">
        <div className="flex items-end gap-2">
          {/* Woman 1 - Light brown hair, white pantsuit */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-amber-200 rounded-full mb-2"></div>
            <div className="w-12 h-20 bg-white rounded-t-lg"></div>
          </div>
          {/* Woman 2 - Dark brown hair, cream pantsuit */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-amber-800 rounded-full mb-2"></div>
            <div className="w-12 h-20 bg-amber-50 rounded-t-lg"></div>
          </div>
          {/* Woman 3 - Blonde hair, pink pantsuit */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-300 rounded-full mb-2"></div>
            <div className="w-12 h-20 bg-pink-400 rounded-t-lg"></div>
          </div>
          {/* Woman 4 - Dark skin, afro, black pantsuit */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full mb-2"></div>
            <div className="w-12 h-20 bg-gray-900 rounded-t-lg"></div>
          </div>
          {/* Woman 5 - Brown hair, cream pantsuit */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-amber-600 rounded-full mb-2"></div>
            <div className="w-12 h-20 bg-amber-50 rounded-t-lg"></div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Welcome Back
                </p>
                <h1 className="text-3xl font-bold text-gray-900">
                  Log In to your Account
                </h1>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="johnsondoe@nomail.com"
                    {...register("email", { required: true })}
                    className="w-full"
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...register("password", { required: true })}
                      className="w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" {...register("remember")} />
                    <Label
                      htmlFor="remember"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Remember me
                    </Label>
                  </div>
                  <a
                    href="#forgot"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Forgot Password?
                  </a>
                </div>

                {/* Continue Button */}
                <Button
                  type="submit"
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 h-12 text-base font-semibold"
                >
                  CONTINUE
                </Button>
              </form>

              {/* Separator */}
              <div className="relative flex items-center py-4">
                <Separator />
                <span className="absolute left-1/2 -translate-x-1/2 bg-white px-4 text-sm text-gray-500">
                  Or
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 border-gray-300 hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      G
                    </div>
                    <span className="text-gray-700">Log In with Google</span>
                  </div>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 border-gray-300 hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      f
                    </div>
                    <span className="text-gray-700">Log In with Facebook</span>
                  </div>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 border-gray-300 hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">A</span>
                    </div>
                    <span className="text-gray-700">Log In with Apple</span>
                  </div>
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center pt-2">
                <p className="text-sm text-gray-600">
                  New User?{" "}
                  <a
                    href="#signup"
                    className="text-blue-600 underline font-medium hover:text-blue-700"
                  >
                    SIGN UP HERE
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
