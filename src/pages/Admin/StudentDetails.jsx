import { Button } from '@/components/ui/button';
import { AdminStudentsDatatable } from '@/reUsableComponents/AdminStudentDetails';
import {  FrenchiseReguestDatatable } from '@/reUsableComponents/FrenchiseReguestDatatable';
import { ArrowUpDown } from 'lucide-react';

// const userColumns = [
//   {
//     accessorKey: "name",
//     header: ({ column }) => (
//       <Button
//         variant="ghost"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         Name <ArrowUpDown />
//       </Button>
//     ),
//     cell: ({ row }) => <div>{row.getValue("name")}</div>,
//   },
//   {
//     accessorKey: "age",
//     header: "Age",
//     cell: ({ row }) => <div>{row.getValue("age")}</div>,
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//     cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
//   },
// ];

// const userData = [
//   {
//     id: "1",
//     name: "John Doe",
//     age: 29,
//     email: "john.doe@example.com",
//   },
//   {
//     id: "2",
//     name: "Jane Smith",
//     age: 34,
//     email: "jane.smith@example.com",
//   },
// ];

// const handleRowAction = (row) => {
//   alert(`Profile view action for: ${row.getValue("name")}`);
// };

function AdminStudentDetail() {

  return (
    <main>
      <div>
        <div className=''>
          {/* <DataTable columns={userColumns} data={userData} onRowAction={handleRowAction} />; */}
          <AdminStudentsDatatable />
        </div>
      </div>
    </main>
  )
}

export default AdminStudentDetail