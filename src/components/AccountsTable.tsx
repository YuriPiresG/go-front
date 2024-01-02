import { getAccounts } from "@/app/hooks/getAccounts";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "./ui/table";

export default async function AccountsTable() {
    const accountsData = await getAccounts();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Balance</TableHead>
            <TableHead className="text-right">Payments associated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accountsData.accounts.map((account) => (
            <TableRow key={account.ID}>
              <TableCell className="font-medium">{account.ID}</TableCell>
              <TableCell>{account.CreatedAt}</TableCell>
              <TableCell>{account.UpdatedAt}</TableCell>
              <TableCell>{account.Balance}</TableCell>
              <TableCell className="text-right">
                {account.Payments.length}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
