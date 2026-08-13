import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { blogPosts } from "../data/blogData";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <SEO title="Article Not Found" description="The article you are looking for does not exist." />
        <section className="pt-32 lg:pt-40 section-padding min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn-primary">Back to Blog <ArrowLeft className="w-4 h-4" /></Link>
          </div>
        </section>
      </Layout>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <Layout>
      <SEO 
        title={post.title}
        description={post.excerpt}
        type="article"
        author={post.author}
      />
      <article className="pt-32 lg:pt-40 section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <ScrollReveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-display mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </ScrollReveal>

          {/* Header */}
          <ScrollReveal>
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-display font-medium">
                  <Tag className="w-3 h-3" /> {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> {post.readTime} read
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tighter text-foreground leading-tight">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
            </div>
          </ScrollReveal>

          {/* Featured image */}
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
              <img src={post.img} alt={post.title} className="w-full h-64 lg:h-96 object-cover" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal>
            <div className="prose-custom">
              {post.content.map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-xl lg:text-2xl font-display font-bold text-foreground mt-10 mb-4 tracking-tight">
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed mb-5 text-[15px]"
                    dangerouslySetInnerHTML={{
                      __html: block.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="text-foreground font-semibold">$1</strong>'
                      ),
                    }}
                  />
                );
              })}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-muted-foreground text-sm italic">
                Looking to implement this in your business? We offer specialized{" "}
                {post.category === "AI & Automation" && <Link to="/services/ai-automation" className="text-primary hover:underline">AI & Automation services</Link>}
                {post.category === "Web Development" && <Link to="/services/web-development" className="text-primary hover:underline">Custom Web Development</Link>}
                {post.category === "Digital Marketing" && <Link to="/services/social-media" className="text-primary hover:underline">Digital Marketing strategies</Link>}
                {post.category === "Enterprise Software" && <Link to="/services/erp-crm" className="text-primary hover:underline">ERP & CRM Solutions</Link>}
                {" "}to help you scale efficiently.
              </p>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-12 p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center">
              <h3 className="font-display font-bold text-xl text-foreground mb-2">Need help with this?</h3>
              <p className="text-sm text-muted-foreground mb-5">Our team at Sudarshan Technologies can help you implement these strategies for your business.</p>
              <Link to="/contact" className="btn-primary">Get Free Consultation</Link>
            </div>
          </ScrollReveal>

          {/* Related articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <ScrollReveal>
                <h3 className="text-xl font-display font-bold text-foreground mb-6">More Articles</h3>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rp, i) => (
                  <ScrollReveal key={rp.slug} delay={i * 0.08}>
                    <Link to={`/blog/${rp.slug}`} className="glass-card-hover group overflow-hidden flex flex-col h-full">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img src={rp.img} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <span className="text-xs text-primary font-display font-medium mb-1">{rp.category}</span>
                        <h4 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                          {rp.title}
                        </h4>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
