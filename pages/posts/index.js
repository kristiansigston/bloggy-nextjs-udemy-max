import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/posts-util";

const AllPostsPage = ({ posts = [] }) => {
  // const posts = getAllPosts();
  return <AllPosts posts={posts} />;
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
