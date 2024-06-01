import Link from "next/link";
import { NavBar } from "./_components/header";
import { Footer } from "./_components/footer";
import { CreatePost } from "~/app/_components/create-post";
import { MemeCoinList } from "./_components/meme-coin-list";
import { StartANewCoinButton } from "./_components/start-a-meme-coin";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <NavBar />
      <StartANewCoinButton/>
      <MemeCoinList />
      <Footer />
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
