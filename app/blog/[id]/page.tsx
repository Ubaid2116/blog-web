import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button"; // Ensure Button component is available
import { ArrowLeftIcon } from "@heroicons/react/24/outline"; // Heroicon
import CommentsSection from "@/components/CommentsSection";

const posts = [
  {
    id: 1,
    title: "The Future of Web Development",
    content: `Web development is constantly evolving, with new technologies and frameworks emerging regularly. In this post, we'll explore the latest trends and technologies that are shaping the future of web development.

    From WebAssembly to Edge Computing, the landscape of web development is becoming increasingly sophisticated. Developers now have more tools and capabilities at their disposal than ever before.
    
    Stay tuned as we dive deep into these technologies and understand how they're revolutionizing the way we build web applications.`,
    date: "2024-03-20",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    author: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg", // New placeholder avatar
    },
  },
  {
    id: 2,
    title: "Mastering Next.js 14",
    content: `Next.js 14 brings revolutionary changes to the way we build web applications. In this comprehensive guide, we'll explore the new features and best practices for building modern web applications.

    From improved performance to enhanced developer experience, Next.js 14 is setting new standards in web development. We'll cover everything from Server Components to the new App Router.
    
    Join us on this journey to master Next.js 14 and take your development skills to the next level.`,
    date: "2024-03-19",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
    author: {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg", // New placeholder avatar
    },
  },
  {
    id: 3,
    title: "The Art of UI Design",
    content: `Creating beautiful and functional user interfaces is both an art and a science. In this post, we'll explore the principles that make UI design effective and engaging.

    From color theory to typography, from layout composition to micro-interactions, every aspect of UI design plays a crucial role in creating exceptional user experiences.
    
    Let's dive into the world of UI design and discover how to create interfaces that users love.`,
    date: "2024-03-18",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60",
    author: {
      name: "Mike Johnson",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg", // New placeholder avatar
    },
  },
  {
    id: 4,
    title: "AI in Modern Web Applications",
    content:
      "Discover how artificial intelligence is revolutionizing web development.",
    date: "2024-03-17",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    author: {
      name: "Alex Lee",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg", // New placeholder avatar
    },
  },
  {
    id: 5,
    title: "Building Responsive Layouts",
    content: "Master the art of creating fluid and responsive web layouts.",
    date: "2024-03-16",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=60",
    author: {
      name: "Sophia Williams",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg", // New placeholder avatar
    },
  },
  {
    id: 6,
    title: "Web Performance Optimization",
    content: "Essential techniques for improving your website's performance.",
    date: "2024-03-15",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    author: {
      name: "Liam Davis",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg", // New placeholder avatar
    },
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

interface Props {
  params: { id: string };
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-4xl py-10 px-6 md:px-12 bg-transparent shadow-xl rounded-lg">
      <a href="/blog" className="inline-block mb-6">
        <Button
          variant="ghost"
          className="flex items-center text-gray-200 hover:text-gray-900"
        >
          <ArrowLeftIcon className="mr-2 h-5 w-5" />
          Back to Blog
        </Button>
      </a>

      <div className="space-y-8">
        {/* Image Section */}
        <div className="relative max-w-full mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Author Info Section */}
        <div className="flex items-center space-x-4 mt-6">
          <div className="relative">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-14 w-14 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute right-0 bottom-0 bg-green-500 h-4 w-4 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <div className="font-semibold text-xl text-gray-600">
              {post.author.name}
            </div>
            <div className="text-sm text-gray-500">
              {post.date} · {post.readTime}
            </div>
          </div>
        </div>

        {/* Post Title */}
        <h1 className="text-4xl font-bold text-gray-200 mt-4">{post.title}</h1>

        {/* Post Content */}
        <div className="prose prose-lg prose-neutral dark:prose-invert mt-6 max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="mb-6 leading-relaxed text-lg text-gray-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
        {/* Comments Section */}
        <CommentsSection />
      </div>
    </article>
  );
}
