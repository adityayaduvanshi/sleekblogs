
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { BlogCard } from '@/components/BlogCard';
import { getAllPosts } from '@/lib/posts';
import { FadeIn } from '@/components/animations/FadeIn';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const allPosts = getAllPosts();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = searchQuery
    ? allPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allPosts;

  return (
    <Layout>
      <section className="container-blog py-12">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              The Blog
            </h1>
            <p className="text-muted-foreground">
              Explore our collection of articles on design, minimalism, typography, and UX.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="max-w-xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                  onClick={() => setSearchQuery('')}
                >
                  &times;
                </Button>
              )}
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <FadeIn>
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No articles found matching your search.</p>
              <Button variant="outline" onClick={() => setSearchQuery('')}>
                Clear Search
              </Button>
            </div>
          </FadeIn>
        )}
      </section>
    </Layout>
  );
};

export default Blog;
