import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const RightSection = () => {
    return (
        <div className="w-1/2 flex flex-col justify-center ">
            <Card className="h-ful flex-col justify-center px-14 gap-16">
                <CardHeader>
                    <span className="text-5xl font-bold">Login</span>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div>
                            <Label>Email</Label>
                            <Input
                                type="text"
                                placeholder="example@email.com"
                                className="py-2 h-10 text-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Password</Label>
                            <Input
                                type="password"
                                placeholder="Your password"
                                className="py-2 h-10 text-lg"
                            />
                        </div>
                        <Button className="bg-[#13A4EC] rounded-md text-white font-bold py-3 drop-shadow-lg drop-shadow-gray-500">Login</Button>
                    </div>
                    <div>
                        <span> Don`t have an account yet?</span>
                        <Link href="/registo" className="text-[#13A4EC] font-semibold">
                            Create Account
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
