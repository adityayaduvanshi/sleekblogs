
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/supabase';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { Eye, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface BlogPostListProps {
  onEditPost: (postId: string) => void;
}

const BlogPostList = ({ onEditPost }: BlogPostListProps) => {
  const { toast } = useToast();
  
  // Fetch all blog posts
  const { data: posts, isLoading, error, refetch } = useQuery({
    queryKey: ['adminBlogPosts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      return data as BlogPost[];
    },
  });

  // Toggle post publication status
  const togglePublishStatus = async (post: BlogPost) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ published: !post.published })
        .eq('id', post.id);
        
      if (error) throw error;
      
      toast({
        title: post.published ? 'Post unpublished' : 'Post published',
        description: `"${post.title}" is now ${post.published ? 'unpublished' : 'published'}.`,
      });
      
      refetch();
    } catch (error: any) {
      toast({
        title: 'Error updating post',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  // Delete a post
  const deletePost = async (post: BlogPost) => {
    if (!window.confirm(`Are you sure you want to delete "${post.title}"?`)) {
      return;
    }
    
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', post.id);
        
      if (error) throw error;
      
      toast({
        title: 'Post deleted',
        description: `"${post.title}" has been deleted.`,
      });
      
      refetch();
    } catch (error: any) {
      toast({
        title: 'Error deleting post',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading posts...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error loading posts: {(error as Error).message}
      </div>
    );
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
                </TableCell>
                <TableCell>{post.category || 'Uncategorized'}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {post.published ? (
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" /> Published
                      </span>
                    ) : (
                      <span className="flex items-center text-gray-500">
                        <XCircle className="h-4 w-4 mr-1" /> Draft
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`/post/${post.slug}`, '_blank')}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEditPost(post.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => togglePublishStatus(post)}
                  >
                    {post.published ? (
                      <XCircle className="h-4 w-4" />
                    ) : (
                      <CheckCircle className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => deletePost(post)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-10">
                No posts found. Create your first post to get started.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default BlogPostList;
