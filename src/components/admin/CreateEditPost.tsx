
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { BlogPost } from '@/types/supabase';
import Tiptap from './Tiptap';

interface CreateEditPostProps {
  postId: string | null;
  onSaved: () => void;
}

const CreateEditPost = ({ postId, onSaved }: CreateEditPostProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [category, setCategory] = useState('');
  const [readTime, setReadTime] = useState('');
  const [published, setPublished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If editing, fetch the post data
  const { data: post, isLoading } = useQuery({
    queryKey: ['post', postId],
    queryFn: async () => {
      if (!postId) return null;
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .single();
        
      if (error) throw error;
      return data as BlogPost;
    },
    enabled: !!postId,
  });

  // Set form values when editing an existing post
  useEffect(() => {
    if (post) {
      setTitle(post.title || '');
      setSlug(post.slug || '');
      setExcerpt(post.excerpt || '');
      setContent(post.content || '');
      setCoverImage(post.cover_image || '');
      setCategory(post.category || '');
      setReadTime(post.read_time || '');
      setPublished(post.published || false);
    }
  }, [post]);

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
  };

  // Update slug when title changes (only for new posts)
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    
    // Only auto-generate slug for new posts or if slug is empty
    if (!postId || !slug) {
      setSlug(generateSlug(newTitle));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: 'Authentication error',
        description: 'You must be logged in to create or edit posts.',
        variant: 'destructive',
      });
      return;
    }
    
    if (!title || !slug || !content) {
      toast({
        title: 'Missing required fields',
        description: 'Title, slug, and content are required.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (postId) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update({
            title,
            slug,
            excerpt,
            content,
            cover_image: coverImage,
            category,
            read_time: readTime,
            published,
            updated_at: new Date().toISOString(),
          })
          .eq('id', postId);
          
        if (error) throw error;
        
        toast({
          title: 'Post updated',
          description: 'Your post has been successfully updated.',
        });
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert([{
            title,
            slug,
            excerpt,
            content,
            cover_image: coverImage,
            category,
            read_time: readTime,
            published,
            author_id: user.id,
          }]);
          
        if (error) throw error;
        
        toast({
          title: 'Post created',
          description: 'Your post has been successfully created.',
        });
      }
      
      // Return to post list
      onSaved();
    } catch (error: any) {
      toast({
        title: 'Error saving post',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading && postId) {
    return <div className="text-center py-10">Loading post...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="slug">Slug *</Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
            />
          </div>
          
          <div>
            <Label htmlFor="coverImage">Cover Image URL</Label>
            <Input
              id="coverImage"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
            {coverImage && (
              <div className="mt-2">
                <img 
                  src={coverImage} 
                  alt="Cover preview" 
                  className="h-40 object-cover rounded"
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="readTime">Read Time</Label>
            <Input
              id="readTime"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              placeholder="5 min read"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={published}
              onCheckedChange={setPublished}
            />
            <Label htmlFor="published">Publish post</Label>
          </div>
        </div>
      </div>
      
      <div>
        <Label htmlFor="content">Content *</Label>
        <div className="mt-2 border rounded-md overflow-hidden">
          <Tiptap content={content} onChange={setContent} />
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onSaved}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          disabled={isSubmitting || !title || !slug || !content}
        >
          {isSubmitting ? 'Saving...' : postId ? 'Update Post' : 'Create Post'}
        </Button>
      </div>
    </form>
  );
};

export default CreateEditPost;
