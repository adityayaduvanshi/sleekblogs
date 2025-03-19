import React from 'react';
import { Layout } from '@/components/Layout';
import { FadeIn } from '@/components/animations/FadeIn';

const About = () => {
  return (
    <Layout>
      <section className="container-blog py-12">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              About SleekBlogs
            </h1>
            <p className="text-muted-foreground text-lg">
              A minimalist blog template for design enthusiasts and modern
              creators.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={100}>
            <div className="aspect-[16/9] mb-12 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Minimal desk setup with notebook and coffee"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="prose prose-lg mx-auto dark:prose-invert">
              <h2 className="font-serif">Our Philosophy</h2>
              <p>
                SleekBlogs was created with a simple philosophy: design should
                be both beautiful and functional. We believe that minimalism
                isn't about removing elements until there's nothing left, but
                rather about distilling design to its most essential components.
              </p>

              <p>
                Our blog template embodies these principles, focusing on
                typography, whitespace, and thoughtful interactions that enhance
                the reading experience without overwhelming it with unnecessary
                decoration.
              </p>

              <h2 className="font-serif">Design Principles</h2>
              <p>
                Every aspect of SleekBlogs has been crafted with intention,
                following these core principles:
              </p>

              <ul>
                <li>
                  <strong>Content First:</strong> Design should serve content,
                  not compete with it.
                </li>
                <li>
                  <strong>Meaningful Animation:</strong> Motion should enhance
                  understanding, not distract.
                </li>
                <li>
                  <strong>Responsive by Default:</strong> Great experiences on
                  every device, not just as an afterthought.
                </li>
                <li>
                  <strong>Performance Matters:</strong> Beautiful design
                  shouldn't come at the cost of speed.
                </li>
              </ul>

              <h2 className="font-serif">Get Started</h2>
              <p>
                SleekBlogs is designed to be easy to use and customize, whether
                you're a developer looking to create a custom blog or a writer
                focusing on content. Explore our documentation to learn how to
                make SleekBlogs your own.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default About;
