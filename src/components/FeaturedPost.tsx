
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FadeIn } from './animations/FadeIn';

interface FeaturedPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    coverImage: string;
    readTime: string;
  };
  className?: string;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post, className }) => {
  return (
    <FadeIn className={cn('w-full', className)}>
      <div className="relative overflow-hidden rounded-xl neo-blur">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="order-2 md:order-1 p-6 md:p-10 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-xs font-medium text-primary/80 bg-primary/5 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs ml-3 text-muted-foreground">
                {post.readTime}
              </span>
            </div>
            
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
              {post.title}
            </h2>
            
            <p className="text-muted-foreground mb-6 line-clamp-3 md:line-clamp-4">
              {post.excerpt}
            </p>
            
            <div className="mt-auto">
              <span className="text-sm text-muted-foreground mb-4 block">
                {post.date}
              </span>
              
              <Link
                to={`/post/${post.id}`}
                className="inline-flex items-center text-primary space-x-2 font-medium"
              >
                <span>Read article</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 aspect-[4/3] md:aspect-auto overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
