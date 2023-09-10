"use client";
import { PostType, PostsListProps } from "../../types/global-types";
import React, { FC, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import PostCard from "./PostCard";
import { useGetPost } from "@hooks/useGetPost";
import { PostListNew } from "./PostList";

const Posts: FC = () => {
  const [step, setStep] = useState<number>(1);
  const { isLoading, posts } = useGetPost({ step: step, type: "allPosts" });
  return (
    <section>
      <h2>Posts</h2>
      <form onSubmit={() => {}}>
        <input type="text" />
      </form>
      <PostListNew isLoading={isLoading} posts={posts} setStep={setStep} />
    </section>
  );
};

export default Posts;
