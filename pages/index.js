import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../helpers/posts-util";
import Head from "next/head";
const HomePage = ({ posts = [] }) => {
  return (
    <Fragment>
      <Head>
        <title>My bloggy blog</title>
        <meta name="description" content="Posting posty things" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};
export default HomePage;

// 1) Hero => Present Ourselves
// 2) Featured Posts => Dummy Content
