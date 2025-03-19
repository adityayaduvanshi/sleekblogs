
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  readTime: string;
}

export const posts: Post[] = [
  {
    id: "minimalist-living",
    title: "The Art of Minimalist Living in a Digital Age",
    excerpt: "Discover how embracing minimalism can transform your digital life and enhance your productivity.",
    content: `
# The Art of Minimalist Living in a Digital Age

In today's hyper-connected world, the concept of minimalism extends beyond physical possessions to our digital lives. As we accumulate digital clutter—countless apps, subscriptions, and notifications—we often find ourselves overwhelmed and distracted.

## Embracing Digital Minimalism

Digital minimalism isn't about rejecting technology, but about being intentional with how we use it. It's about curating a digital environment that serves our values and goals rather than becoming a source of distraction.

### Practical Steps Toward Digital Minimalism

1. **Audit your digital tools**: Evaluate which apps, subscriptions, and services truly add value to your life.
2. **Create intentional spaces**: Design your digital workspaces to minimize distractions and maximize focus.
3. **Establish healthy boundaries**: Set specific times for checking email and social media.
4. **Practice digital sabbaticals**: Regularly disconnect completely to reset your relationship with technology.

## The Aesthetic of Minimalism

Minimalism in design isn't just visually appealing—it serves a purpose. Clean interfaces with thoughtful typography and whitespace reduce cognitive load and help us focus on what matters.

### Key Principles of Minimalist Design

- **Simplicity**: Remove everything that doesn't serve a purpose
- **Intentionality**: Every element should have a clear function
- **Hierarchy**: Guide attention through thoughtful organization
- **Space**: Use whitespace to create breathing room for the eyes and mind

## Minimalism as a Mindset

Ultimately, minimalism is less about specific practices and more about developing a mindset of intentionality. By constantly asking "Does this add value?" we can create both physical and digital environments that support our well-being.

Remember that minimalism isn't about deprivation—it's about making room for what truly matters.
    `,
    date: "May 12, 2023",
    category: "Lifestyle",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
    },
    coverImage: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    readTime: "6 min read"
  },
  {
    id: "typography-design",
    title: "Typography in Modern Web Design: Finding the Perfect Balance",
    excerpt: "Explore how thoughtful typography choices can elevate your web design and improve user experience.",
    content: `
# Typography in Modern Web Design: Finding the Perfect Balance

Typography is the art of arranging type to make written language legible, readable, and appealing. In web design, typography plays a crucial role in creating hierarchy, improving readability, and establishing brand identity.

## The Fundamentals of Web Typography

### Type Classification

Understanding the different classifications of typefaces can help you make informed choices:

- **Serif**: Typefaces with small decorative strokes (serifs) at the ends of characters
- **Sans-serif**: Clean typefaces without decorative strokes
- **Monospace**: Typefaces where each character occupies the same width
- **Display**: Decorative typefaces designed for headlines and short text

### Key Typography Principles

1. **Hierarchy**: Use size, weight, and spacing to guide the reader through content
2. **Readability**: Ensure text is easy to read with appropriate line height and width
3. **Contrast**: Create sufficient contrast between text and background
4. **Rhythm**: Establish consistent spacing between paragraphs, headings, and sections

## Typography Trends in Modern Web Design

- **Variable Fonts**: Single font files that offer infinite variations in weight, width, and style
- **Large, Bold Headlines**: Creating impact with oversized headings
- **Mixed Type Pairings**: Combining serif and sans-serif fonts for contrast
- **Responsive Typography**: Adjusting font sizes and spacing based on screen size

## Technical Considerations

- **Performance**: Optimize font loading to prevent layout shifts
- **Accessibility**: Ensure text meets contrast requirements and scales appropriately
- **Internationalization**: Consider how your typography choices support different languages

Typography isn't just about aesthetics—it's a fundamental component of user experience. By approaching typography with intention, you can create designs that are both beautiful and functional.
    `,
    date: "April 3, 2023",
    category: "Design",
    author: {
      name: "Maya Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
    },
    coverImage: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    readTime: "8 min read"
  },
  {
    id: "future-of-ui",
    title: "The Future of UI: Beyond Flat Design",
    excerpt: "What comes after flat design? Exploring the evolution of interfaces and emerging design patterns.",
    content: `
# The Future of UI: Beyond Flat Design

Flat design dominated digital interfaces for nearly a decade, replacing skeuomorphism with clean, minimal aesthetics. But as with all design trends, we're witnessing an evolution toward new paradigms that address the limitations of purely flat interfaces.

## The Evolution of UI Design

### The Rise and Fall of Skeuomorphism

Skeuomorphic design mimicked real-world objects in digital interfaces—leather textures, paper pages, and realistic buttons. While initially helpful for users transitioning to touch interfaces, it eventually felt dated and limiting.

### The Flat Design Revolution

Flat design emerged as a reaction, embracing digital's inherent flatness with minimal elements, bright colors, and geometric shapes. Companies like Apple and Google embraced this approach, influencing the entire industry.

### Flat Design 2.0: Adding Dimension

Pure flat design created usability issues, with users struggling to differentiate interactive elements. Flat Design 2.0 reintroduced subtle shadows, layering, and depth cues while maintaining minimalist aesthetics.

## Emerging UI Design Trends

### Neumorphism and Soft UI

Neumorphism (or soft UI) creates elements that appear to extrude from the background, using subtle shadows to create a soft, plastic-like appearance. While visually interesting, it presents accessibility challenges.

### Glassmorphism

Inspired by Apple's use of translucent interfaces, glassmorphism creates a frosted glass effect with background blur and subtle transparency, suggesting layers and depth.

### 3D Elements and Spatial Interfaces

As devices become more powerful, we're seeing the integration of 3D elements into otherwise flat interfaces, creating engaging focal points without overwhelming the design.

## The Impact of New Technologies

- **AR/VR Interfaces**: Spatial computing is pushing designers to think beyond 2D constraints
- **Voice and Gestural Interfaces**: Reducing visual elements in favor of natural interactions
- **Adaptive and Contextual UIs**: Interfaces that change based on user behavior and context

The future of UI design likely isn't another singular trend but a thoughtful synthesis of approaches. The most successful interfaces will balance aesthetics with usability, employing different techniques where they make the most sense for users.
    `,
    date: "March 27, 2023",
    category: "Technology",
    author: {
      name: "Nathan Lee",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
    },
    coverImage: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    readTime: "10 min read"
  },
  {
    id: "color-theory",
    title: "Understanding Color Theory for Digital Products",
    excerpt: "A deep dive into color theory and how to apply it to create more engaging digital experiences.",
    content: `
# Understanding Color Theory for Digital Products

Color is one of the most powerful tools in a designer's toolkit. It influences mood, guides attention, establishes brand identity, and enhances usability. Understanding color theory is essential for creating effective digital products.

## Color Fundamentals

### The Color Wheel

The color wheel is the foundation of color theory, organizing colors in a logical sequence:

- **Primary colors**: Red, blue, and yellow
- **Secondary colors**: Green, orange, and purple (created by mixing primary colors)
- **Tertiary colors**: Created by mixing primary and secondary colors

### Key Color Properties

- **Hue**: The pure color itself (red, blue, etc.)
- **Saturation**: The intensity or purity of a color
- **Value/Brightness**: The lightness or darkness of a color

## Color Harmonies for Digital Design

### Monochromatic

Using variations of a single color by adjusting saturation and brightness. This creates a cohesive, elegant look that's easy to manage.

### Complementary

Using colors opposite each other on the color wheel. This creates high contrast and visual interest but can be overwhelming if not balanced with neutrals.

### Analogous

Using colors adjacent to each other on the color wheel. This creates a harmonious, comfortable scheme that works well for content-heavy interfaces.

### Triadic

Using three colors equally spaced around the color wheel. This provides visual variety while maintaining harmony.

## Color in UI Design

### Functional Color

- **Primary action colors**: Guiding users toward important actions
- **Success/error/warning colors**: Communicating system status
- **Navigation and hierarchy**: Using color to establish visual hierarchy

### Emotional Impact

- **Blue**: Trust, stability, professionalism
- **Green**: Growth, health, permission
- **Red**: Excitement, urgency, errors
- **Yellow**: Optimism, clarity, caution
- **Purple**: Creativity, luxury, wisdom

## Accessibility Considerations

- **Color contrast**: Ensuring text remains readable (WCAG guidelines recommend a minimum contrast ratio of 4.5:1)
- **Color blindness**: Designing for users with different types of color vision deficiency
- **Cultural differences**: Recognizing that color meanings vary across cultures

By applying color theory principles thoughtfully, you can create interfaces that are not only visually appealing but also more usable and emotionally resonant.
    `,
    date: "February 14, 2023",
    category: "Design",
    author: {
      name: "Sophia Garcia",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
    },
    coverImage: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    readTime: "7 min read"
  },
  {
    id: "animation-principles",
    title: "Animation Principles for Modern Interfaces",
    excerpt: "Learn how classic animation principles can be applied to create more intuitive and delightful user interfaces.",
    content: `
# Animation Principles for Modern Interfaces

Animation is more than just decoration in interface design—it's a powerful tool for communication, guiding users through interactions and creating more intuitive experiences. By drawing on principles from traditional animation, we can create more meaningful motion in digital products.

## The Purpose of Animation in UI

Well-designed animation serves several key functions:

- **Providing feedback**: Confirming user actions and system status
- **Guiding attention**: Directing users to important elements or changes
- **Creating continuity**: Helping users understand spatial relationships and state changes
- **Expressing personality**: Reinforcing brand identity and creating emotional connections

## Core Animation Principles for UI

### 1. Timing and Spacing

The timing of an animation dramatically affects how it feels:

- **Fast animations (150-200ms)**: Feel responsive and efficient
- **Medium animations (300-500ms)**: Feel natural and balanced
- **Slow animations (700ms+)**: Feel deliberate and emphasized

Easing functions (like ease-in, ease-out) create natural-feeling motion by varying the rate of change.

### 2. Anticipation, Action, and Follow-through

- **Anticipation**: A small preparatory movement before the main action
- **Action**: The primary movement
- **Follow-through**: Elements settling into their final state

This three-part sequence makes interactions feel more natural and satisfying.

### 3. Secondary Action

Small supplementary animations that support the main animation without distracting from it. For example, a subtle ripple effect when clicking a button.

### The 12 Principles Applied to UI

Disney's 12 principles of animation, developed in the 1930s, remain remarkably relevant for UI design:

1. **Squash and stretch**: Maintaining volume while changing shape
2. **Anticipation**: Preparing for an action
3. **Staging**: Presenting ideas clearly
4. **Straight-ahead vs. pose-to-pose**: Different approaches to creating motion
5. **Follow-through and overlapping action**: Elements moving at different rates
6. **Slow in and slow out**: Natural acceleration and deceleration
7. **Arcs**: Natural movement tends to follow arcs rather than straight lines
8. **Secondary action**: Supporting animations that enhance the main action
9. **Timing**: Controlling the speed of actions
10. **Exaggeration**: Emphasizing key elements
11. **Solid drawing**: Creating dimensional forms
12. **Appeal**: Creating designs that people enjoy watching

## Implementing Animation Thoughtfully

- **Purpose first**: Every animation should serve a clear purpose
- **Consistency**: Create a system of motion that feels cohesive
- **Performance**: Optimize animations for smooth playback
- **Accessibility**: Respect user preferences for reduced motion

When implemented thoughtfully, animation transforms interfaces from static screens into dynamic, responsive systems that feel more alive and intuitive to use.
    `,
    date: "January 30, 2023",
    category: "Design",
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
    },
    coverImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    readTime: "9 min read"
  },
  {
    id: "dark-mode-design",
    title: "Designing for Dark Mode: Beyond Color Inversion",
    excerpt: "Explore the nuances of creating effective dark mode experiences that users will love.",
    content: `
# Designing for Dark Mode: Beyond Color Inversion

Dark mode has evolved from a developer-focused feature to a mainstream user preference. Designing for dark mode involves more than simply inverting colors—it requires thoughtful consideration of readability, emotion, and visual hierarchy.

## Why Dark Mode Matters

### User Benefits

- **Reduced eye strain**: Particularly in low-light environments
- **Battery savings**: On OLED/AMOLED displays, dark pixels use less power
- **Reduced screen glare**: Less light emission in dark environments
- **Aesthetic preference**: Many users simply prefer the look

### Design Challenges

- **Maintaining readability**: Ensuring text remains legible
- **Preserving visual hierarchy**: Keeping information priority clear
- **Color perception changes**: Colors can appear different on dark backgrounds
- **Maintaining brand identity**: Adapting brand colors appropriately

## Key Principles for Dark Mode Design

### 1. Avoid Pure Black

Pure black (#000000) against white text can create uncomfortable contrast and visual vibration. Instead, use dark grays (like #121212 or #1E1E1E) to reduce strain while maintaining contrast.

### 2. Reduce Contrast (Slightly)

While light mode typically uses high contrast between text and background, dark mode benefits from slightly reduced contrast. White text (#FFFFFF) on dark backgrounds can cause halation—a visual effect where text appears to bleed into the background.

Use slightly off-white text (like #E8E8E8 or #F2F2F2) to improve readability.

### 3. Adjust Color Saturation

Colors often appear more vibrant and saturated on dark backgrounds. Reduce saturation of bright colors to prevent them from "vibrating" or dominating the interface.

### 4. Communicate Hierarchy Differently

In light mode, you might use darker colors to indicate hierarchy. In dark mode, you'll need different strategies:
- Use varying levels of white with transparency
- Rely more on size, weight, and positioning
- Use subtle background colors to create separation

### 5. Consider Elevation and Depth

Dark mode is an opportunity to use elevation effectively:
- Higher elements can be lighter to create the illusion of catching more light
- Use subtle shadows with lighter colors (instead of dark shadows)
- Consider using subtle gradients to indicate elevation

## Technical Implementation

### Semantic Color System

Create a semantic color system with named tokens that reflect usage rather than visual appearance:
- **background-primary**: Main background color
- **background-secondary**: Secondary background for cards, etc.
- **text-primary**: Main text color
- **text-secondary**: Secondary text for captions, etc.
- **accent-default**: Primary accent color

### Test for Accessibility

- Ensure text meets WCAG contrast guidelines (4.5:1 for normal text)
- Test with dark mode-specific scenarios
- Consider how interactive states appear in dark mode

### Remember State Persistence

Remember user preferences for color scheme and provide options to:
- Follow system preference
- Always use light mode
- Always use dark mode

Well-designed dark mode is more than an aesthetic choice—it's an acknowledgment of diverse user needs and environments. By approaching dark mode with intention rather than as an afterthought, you create more inclusive, enjoyable experiences.
    `,
    date: "January 15, 2023",
    category: "Design",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
    },
    coverImage: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    readTime: "8 min read"
  }
];

export const getFeaturedPost = (): Post => {
  return posts[0];
};

export const getRecentPosts = (count: number = 3): Post[] => {
  return posts.slice(1, count + 1);
};

export const getAllPosts = (): Post[] => {
  return posts;
};

export const getPostById = (id: string): Post | undefined => {
  return posts.find(post => post.id === id);
};

export const getRelatedPosts = (currentPostId: string, count: number = 3): Post[] => {
  const filtered = posts.filter(post => post.id !== currentPostId);
  return filtered.slice(0, count);
};
