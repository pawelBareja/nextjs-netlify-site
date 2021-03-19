import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import PostList from "../../components/PostList";
import config from "../../lib/config";
import { countProjects, listProjectContent, ProjectContent } from "../../lib/projects";
import { listTags, TagContent } from "../../lib/tags";
import Head from "next/head";

type Props = {
  posts: ProjectContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ posts, tags, pagination }: Props) {
  const url = "/posts";
  const title = "All posts";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <PostList posts={posts} tags={tags} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listProjectContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countProjects() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
