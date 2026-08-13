import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  author?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords = "best software company in lucknow, website development company lucknow, best web development company, custom software development lucknow, IT company lucknow, Sudarshan Technologies, Sudershan Tech, Sudarshn, software agency near me, top app developers up, best IT company near me", 
  url = "https://sudarshantech.com",
  image = "https://sudarshantech.com/logo.png",
  type = "website",
  author = "Sudarshan Technologies"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title} | Sudarshan Technologies</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${title} | Sudarshan Technologies`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Sudarshan Technologies" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Article specific OG tags */}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={`${title} | Sudarshan Technologies`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
