import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">JobHub</h3>
            <p className="text-muted-foreground">
              O'zbekistonda ish izlash va ishchi topish uchun eng yaxshi platforma
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Bog'lanish
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  Ko'p so'raladigan savollar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kategoriyalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/it" className="text-muted-foreground hover:text-primary">
                  IT va Zamonaviy kasblar
                </Link>
              </li>
              <li>
                <Link href="/categories/davlat" className="text-muted-foreground hover:text-primary">
                  Davlat ishlari
                </Link>
              </li>
              <li>
                <Link href="/categories/tibbiyot" className="text-muted-foreground hover:text-primary">
                  Tibbiyot sohasi
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-primary">
                  Barcha kategoriyalar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Bog'lanish</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">info@jobhub.uz</li>
              <li className="text-muted-foreground">+998 71 123 45 67</li>
              <li className="flex space-x-4 mt-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} JobHub. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
