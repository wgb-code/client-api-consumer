import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import UserDelete from "@/components/svgs/user-delete.svg"
import UserEdit from "@/components/svgs/user-edit.svg"

function Dashboard() {

  return (

    <div className="p-6 max-w-4xl mx-auto space-y-4">

      <div className="flex items-center justify-between">
        <Button>Novo cliente</Button>
      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead className="text-end">Edições</TableHead>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>

                  <TableCell>Usuário {i}</TableCell>
                  <TableCell>email{i}@gmail.com</TableCell>
                  <TableCell>18</TableCell>

                  <TableCell className="flex justify-end gap-2">

                    <Button variant="outline" size="icon">
                      <img src={UserEdit} width={15} height={15} loading="lazy" title="Editar Usuário" />
                    </Button>

                    <Button className="bg-zinc-950" size="icon">
                      <img src={UserDelete} width={15} height={15} loading="lazy" title="Excluir Usuário" />
                    </Button>

                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Dashboard
