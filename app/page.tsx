import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="animated-bg min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-gradient text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none user-select-none">
                Welcome to Cubex BLOG
              </h1>
              <p className="max-w-[600px] text-xl text-muted-foreground md:text-2xl floating user-select-none">
                Discover amazing stories, insights, and ideas from our community
                of writers.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link href="/blog">
                <Button className="animated-glow group relative inline-flex h-12 overflow-hidden rounded-md bg-primary p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <span className="inline-flex h-full w-full items-center justify-center rounded-md bg-background px-6 py-1 text-lg font-medium text-primary backdrop-blur-3xl transition-all group-hover:bg-background/80">
                    Explore Blog
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl animated-glow shine">
            {/* Add an image here */}
            <img
              src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2d8ZW58MHx8MHx8fDA%3D"
              alt="Blog Image"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-accent/20 via-transparent to-transparent animate-spin-slow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary/20 via-transparent to-transparent animate-spin-slow" />
      </div>
    </div>
  );
}
