import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Input } from '../ui/input'

const Content = () => {
  return (
    <div className="w-full h-[94vh] flex justify-center items-center flex-col">
      <Card className="w-[700px] bg-white">
        <CardHeader>
          <CardTitle className="flex justify-center items-center flex-col">
            <img src="logo.webp" alt="" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="البحث" className="mt-5 mb-5" />
          <p>
            <Button className="w-full">البحث</Button>
          </p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  )
}

export default Content
