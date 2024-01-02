import { useState, useEffect } from "react";

interface Account {
  accounts: [
    {
      ID: number;
      CreatedAt: string;
      UpdatedAt: string;
      DeletedAt: string;
      Balance: number;
      Payments: [];
    }
  ];
}

export async function useGetAccounts() {
  const res = await fetch(`http://localhost:3000/account`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const account: Account = await res.json();
  return account;
}
