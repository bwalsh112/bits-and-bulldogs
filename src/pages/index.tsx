import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import TailwindBlog from "../components/TailwindBlog";
import TailwindPage from "../components/TailwindPage";
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from "@heroicons/react/outline";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import PostList from "../components/PostList";
import config from "../lib/config";
import { countPosts, listPostContent, PostContent } from "../lib/posts";
import { listTags, TagContent } from "../lib/tags";


export default function Index({ posts, tags, pagination, page }) {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      {/* <TailwindPage /> */}
      {/* Header */}
      <div className="flex justify-center">
      <div style={{width: '1100px'}}>
        <TailwindBlog posts={posts} pagination={pagination} />
      </div>
      </div>
      {/* <div className="container">
        <TailwindBlog />
        <div>
          <h1>
            Hi, We're Next.js & Netlify<span className="fancy">.</span>
          </h1>
          <span className="handle">@nextjs-netlify-blog</span>
          <h2>A blog template with Next.js and Netlify.</h2>
          <SocialList />
        </div>
      </div> */}
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();

  return {
    props: {
      posts,
      tags,
    },
  };
};

