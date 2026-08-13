import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

const Blog = () => (
  <Layout>
    <SEO 
      title="Tech Blog | Software & Web Development Insights"
      description="Read the latest insights on custom software development, web application design, AI automation, and digital trends from Sudarshan Technologies."
      keywords="software development blog, web development insights, tech blog lucknow, IT company blog, latest technology trends"
    />
    <section className="pt-32 lg:pt-40 section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-wider text-primary font-display font-medium">Insights</span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
            Technical <span className="text-gradient">Insights</span>
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl text-lg">
            Deep dives into digital strategy, engineering, and the technologies shaping modern business. Looking for specific solutions? Explore our <Link to="/services/web-development" className="text-primary hover:underline">custom web application development</Link>, <Link to="/services/erp-crm" className="text-primary hover:underline">enterprise ERP/CRM systems</Link>, <Link to="/services/ai-automation" className="text-primary hover:underline">AI automation solutions</Link>, and <Link to="/services/social-media" className="text-primary hover:underline">data-driven digital marketing</Link>.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.05}>
              <Link to={`/blog/${post.slug}`} className="glass-card-hover group h-full flex flex-col overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <span className="text-xs text-primary font-display font-medium mb-2">{post.category}</span>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="mt-4 text-xs text-primary font-display font-medium flex items-center gap-1">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
