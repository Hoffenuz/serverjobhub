"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export function FilterPanel() {
  const [showAllFilters, setShowAllFilters] = useState(false)
  const [experienceRange, setExperienceRange] = useState([0])
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch = () => {
    // In a real app, this would trigger a search with the current filters
    console.log("Searching with:", { searchQuery, location, experienceRange })
  }

  return (
    <div className="my-6">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="relative col-span-1 md:col-span-2">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Kalit so'z bo'yicha qidirish"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Viloyat" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toshkent">Toshkent</SelectItem>
              <SelectItem value="andijon">Andijon</SelectItem>
              <SelectItem value="xorazm">Xorazm</SelectItem>
              <SelectItem value="qashqadaryo">Qashqadaryo</SelectItem>
              <SelectItem value="jizzax">Jizzax</SelectItem>
              <SelectItem value="buxoro">Buxoro</SelectItem>
              <SelectItem value="samarqand">Samarqand</SelectItem>
              <SelectItem value="fargona">Farg'ona</SelectItem>
              <SelectItem value="surxandaryo">Surxondaryo</SelectItem>
              <SelectItem value="namangan">Namangan</SelectItem>
              <SelectItem value="navoiy">Navoiy</SelectItem>
              <SelectItem value="sirdaryo">Sirdaryo</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button className="flex-1" onClick={handleSearch}>
              Qidirish
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Kengaytirilgan qidiruv</SheetTitle>
                  <SheetDescription>Qidiruv parametrlarini sozlang</SheetDescription>
                </SheetHeader>

                <div className="space-y-6 py-6">
                  <div className="space-y-2">
                    <Label>Tuman</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Tumanni tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toshkent">Toshkent</SelectItem>
                        <SelectItem value="qoqon">Qo'qon</SelectItem>
                        <SelectItem value="urganch">Urganch</SelectItem>
                        <SelectItem value="chust">Chust</SelectItem>
                        <SelectItem value="jizzax">Jizzax</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Ish turi</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Ish turini tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">IT va dasturlash</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="moliya">Moliya</SelectItem>
                        <SelectItem value="talim">Ta'lim</SelectItem>
                        <SelectItem value="savdo">Savdo</SelectItem>
                        <SelectItem value="tibbiyot">Tibbiyot</SelectItem>
                        <SelectItem value="qurilish">Qurilish</SelectItem>
                        <SelectItem value="transport">Transport</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Bandlik turi</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Bandlik turini tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">To'liq stavka</SelectItem>
                        <SelectItem value="part-time">Yarim stavka</SelectItem>
                        <SelectItem value="remote">Masofaviy</SelectItem>
                        <SelectItem value="freelance">Frilanser</SelectItem>
                        <SelectItem value="internship">Amaliyot</SelectItem>
                        <SelectItem value="contract">Shartnoma asosida</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Ta'lim darajasi</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Ta'lim darajasini tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Talab qilinmaydi</SelectItem>
                        <SelectItem value="secondary">O'rta</SelectItem>
                        <SelectItem value="special">O'rta maxsus</SelectItem>
                        <SelectItem value="bachelor">Bakalavr</SelectItem>
                        <SelectItem value="master">Magistr</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Tajriba (yil)</Label>
                      <span className="text-sm">{experienceRange[0]} yil+</span>
                    </div>
                    <Slider
                      defaultValue={[0]}
                      max={10}
                      step={1}
                      value={experienceRange}
                      onValueChange={setExperienceRange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Maosh</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="Minimum" type="number" />
                      <Input placeholder="Maximum" type="number" />
                    </div>
                  </div>

                  <Button className="w-full" onClick={handleSearch}>
                    Qidirish
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Quick filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Select>
            <SelectTrigger className="h-8 w-auto min-w-[150px]">
              <SelectValue placeholder="Bandlik turi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full-time">To'liq stavka</SelectItem>
              <SelectItem value="part-time">Yarim stavka</SelectItem>
              <SelectItem value="remote">Masofaviy</SelectItem>
              <SelectItem value="freelance">Frilanser</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-8 w-auto min-w-[150px]">
              <SelectValue placeholder="Ta'lim darajasi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Talab qilinmaydi</SelectItem>
              <SelectItem value="secondary">O'rta</SelectItem>
              <SelectItem value="special">O'rta maxsus</SelectItem>
              <SelectItem value="bachelor">Bakalavr</SelectItem>
              <SelectItem value="master">Magistr</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-8 w-auto min-w-[150px]">
              <SelectValue placeholder="Tajriba" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Tajriba talab qilinmaydi</SelectItem>
              <SelectItem value="1">1 yildan kam</SelectItem>
              <SelectItem value="1-3">1-3 yil</SelectItem>
              <SelectItem value="3-5">3-5 yil</SelectItem>
              <SelectItem value="5+">5 yildan ko'p</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
