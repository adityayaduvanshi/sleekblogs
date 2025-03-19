
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, FileText, Users, PlusCircle, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

type AdminView = 'posts' | 'create' | 'edit' | 'users';

interface AdminNavProps {
  activeView: AdminView;
  setActiveView: (view: AdminView) => void;
  onCreatePost: () => void;
}

const AdminNav = ({ activeView, setActiveView, onCreatePost }: AdminNavProps) => {
  const { signOut } = useAuth();

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
      </div>
      
      <nav className="flex-1">
        <Button
          variant="ghost"
          className={`w-full justify-start mb-2 ${activeView === 'posts' ? 'bg-gray-800' : ''}`}
          onClick={() => setActiveView('posts')}
        >
          <FileText className="mr-2 h-4 w-4" />
          Manage Posts
        </Button>
        
        <Button
          variant="ghost"
          className="w-full justify-start mb-2"
          onClick={onCreatePost}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New Post
        </Button>
        
        <Button
          variant="ghost"
          className={`w-full justify-start mb-2 ${activeView === 'users' ? 'bg-gray-800' : ''}`}
          onClick={() => setActiveView('users')}
        >
          <Users className="mr-2 h-4 w-4" />
          Manage Users
        </Button>
      </nav>
      
      <div className="mt-auto">
        <Link to="/">
          <Button variant="ghost" className="w-full justify-start mb-2">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            View Blog
          </Button>
        </Link>
        
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-400"
          onClick={signOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default AdminNav;
