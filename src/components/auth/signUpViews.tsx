// src/components/RegisterForm.tsx
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, type SignUpPayload } from "@/features/auth/authThunks";
import type { AppDispatch, RootState } from "@/app/store";

//
const RegisterForm = ({ className }: React.ComponentProps<"div">) => {
  const dispatch = useDispatch<AppDispatch>();
  const { access, loading, error } = useSelector(
    (state: RootState) => state.auth_signup
  );

  //
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const navigate = useNavigate();

  //
  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== conPassword) {
      alert("Passwords do not match");
      return;
    }
    const SignUpPayload: SignUpPayload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: userName,
      password: password,
      confirm_password: conPassword,
    };
    dispatch(registerUser(SignUpPayload));
  };

  //

  useEffect(() => {
    if (access) {
      navigate("/");
      // clear form
      setFirstName("");
      setLastName("");
      setEmail("");
      setUserName("");
      setPassword("");
      setConPassword("");
      navigate("/");
    }
  }, [access, navigate]);

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="pt-32 pb-96">
        <Card className="w-[400px] mx-auto">
          <CardHeader>
            <div className="mx-auto">Register to your Account</div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleForm}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <label htmlFor="text">Name</label>
                  <div className="flex gap-x-1">
                    <Input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="first name"
                      required
                    />
                    <Input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="last name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div>
                  <Label>Username</Label>
                  <Input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="username"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label>Password</Label>
                  <div className="flex gap-x-1">
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password"
                      required
                    />
                    <Input
                      type="password"
                      value={conPassword}
                      onChange={(e) => setConPassword(e.target.value)}
                      placeholder="confirm password"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                  {error && <div className="text-red-500 text-sm">{error}</div>}
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link
                    className="underline underline-offset-4"
                    to={"../signin"}
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
