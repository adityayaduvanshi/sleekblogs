
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import AdminNav from '@/components/admin/AdminNav';
import BlogPostList from '@/components/admin/BlogPostList';
import CreateEditPost from '@/components/admin/CreateEditPost';
import UserManagement from '@/components/admin/UserManagement';

type AdminView = 'posts' | 'create' | 'edit' | 'users';

const Admin = () => {
  const [activeView, setActiveView] = useState<AdminView>('posts');
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();

  // Check if user is logged in and is an admin
  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    
    if (!isAdmin) {
      navigate('/');
    }
  }, [user, isAdmin, navigate]);

  const handleEditPost = (postId: string) => {
    setEditingPostId(postId);
    setActiveView('edit');
  };

  const handleCreatePost = () => {
    setEditingPostId(null);
    setActiveView('create');
  };

  // Return to post list after creating/editing
  const handlePostSaved = () => {
    setActiveView('posts');
    setEditingPostId(null);
  };

  if (!user || !isAdmin) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Admin Sidebar Navigation */}
      <AdminNav 
        activeView={activeView}
        setActiveView={setActiveView}
        onCreatePost={handleCreatePost}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">
          {activeView === 'posts' && 'Manage Blog Posts'}
          {activeView === 'create' && 'Create New Post'}
          {activeView === 'edit' && 'Edit Post'}
          {activeView === 'users' && 'User Management'}
        </h1>
        
        {activeView === 'posts' && (
          <BlogPostList onEditPost={handleEditPost} />
        )}
        
        {(activeView === 'create' || activeView === 'edit') && (
          <CreateEditPost 
            postId={editingPostId} 
            onSaved={handlePostSaved} 
          />
        )}
        
        {activeView === 'users' && (
          <UserManagement />
        )}
      </div>
    </div>
  );
};

export default Admin;
