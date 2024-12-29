import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-10 px-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold animate-fadeIn">About Cubex Blog</h1>
          <p className="text-xl text-muted-foreground animate-fadeIn delay-100">
            🌟 A platform for sharing knowledge, ideas, and stories ✨
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Quality Content Card */}
          <Card className="transition-transform transform hover:-translate-y-2 hover:shadow-2xl animate-zoomIn">
            <CardHeader className="text-center">
              <BookOpen className="mx-auto h-8 w-8 mb-2 text-primary" />
              <CardTitle>
                📖 <span className="font-bold">Quality Content</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Curated articles from expert writers and thought leaders
            </CardContent>
          </Card>

          {/* Community Card */}
          <Card className="transition-transform transform hover:-translate-y-2 hover:shadow-2xl animate-zoomIn delay-150">
            <CardHeader className="text-center">
              <Users className="mx-auto h-8 w-8 mb-2 text-primary" />
              <CardTitle>
                👥 <span className="font-bold">Community</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Join a community of passionate readers and writers
            </CardContent>
          </Card>

          {/* Innovation Card */}
          <Card className="transition-transform transform hover:-translate-y-2 hover:shadow-2xl animate-zoomIn delay-300">
            <CardHeader className="text-center">
              <Zap className="mx-auto h-8 w-8 mb-2 text-primary" />
              <CardTitle>
                ⚡ <span className="font-bold">Innovation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Stay updated with the latest trends and technologies
            </CardContent>
          </Card>
        </div>

        {/* Description Section */}
        <div className="prose prose-neutral dark:prose-invert mx-auto mt-12 animate-fadeIn delay-500">
          <p>
            🌍 <strong>Cubex Blog</strong> is a platform dedicated to sharing knowledge and insights about
            technology, development, and design. Our mission is to create a space where developers and
            designers can learn, grow, and connect with like-minded individuals.
          </p>
          <p>
            🚀 Whether you're a seasoned professional or just starting your journey, you'll find
            valuable content that helps you stay ahead in the ever-evolving world of technology.
          </p>
        </div>
      </div>
    </div>
  );
}
