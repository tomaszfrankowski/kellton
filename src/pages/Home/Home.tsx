import { Link } from "react-router-dom";

export default function Home() {
  return <main className="container mx-auto p-4 h-screen flex flex-col items-center justify-center gap-4">
    <h1>Lego Minifigs Mystery Box</h1>
    <Link to="/pick">
      <button type="button" className="bg-lego-yellow text-black py-2 px-6 rounded-full">Let's go!</button>
    </Link>
  </main>
}
