import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://configural-site.onrender.com';
const SITE_NAME = 'Configural';
const DEFAULT_TITLE = 'Configural — AI-Powered Healthcare Operations Platform';
const DEFAULT_DESCRIPTION =
  'Configural automates healthcare scheduling, referrals, care management, and administrative workflows with autonomous AI employees. Save 4+ hours daily per staff member.';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  type = 'website',
  jsonLd,
  keywords,
}) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Configural — AI-Powered Healthcare Operations Platform" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="Configural — AI-Powered Healthcare Operations Platform" />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
