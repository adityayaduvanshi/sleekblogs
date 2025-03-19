
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { FeaturedPost } from '@/components/FeaturedPost';
import { BlogCard } from '@/components/BlogCard';
import { getFeaturedPost, getRecentPosts } from '@/lib/posts';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(3);

  return (
    <Layout>
      <section className="container-blog py-12">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              A minimal blog for design enthusiasts
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Explore insights on minimalist design, typography, and modern user experiences.
            </p>
          </div>
        </FadeIn>

        <div className="mb-24">
          <FeaturedPost post={featuredPost} />
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <FadeIn>
              <h2 className="font-serif text-2xl md:text-3xl font-medium">Recent Articles</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <Link 
                to="/blog" 
                className="flex items-center text-sm font-medium text-primary space-x-1 group"
              >
                <span>View all</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>

        <FadeIn>
          <div className="neo-blur rounded-xl p-10 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6">
              Stay updated with the latest design trends
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for insights on minimalist design, typography,
              and creating exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-8">
                Subscribe Now
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8">
                Learn More
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
};

export default Index;
