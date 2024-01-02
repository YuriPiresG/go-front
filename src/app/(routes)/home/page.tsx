import AccountsTable from "@/components/AccountsTable";
import CreateAccount from "@/components/CreateAccount";
import { Button } from "@/components/ui/button";

export default async function page() {
  return (
    <>
      <div className="">
        <CreateAccount />
        <AccountsTable />
      </div>
    </>
  );
}
