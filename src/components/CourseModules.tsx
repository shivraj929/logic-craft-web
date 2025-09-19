import { Book, Clock, Users, Star, Play, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  progress: number;
  enrolledUsers: number;
  rating: number;
  isCompleted: boolean;
  category: string;
}

const CourseModules = () => {
  const courses: Course[] = [
    {
      id: "1",
      title: "Earthquake Response Fundamentals",
      description: "Learn essential earthquake safety protocols, evacuation procedures, and post-disaster recovery techniques.",
      duration: "2.5 hours",
      difficulty: "beginner",
      progress: 75,
      enrolledUsers: 1247,
      rating: 4.8,
      isCompleted: false,
      category: "Natural Disasters"
    },
    {
      id: "2", 
      title: "Fire Emergency Management",
      description: "Comprehensive fire safety training including prevention, evacuation, and emergency response coordination.",
      duration: "3 hours",
      difficulty: "intermediate",
      progress: 100,
      enrolledUsers: 892,
      rating: 4.9,
      isCompleted: true,
      category: "Fire Safety"
    },
    {
      id: "3",
      title: "Advanced Crisis Leadership",
      description: "Advanced training for emergency coordinators and team leaders during crisis situations.",
      duration: "4 hours", 
      difficulty: "advanced",
      progress: 0,
      enrolledUsers: 334,
      rating: 4.7,
      isCompleted: false,
      category: "Leadership"
    },
    {
      id: "4",
      title: "Community Emergency Planning",
      description: "Develop comprehensive emergency plans for schools, offices, and community organizations.",
      duration: "2 hours",
      difficulty: "intermediate",
      progress: 45,
      enrolledUsers: 567,
      rating: 4.6,
      isCompleted: false,
      category: "Planning"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-success/10 text-success border-success/20";
      case "intermediate": return "bg-warning/10 text-warning border-warning/20";
      case "advanced": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Training Modules</h2>
          <p className="text-muted-foreground">Enhance your emergency preparedness with AI-guided courses</p>
        </div>
        <Button className="bg-gradient-info text-white shadow-safety">
          <Book className="h-4 w-4 mr-2" />
          Browse All Courses
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-float transition-all duration-300 border-0 bg-card/50 backdrop-blur">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <Badge variant="secondary" className="mb-2">
                  {course.category}
                </Badge>
                {course.isCompleted && (
                  <CheckCircle className="h-5 w-5 text-success" />
                )}
              </div>
              <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {course.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Course Meta Info */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {course.enrolledUsers}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-warning text-warning" />
                    {course.rating}
                  </div>
                </div>
                <Badge className={getDifficultyColor(course.difficulty)}>
                  {course.difficulty}
                </Badge>
              </div>

              {/* Progress */}
              {course.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              )}

              {/* Action Button */}
              <Button 
                className="w-full"
                variant={course.isCompleted ? "outline" : "default"}
              >
                <Play className="h-4 w-4 mr-2" />
                {course.progress === 0 ? "Start Course" : 
                 course.isCompleted ? "Review Course" : "Continue Learning"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseModules;