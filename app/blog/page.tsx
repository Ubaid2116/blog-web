import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const posts = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
    date: "2024-03-20",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    category: "Technology"
  },
  {
    id: 2,
    title: "Mastering Next.js 14",
    excerpt: "A comprehensive guide to building modern web applications with Next.js 14.",
    date: "2024-03-19",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
    category: "Development"
  },
  {
    id: 3,
    title: "The Art of UI Design",
    excerpt: "Learn the principles of creating beautiful and functional user interfaces.",
    date: "2024-03-18",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60",
    category: "Design"
  },
  {
    id: 4,
    title: "AI in Modern Web Applications",
    excerpt: "Discover how artificial intelligence is revolutionizing web development.",
    date: "2024-03-17",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    category: "AI"
  },
  {
    id: 5,
    title: "Building Responsive Layouts",
    excerpt: "Master the art of creating fluid and responsive web layouts.",
    date: "2024-03-16",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=60",
    category: "Design"
  },
  {
    id: 6,
    title: "Web Performance Optimization",
    excerpt: "Essential techniques for improving your website's performance.",
    date: "2024-03-15",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    category: "Performance"
  }
]

const BlogPage: React.FC = () => {
  return (
    <div className="animated-bg min-h-screen">
      <div className="container py-10">
        <div className="relative mb-12 text-center">
          <h1 className="text-gradient text-4xl font-bold mb-4">Featured Articles</h1>
          <p className="text-xl text-muted-foreground">Explore our latest stories and insights</p>
        </div>

        {/* Button to add new blog post */}
        <div className="mb-8 text-right">
          <Link href="/create-post">
            <Button variant="outline">Add New Post</Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="card-hover group h-full overflow-hidden border-lg bg-accent/5 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2">
                    <span className="animated-glow inline-block rounded-full px-3 py-1 text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2 transition-colors group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="font-medium text-primary">{post.readTime}</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;