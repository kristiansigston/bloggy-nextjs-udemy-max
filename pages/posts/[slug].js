import { getPostData, getPostsFiles } from "../../helpers/posts-util";
import PostContent from "../posts/post-detail/post-content";

const PostDetailPage = ({ post = {} }) => {
  return <PostContent post={post} />;
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postsFilenames = getPostsFiles();
  const slugs = postsFilenames.map((fileName) => {
    return fileName.replace(/\.md$/, "");
  });

  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default PostDetailPage;
