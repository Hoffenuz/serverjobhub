import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const freelancers = [
  {
    id: 1,
    name: "Aziz Karimov",
    title: "Full Stack Developer",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    completedProjects: 87,
    hourlyRate: "$25",
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    location: "Toshkent, O'zbekiston",
  },
  {
    id: 2,
    name: "Malika Rahimova",
    title: "UI/UX Designer",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    completedProjects: 64,
    hourlyRate: "$20",
    skills: ["Figma", "Adobe XD", "UI Design", "Prototyping"],
    location: "Samarqand, O'zbekiston",
  },
  {
    id: 3,
    name: "Bobur Aliyev",
    title: "Mobile App Developer",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    completedProjects: 52,
    hourlyRate: "$22",
    skills: ["Flutter", "React Native", "iOS", "Android"],
    location: "Buxoro, O'zbekiston",
  },
  {
    id: 4,
    name: "Nilufar Karimova",
    title: "Content Writer",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    completedProjects: 93,
    hourlyRate: "$15",
    skills: ["Copywriting", "SEO", "Blog Writing", "Technical Writing"],
    location: "Andijon, O'zbekiston",
  },
]

export function TopFreelancers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {freelancers.map((freelancer) => (
        <Link href={`/freelance/freelancers/${freelancer.id}`} key={freelancer.id}>
          <Card className="h-full hover:shadow-md transition-all">
            <CardHeader className="pb-2 text-center">
              <Avatar className="w-20 h-20 mx-auto mb-2">
                <AvatarImage src={freelancer.avatar || "/placeholder.svg"} alt={freelancer.name} />
                <AvatarFallback>{freelancer.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg">{freelancer.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{freelancer.title}</p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center mb-3">
                <div className="flex items-center text-amber-500 mr-2">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 font-medium">{freelancer.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">({freelancer.completedProjects} loyiha)</span>
              </div>

              <div className="text-center mb-3">
                <span className="font-bold text-lg">{freelancer.hourlyRate}</span>
                <span className="text-sm text-muted-foreground"> / soat</span>
              </div>

              <div className="text-sm text-center text-muted-foreground mb-3">{freelancer.location}</div>

              <div className="flex flex-wrap justify-center gap-1 mt-2">
                {freelancer.skills.slice(0, 3).map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    {skill}
                  </Badge>
                ))}
                {freelancer.skills.length > 3 && (
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    +{freelancer.skills.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
