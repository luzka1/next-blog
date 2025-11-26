import { PostModel } from "@/models/post/post-model";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime";

type PostProps = {
  post: PostModel;
};

export function Post({ post }: PostProps) {
  const postLink = `/post/${post.slug}`;

  return (
    <div className="flex flex-col gap-4 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          alt: post.title,
        }}
      />

      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 text-sm/tight"
          dateTime={post.createdAt}
          title={formatDateTime(post.createdAt)}
        >
          {formatDateTime(post.createdAt)}
        </time>
        <PostHeading url={postLink} as="h2">
          {post.title}
        </PostHeading>
        <p>{post.excerpt}</p>
      </div>
    </div>
  );
}
