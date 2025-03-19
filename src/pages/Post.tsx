
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { FadeIn } from '@/components/animations/FadeIn';
import { BlogCard } from '@/components/BlogCard';
import { getPostById, getRelatedPosts } from '@/lib/posts';
import { ArrowLeft } from 'lucide-react';

const Post = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = id ? getPostById(id) : undefined;
  const relatedPosts = id ? getRelatedPosts(id, 3) : [];

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  return (
    <Layout>
      <article className="container-blog py-12">
        <FadeIn>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
          
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-sm px-3 py-1 rounded-full bg-primary/5 text-primary/80">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {post.date}
              </span>
              <span className="text-sm text-muted-foreground">
                {post.readTime}
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-center max-w-4xl mx-auto mb-8">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-medium">
                {post.author.name}
              </span>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={200}>
          <div className="aspect-[16/9] max-w-4xl mx-auto overflow-hidden rounded-lg mb-12">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <div dangerouslySetInnerHTML={{ 
              __html: post.content.replace(/^#\s(.*$)/gm, '<h1>$1</h1>')
                .replace(/^##\s(.*$)/gm, '<h2>$1</h2>')
                .replace(/^###\s(.*$)/gm, '<h3>$1</h3>')
                .replace(/^####\s(.*$)/gm, '<h4>$1</h4>')
                .replace(/^#####\s(.*$)/gm, '<h5>$1</h5>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/\n/g, '<br />')
                .replace(/^([^<].*)/gm, '<p>$1</p>')
                .replace(/<p><\/p>/g, '')
                .replace(/<p><h([1-6])>/g, '<h$1>')
                .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
            }} />
          </div>
        </FadeIn>
        
        {relatedPosts.length > 0 && (
          <div className="mt-24">
            <FadeIn>
              <h2 className="font-serif text-2xl font-medium mb-10 text-center">
                Related Articles
              </h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </div>
        )}
      </article>
    </Layout>
  );
};

export default Post;
