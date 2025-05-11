import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

import api from "@/api/api_root";
import { useState } from "react";

export function RegisterForm({ className }: React.ComponentProps<"div">) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [conPassword, setConPassword] = useState<string>("");

  const sendData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    username: userName,
    password: password,
    confirm_password: conPassword,
  };

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== conPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await api.post("/signup/", sendData);
      alert("Account created successfully!");
      // automatic sign in after login...
      const loginRes = await api.post("/signin/", {
        username_or_email: email,
        password: password,
      });
      const { access, refresh } = loginRes.data;
      if (access) {
        localStorage.setItem("access", access);
        api.defaults.headers.common["Authorization"] = `Bearer ${access}`;
      }
      if (refresh) {
        localStorage.setItem("refress", refresh);
      }

      console.log(res.data);
    } catch (err: any) {
      console.error(err.response?.data);
      alert("Register failed: " + JSON.stringify(err.response?.data));
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="pt-32 pb-96">
        <div className=""></div>
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
                    <div>
                      <Input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="first name"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="last name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Username</Label>
                  <Input
                    id="email"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="username"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <div className="flex gap-x-1">
                    <div>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        id="password"
                        type="password"
                        value={conPassword}
                        onChange={(e) => setConPassword(e.target.value)}
                        placeholder="confirm password"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link className="underline underline-offset-4" to={"../signin"}>
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
