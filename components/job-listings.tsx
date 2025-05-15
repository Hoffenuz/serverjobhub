"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, MapPin, GraduationCap, Clock, DollarSign, Building } from "lucide-react"
import { useData } from "@/lib/data-context"
import type { Job } from "@/lib/models"

export function JobListings() {
  const { jobs } = useData()
  const [displayJobs, setDisplayJobs] = useState<Job[]>([])

  useEffect(() => {
    // Display only the first 8 jobs
    setDisplayJobs(jobs.slice(0, 8))
  }, [jobs])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">So'nggi vakansiyalar</h2>
        <Link href="/vacancies" className="text-primary hover:underline">
          Barcha vakansiyalar
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayJobs.map((job) => (
          <Link href={`/jobs/${job.id}`} key={job.id}>
            <Card className="job-listing-card">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                    {job.status === "active" ? "Aktiv" : "Nofaol"}
                  </Badge>
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Building className="h-3.5 w-3.5 mr-1" />
                  {job.companyId ? "Tech Solutions" : "Kompaniya"}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                    <span className="truncate">
                      {job.location.city}, {job.location.country}
                    </span>
                  </div>

                  <div className="flex items-center text-muted-foreground">
                    <Briefcase className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                    <span>{job.jobType.includes("full-time") ? "To'liq stavka" : "Yarim stavka"}</span>
                  </div>

                  <div className="flex items-center text-muted-foreground">
                    <GraduationCap className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                    <span>
                      {job.education === "bachelor"
                        ? "Bakalavr"
                        : job.education === "master"
                          ? "Magistr"
                          : "O'rta maxsus"}
                    </span>
                  </div>

                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                    <span>
                      {job.experience.min}-{job.experience.max || job.experience.min + 2} yil
                    </span>
                  </div>

                  <div className="flex items-center font-medium text-primary">
                    <DollarSign className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                    <span>
                      ${job.salary?.min}-{job.salary?.max}
                    </span>
                  </div>

                  <div className="text-xs text-right text-muted-foreground mt-2">
                    {new Date(job.createdAt).toLocaleDateString("uz-UZ", { day: "numeric", month: "numeric" })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
