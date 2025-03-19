# Modern Blog Platform with Admin Dashboard

A full-featured blog platform built with React, TypeScript, and Supabase, featuring an admin dashboard with a rich text editor for content creation.

## Features

- 🔒 User authentication (login/signup)
- 👤 User profiles
- ✍️ Rich text editing with TipTap (Notion-like experience)
- 📱 Responsive design for all devices
- 🌙 Dark/Light theme support
- 👑 Admin dashboard for content management
- 📝 Create, edit, and publish blog posts
- 🔍 Categorize and manage blog content

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager
- A Supabase account (free tier works fine)

### Setup

1. Clone this repository

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Configure Supabase

   - Create a new project on [Supabase](https://supabase.com)
   - Copy your project URL and anon/public key from the API settings
   - The database is already set up with the necessary tables (profiles, blog_posts)

4. Start the development server

```bash
npm run dev
# or
yarn dev
```

5. Open your browser to `http://localhost:8080`

## Admin Access

To use the admin dashboard:

1. Register a new user via the `/auth` page
2. In your Supabase SQL Editor, run the following query to grant admin privileges to your user (replace `USER_ID` with your actual user ID):

```sql
UPDATE public.profiles
SET role = 'admin'
WHERE id = 'USER_ID';
```

3. Log out and log back in to apply the role change
4. You should now see an "Admin Dashboard" option in your user menu

## Creating Blog Posts

As an admin:

1. Navigate to the Admin Dashboard
2. Click "Create New Post" in the sidebar
3. Fill in the post details:
   - Title (required)
   - Slug (auto-generated from title, but can be edited)
   - Excerpt (optional summary)
   - Cover Image URL (optional)
   - Category (optional)
   - Read Time (optional, e.g., "5 min read")
4. Use the rich text editor to create your content
5. Toggle "Publish post" when ready to make it public
6. Click "Create Post" to save

## Customization

### Theming

The app uses a theme context that can be customized in `src/context/ThemeContext.tsx`. The default themes are light and dark, but you can add more options.

### Layout

Modify the layout components in `src/components/Layout.tsx` and `src/components/Navbar.tsx` to change the overall structure and appearance.

### Admin Features

Extend admin functionality by adding new components to the admin dashboard in `src/pages/Admin.tsx`.

## Database Structure

The application uses two primary tables:

1. **profiles** - Stores user information

   - id (UUID, linked to auth.users)
   - username (text)
   - avatar_url (text)
   - display_name (text)
   - bio (text)
   - role (text, 'user' or 'admin')
   - created_at (timestamp)
   - updated_at (timestamp)

2. **blog_posts** - Stores blog content
   - id (UUID)
   - title (text)
   - slug (text)
   - excerpt (text)
   - content (text)
   - cover_image (text)
   - published (boolean)
   - created_at (timestamp)
   - updated_at (timestamp)
   - author_id (UUID, linked to user)
   - category (text)
   - read_time (text)

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- TipTap Editor
- Supabase (auth and database)
- React Router
- React Query
- Lucide Icons

## License

This project is available for personal and commercial use.

## Acknowledgements

- UI components from [shadcn/ui](https://ui.shadcn.com)
- Rich text editing powered by [TipTap](https://tiptap.dev)
