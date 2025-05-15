"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function FreelanceFilterPanel() {
  const [budgetRange, setBudgetRange] = useState([0])

  return (
    <div className="my-6">
      <div className="bg-gradient-to-r from-purple-100 to-indigo-50 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="relative col-span-1 md:col-span-2">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input placeholder="Kalit so'z bo'yicha qidirish" className="pl-10" />
          </div>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Kategoriya" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="programming">Dasturlash va texnologiya</SelectItem>
              <SelectItem value="design">Dizayn va ijod</SelectItem>
              <SelectItem value="marketing">Marketing va reklama</SelectItem>
              <SelectItem value="translation">Tarjima va til</SelectItem>
              <SelectItem value="business">Biznes va moliya</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button className="flex-1 bg-purple-600 hover:bg-purple-700">Qidirish</Button>

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
                    <Label>Loyiha turi</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fixed" />
                        <label
                          htmlFor="fixed"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Belgilangan narx
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hourly" />
                        <label
                          htmlFor="hourly"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Soatlik to'lov
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Byudjet ($)</Label>
                      <span className="text-sm">${budgetRange[0]}+</span>
                    </div>
                    <Slider
                      defaultValue={[0]}
                      max={5000}
                      step={100}
                      value={budgetRange}
                      onValueChange={setBudgetRange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Ko'nikmalar</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="react" />
                        <label
                          htmlFor="react"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          React
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="nodejs" />
                        <label
                          htmlFor="nodejs"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Node.js
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="figma" />
                        <label
                          htmlFor="figma"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Figma
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="photoshop" />
                        <label
                          htmlFor="photoshop"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Photoshop
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Loyiha davomiyligi</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Davomiylikni tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-than-1-week">1 haftadan kam</SelectItem>
                        <SelectItem value="1-2-weeks">1-2 hafta</SelectItem>
                        <SelectItem value="2-4-weeks">2-4 hafta</SelectItem>
                        <SelectItem value="1-3-months">1-3 oy</SelectItem>
                        <SelectItem value="3-6-months">3-6 oy</SelectItem>
                        <SelectItem value="more-than-6-months">6 oydan ko'p</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Qidirish</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Quick filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Select>
            <SelectTrigger className="h-8 w-auto min-w-[150px]">
              <SelectValue placeholder="Loyiha turi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fixed">Belgilangan narx</SelectItem>
              <SelectItem value="hourly">Soatlik to'lov</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-8 w-auto min-w-[150px]">
              <SelectValue placeholder="Byudjet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-100">$0 - $100</SelectItem>
              <SelectItem value="100-500">$100 - $500</SelectItem>
              <SelectItem value="500-1000">$500 - $1000</SelectItem>
              <SelectItem value="1000-5000">$1000 - $5000</SelectItem>
              <SelectItem value="5000+">$5000+</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-8 w-auto min-w-[150px]">
              <SelectValue placeholder="Davomiyligi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="less-than-1-week">1 haftadan kam</SelectItem>
              <SelectItem value="1-2-weeks">1-2 hafta</SelectItem>
              <SelectItem value="2-4-weeks">2-4 hafta</SelectItem>
              <SelectItem value="1-3-months">1-3 oy</SelectItem>
              <SelectItem value="3-6-months">3-6 oy</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
