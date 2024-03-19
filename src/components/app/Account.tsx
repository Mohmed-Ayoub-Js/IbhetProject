import { Info, Settings } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'
import { useState } from 'react'
import { Input } from '../ui/input'

const Account = () => {
  const images = [
    { image: '1.jpg', title: 'صورة فلسطين' },
    { image: '2.jpg', title: 'صورة فلسطين' },
    { image: '3.webp', title: 'صورة فلسطين' },
  ]
  const [image, setImage] = useState('')
  function change() {
    localStorage.setItem('background', image)
  }
  return (
    <div className="flex justify-between items-center flex-row ">
      <Button className="m-5">ادارة البيانات</Button>
      <div className="m-5 flex justify-center items-center flex-row gap-4">
        <Drawer>
          <DrawerTrigger>
            <Settings />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader dir="rtl">
              <DrawerTitle>الاعدادات</DrawerTitle>
            </DrawerHeader>
            <DrawerFooter>
              <div className="grid grid-cols-2 gap-6">
                {images.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setImage(item.image)
                      setTimeout(() => {
                        change()
                      }, 200)
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      width={250}
                      height={250}
                      className="rounded-lg cursor-pointer hover:scale-105"
                      style={{ transition: '0.5s' }}
                    />
                  </div>
                ))}
              </div>
              او
              <div>
                <Input
                  placeholder="رابط الصورة"
                  onChange={(e) => {
                    setImage(e.target.value)
                    setTimeout(() => {
                      change()
                    }, 200)
                  }}
                />
              </div>
              <p className="hover:underline cursor-pointer">
                المزيد من الاعدادات
              </p>
              <DrawerClose>
                <Button variant="outline">غلق</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Info />
      </div>
    </div>
  )
}

export default Account
