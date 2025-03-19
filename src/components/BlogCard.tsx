
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { FadeIn } from './animations/FadeIn';

interface BlogCardProps {
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
  index?: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, className, index = 0 }) => {
  return (
    <FadeIn 
      delay={index * 100} 
      className={cn('h-full', className)}
    >
      <Link 
        to={`/post/${post.id}`} 
        className="block h-full hover-card rounded-lg overflow-hidden neo-blur"
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-primary/80 bg-primary/5 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.readTime}
            </span>
          </div>
          <h3 className="font-serif text-xl font-medium mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {post.date}
            </span>
            <span className="text-primary underline-offset-4 hover:underline">
              Read more
            </span>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
};
