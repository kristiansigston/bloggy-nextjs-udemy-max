import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/posts-util";
import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";
const AllPostsPage = ({ posts = [] }) => {
  // const posts = getAllPosts();
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta name="description" content="All post listings" />
      </Head>
      <AllPosts posts={posts} />;
    </Fragment>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
