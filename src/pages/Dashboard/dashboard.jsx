import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import UserDelete from "@/components/svgs/user-delete.svg"
import UserEdit from "@/components/svgs/user-edit.svg"
import Search from "@/components/svgs/search.svg"
import Plus from "@/components/svgs/plus.svg"
import { Label } from "@/components/ui/label"

function Dashboard() {

  return (

    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-semibold">Clientes</h1>

      <div className="flex items-center justify-between">

        <form className="flex items-center gap-2">
          <Input name="name" placeholder="Nome do cliente" className="w-auto"></Input>
          <Input name="email" placeholder="Email do cliente" className="w-auto"></Input>

          <Button type="submit" variant="link">
            <img className="mr-2" src={Search} width={15} height={15} loading="lazy" alt="Ícone de Search"/>
            Filtrar clientes
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <img className="mr-2" src={Plus} width={18} height={18} loading="lazy" alt="Ícone de Plus"/>
              Novo cliente
            </Button>
          </DialogTrigger>

          <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Novo cliente
                </DialogTitle>

                <DialogDescription>
                  Cadastrar um novo cliente no sistema.
                </DialogDescription>
              </DialogHeader>

              <form className="space-y-6">
                <div className="grid grid-cols-4 items-center text-right gap-3">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" className="col-span-3"></Input>
                </div>

                <div className="grid grid-cols-4 items-center text-right gap-3">
                  <Label htmlFor="email" type="email">Email</Label>
                  <Input id="email" className="col-span-3"></Input>
                </div>

                <div className="grid grid-cols-4 items-center text-right gap-3">
                  <Label htmlFor="age">Idade</Label>
                  <Input id="age" type="number" className="col-span-3"></Input>
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="ghost">Cancelar</Button>
                  </DialogClose>

                  <Button type="submit">Salvar</Button>
                </DialogFooter>
              </form>
          </DialogContent>
        </Dialog>
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
