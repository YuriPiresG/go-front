"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogDemo() {
  const [balance, setBalance] = useState(0);

  const handleBalanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBalance(parseFloat(event.target.value));
  };
  const handleFormSubmit = () => {
    fetch("http://localhost:3000/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ balance }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded bg-black text-white hover:bg-black hover:text-white"
        >
          Create a new account
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Create account</DialogTitle>
          <DialogDescription>
            Register here an account to the platform
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="balance" className="text-right">
              Balance
            </Label>
            <Input
              type="number"
              id="balance"
              value={balance}
              onChange={handleBalanceChange}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            className="border border-black hover:border-green-600 hover:text-white hover:bg-black"
            type="submit"
            onClick={handleFormSubmit}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
