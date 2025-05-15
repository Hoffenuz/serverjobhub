import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    id: "free",
    name: "Bepul",
    price: 0,
    description: "Asosiy imkoniyatlar bilan boshlang",
    features: [
      { name: "5 ta vakansiya e'lon qilish", included: true },
      { name: "3 ta rezyume ko'rish", included: true },
      { name: "Standart qidiruv filtrlari", included: true },
      { name: "Cheklangan statistika", included: true },
      { name: "Vakansiyalarni oldinga chiqarish", included: false },
      { name: "Nomzodlarni saqlash", included: false },
      { name: "Premium support", included: false },
      { name: "Kengaytirilgan statistika", included: false },
    ],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: 29.99,
    description: "Professional foydalanuvchilar uchun",
    features: [
      { name: "Cheksiz vakansiya e'lon qilish", included: true },
      { name: "50 ta rezyume ko'rish", included: true },
      { name: "Kengaytirilgan qidiruv filtrlari", included: true },
      { name: "Batafsil statistika", included: true },
      { name: "Vakansiyalarni oldinga chiqarish", included: true },
      { name: "Nomzodlarni saqlash", included: true },
      { name: "Premium support", included: false },
      { name: "Kengaytirilgan statistika", included: false },
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 99.99,
    description: "Katta kompaniyalar uchun",
    features: [
      { name: "Cheksiz vakansiya e'lon qilish", included: true },
      { name: "Cheksiz rezyume ko'rish", included: true },
      { name: "Kengaytirilgan qidiruv filtrlari", included: true },
      { name: "Batafsil statistika", included: true },
      { name: "Vakansiyalarni oldinga chiqarish", included: true },
      { name: "Nomzodlarni saqlash", included: true },
      { name: "Premium support", included: true },
      { name: "Kengaytirilgan statistika", included: true },
    ],
    popular: false,
  },
]

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Obuna rejalarimiz</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O'zingizga mos keluvchi rejani tanlang va JobHub platformasining barcha imkoniyatlaridan foydalaning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                    Eng mashhur
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground ml-1">/oyiga</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {feature.included ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`} asChild>
                    <Link href={`/subscription/checkout/${plan.id}`}>
                      {plan.id === "free" ? "Boshlash" : "Obuna bo'lish"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Ko'p so'raladigan savollar</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Obunani qanday bekor qilaman?</h3>
                <p className="text-muted-foreground">
                  Obunani istalgan vaqtda profil sozlamalaridan bekor qilishingiz mumkin. Joriy obuna davri tugaguncha
                  barcha imkoniyatlardan foydalanishda davom etasiz.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Rejalarni o'zgartirish mumkinmi?</h3>
                <p className="text-muted-foreground">
                  Ha, istalgan vaqtda rejangizni yangilashingiz yoki pasaytirishingiz mumkin. Yangi reja narxi keyingi
                  to'lov davridan boshlab qo'llaniladi.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">To'lov usullari qanday?</h3>
                <p className="text-muted-foreground">
                  Biz kredit kartalar, Payme va Click orqali to'lovlarni qabul qilamiz. Barcha to'lovlar xavfsiz va
                  shifrlangan.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Pulni qaytarish siyosati qanday?</h3>
                <p className="text-muted-foreground">
                  Agar xizmatimizdan mamnun bo'lmasangiz, obuna boshlanganidan so'ng 7 kun ichida to'liq pulni qaytarib
                  olishingiz mumkin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BottomNavigation />
    </main>
  )
}
