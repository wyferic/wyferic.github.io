import Container from "@/app/pages/blog/_components/container";
import { HeroPost } from "@/app/pages/blog/_components/hero-post";
import { Intro } from "@/app/pages/blog/_components/intro";
import { MoreStories } from "@/app/pages/blog/_components/more-stories";
import { getAllPosts } from "@/app/pages/blog/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          tags={heroPost.tags}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
