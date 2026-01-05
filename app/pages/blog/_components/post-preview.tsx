import { type Author } from "@/app/pages/blog/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import tagStyles from "@/app/pages/blog/tags.json";

type Props = {
  title: string;
  tags: string[];
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  tags,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  const styles: Record<string, string> = tagStyles;
  const tagList: React.ReactNode[] = tags.map((t) => (
    <span key={t} className={styles[t] + " rounded-xl mr-1 pl-2 pr-2"}>
      {t}
    </span>
  ));
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
        <div className="w-full text-lg mt-4">
          <Avatar name={author.name} picture={author.picture} dateString={date} />
        </div>
        <div className="mt-4 mb-4">{...tagList}</div>
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/pages/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
