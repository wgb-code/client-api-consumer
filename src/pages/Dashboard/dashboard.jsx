import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Dashboard() {

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Cadastro de Usuários</CardTitle>
          <CardDescription>Preencha o formulário abaixo para cadastrar um novo usuário.</CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Nome do usuário" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Email do usuário" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="age">Idade</Label>
                <Input id="age" type="number" placeholder="Idade do usuário" />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancelar</Button>
          <Button>Cadastrar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Dashboard
