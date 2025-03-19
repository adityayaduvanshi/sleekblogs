import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),

      '@tiptap/pm/state': 'prosemirror-state',
      '@tiptap/pm/view': 'prosemirror-view',
      '@tiptap/pm/model': 'prosemirror-model',
      '@tiptap/pm/transform': 'prosemirror-transform',
      '@tiptap/pm/commands': 'prosemirror-commands',
      '@tiptap/pm/schema-list': 'prosemirror-schema-list',
      '@tiptap/pm/dropcursor': 'prosemirror-dropcursor',
      '@tiptap/pm/gapcursor': 'prosemirror-gapcursor',
      '@tiptap/pm/keymap': 'prosemirror-keymap',
      '@tiptap/pm/history': 'prosemirror-history',
    },
  },
}));
