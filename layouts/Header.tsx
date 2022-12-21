import Head from "next/head";
interface Props {
  title?: string;
  description?: string
  keyword?: string
  ogTitle?: string
  ogDescription?: string
  ogImageUrl?: string
  ogImageAlt?: string
  ogUrl?: string
}
function Header({
  title = 'Sayembara',
  description,
  keyword,
  ogTitle,
  ogDescription,
  ogImageUrl,
  ogImageAlt,
  ogUrl,
}: Props) {
  return (
    <Head>
      <title>{title}</title>

      <link rel="icon" href="/icons/sayembara-icon.png" />

      {/* META SEO */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />

      {/* META OG */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:url" content={ogImageUrl} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
    </Head>
  );
}

export default Header;
