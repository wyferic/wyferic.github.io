import Avatar from "@/app/pages/blog/_components/avatar";
import CoverImage from "@/app/pages/blog/_components/cover-image";
import { type Author } from "@/app/pages/blog/interfaces/author";
import Link from "next/link";
import tagStyles from "@/app/pages/blog/tags.json"

type Props = {
  title: string;
  tags: string[];
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
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
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <div className="mb-4 md:mb-0 text-lg">
            <Avatar
              name={author.name}
              picture={author.picture}
              dateString={date}
            />
          </div>
          <div className="mt-4 mb-4">{...tagList}</div>
        </div>
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/pages/blog/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
