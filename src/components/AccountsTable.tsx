import { useGetAccounts } from "@/app/hooks/getAccounts";
import { TbUserEdit } from "react-icons/tb";
import { IoPersonRemoveOutline } from "react-icons/io5";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default async function AccountsTable() {
  const accountsData = await useGetAccounts();
  return (
    <div>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Balance</TableHead>
            <TableHead>Payments</TableHead>
            <TableHead>Edit</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accountsData.accounts.map((account) => (
            <TableRow key={account.ID}>
              <TableCell className="font-medium">{account.ID}</TableCell>
              <TableCell>{account.CreatedAt}</TableCell>
              <TableCell>{account.UpdatedAt}</TableCell>
              <TableCell>{account.Balance}</TableCell>
              <TableCell>
                {account.Payments.length}
              </TableCell>
              <TableCell>
                <button>
                  <TbUserEdit />
                </button>
              </TableCell>
              <TableCell>
                <button>
                  <IoPersonRemoveOutline />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
