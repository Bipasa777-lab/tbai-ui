"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const OTP_LENGTH = 4;
const DUMMY_OTP = "1234";

export default function ChangePasswordPage() {
  const router = useRouter();

  const [step, setStep] = useState<"initial" | "otp" | "forgot">("initial");
  const [isLoading, setIsLoading] = useState(false);
  const [otpError, setOtpError] = useState(false);

  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const otpRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOtpOpen(true);
      setStep("otp");
    }, 1000);
  };

  const handleForgot = () => {
    setStep("forgot");
    setIsOtpOpen(true);
  };

  const handleOtpSubmit = () => {
    setIsLoading(true);
    setOtpError(false);

    const enteredOtp = otp.join("");

    setTimeout(() => {
      setIsLoading(false);
      if (enteredOtp === DUMMY_OTP) {
        setIsOtpOpen(false);
        alert("Password changed successfully!");
        router.push("/profile");
      } else {
        setOtpError(true);
        setOtp(Array(OTP_LENGTH).fill(""));
        otpRefs.current[0]?.focus();
      }
    }, 1000);
  };

  const handleOtpChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < OTP_LENGTH - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const otpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Change Password
      </h2>

      {step === "initial" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-md border"
        >
          <div className="space-y-2">
            <Label htmlFor="oldPassword">Old Password</Label>
            <Input
              id="oldPassword"
              name="oldPassword"
              type="password"
              value={form.oldPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              name="newPassword"
              type="password"
              value={form.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between pt-2">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="animate-spin h-4 w-4" />
              ) : (
                "Submit"
              )}
            </Button>
            <button
              type="button"
              onClick={handleForgot}
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      )}

      {step === "forgot" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleOtpSubmit();
          }}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-md border"
        >
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              name="newPassword"
              type="password"
              value={form.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="animate-spin h-4 w-4" />
            ) : (
              "Reset Password"
            )}
          </Button>
        </form>
      )}

      <Dialog open={isOtpOpen} onOpenChange={setIsOtpOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Enter OTP</DialogTitle>
          </DialogHeader>

          {otpError && (
            <Alert variant="destructive" className="mb-4">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertDescription>Incorrect OTP. Please try again.</AlertDescription>
            </Alert>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleOtpSubmit();
            }}
            className="space-y-4"
          >
            <div className="flex justify-center gap-3">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  className="w-14 h-14 text-center text-xl font-medium"
                  ref={(el) => {
                    if (el) otpRefs.current[index] = el;
                  }}
                />
              ))}
            </div>
            <Button
              type="submit"
              disabled={isLoading || !otpComplete}
              className="w-full mt-2"
            >
              {isLoading ? (
                <Loader2 className="animate-spin h-4 w-4" />
              ) : (
                "Verify"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
