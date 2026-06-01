import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ChevronRight, Heart, PiggyBank, Wrench, Sparkles } from "lucide-react";
import { books } from "@/lib/ranger-squad-data";
import logo from "@/assets/grannys-route-logo.png";

export const Route = createFileRoute("/ranger-squad/")({
  component: RangerSquadIndex,
  head: () => ({
    meta: [
      { title: "The $5 Ranger Squad — Financial Literacy for Kids" },
      {
        name: "description",
        content:
          "An animated children's ebook teaching financial literacy through camping adventures. Learn the 4-Jar System: Save some, Fix some, Fun some, Give some.",
      },
      { property: "og:title", content: "The $5 Ranger Squad — Financial Literacy for Kids" },
      {
        property: "og:description",
        content: "Teaching kids to manage money with the 4-Jar System through camping adventures.",
      },
    ],
  }),
});

const jars = [
  { name: "Camp", description: "Save for tomorrow", icon: PiggyBank, color: "bg-emerald-500" },
  { name: "Fix", description: "For emergencies", icon: Wrench, color: "bg-amber-500" },
  { name: "Fun", description: "Enjoy the now", icon: Sparkles, color: "bg-pink-500" },
  { name: "Give", description: "Pay it forward", icon: Heart, color: "bg-violet-500" },
];

function RangerSquadIndex() {
  return (
    <div className="min-h-screen bg-[#1a0f08] text-[#f5e6d3]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1a0f08]/95 backdrop-blur-sm border-b border-[#4a2f1c]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src={logo} alt="Granny's Route" className="w-10 h-10 rounded-full" />
            <span className="font-display italic text-xl text-[#fbbf24]">Granny&apos;s Route</span>
          </Link>
          <nav className="flex items-center gap-4">
            <a
              href="https://www.amazon.com/s?k=The+%245+Ranger+Squad&i=digital-text"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#e8c89a] hover:text-[#fbbf24] transition"
            >
              Get on Kindle
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a1810] to-[#1a0f08]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#fcd34d] mb-4">
            An Animated Children&apos;s Ebook
          </p>
          <h1 className="font-display italic text-4xl md:text-6xl lg:text-7xl text-[#fbbf24] mb-4 text-balance">
            The $5 Ranger Squad
          </h1>
          <p className="text-lg md:text-xl text-[#d4a574] mb-2">
            By Granny &amp; Pappy Foor
          </p>
          <p className="text-[#e8c89a] max-w-2xl mx-auto mb-8">
            Teaching children financial literacy through warm campfire stories and the simple wisdom of the 4-Jar System.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/ranger-squad/$chapterId"
              params={{ chapterId: "ch0" }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#fbbf24] text-[#1a0f08] font-semibold hover:bg-[#fcd34d] transition shadow-lg"
            >
              <BookOpen className="w-5 h-5" />
              Start Reading
            </Link>
            <a
              href="https://www.amazon.com/s?k=The+%245+Ranger+Squad&i=digital-text"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#fbbf24] text-[#fbbf24] font-semibold hover:bg-[#fbbf24]/10 transition"
            >
              Buy on Amazon
            </a>
          </div>
        </div>
      </section>

      {/* The 4-Jar System */}
      <section className="py-16 px-4 bg-[#2a1810]/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#fcd34d] mb-2">The Heart of the Story</p>
            <h2 className="font-display italic text-3xl md:text-4xl text-[#fbbf24] mb-4">
              The 4-Jar System
            </h2>
            <p className="text-[#e8c89a] max-w-xl mx-auto">
              &quot;Save some, fix some, fun some, give some.&quot; A simple way to teach kids that money is a tool for building a better tomorrow.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jars.map((jar) => (
              <div
                key={jar.name}
                className="p-6 rounded-2xl bg-[#2a1810] border border-[#4a2f1c] hover:border-[#b45309]/40 transition text-center"
              >
                <div className={`w-14 h-14 ${jar.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <jar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl text-[#fbbf24] mb-2">{jar.name} Jar</h3>
                <p className="text-sm text-[#d4a574]">{jar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#fcd34d] mb-2">29 Chapters</p>
            <h2 className="font-display italic text-3xl md:text-4xl text-[#fbbf24]">
              Contents
            </h2>
          </div>
          <div className="space-y-8">
            {books.map((book) => (
              <div key={book.number} className="bg-[#2a1810] rounded-2xl border border-[#4a2f1c] overflow-hidden">
                <div className="px-6 py-4 bg-[#3a2218] border-b border-[#4a2f1c]">
                  <h3 className="font-display text-lg text-[#fbbf24]">
                    Book {book.number}: {book.title}
                  </h3>
                </div>
                <div className="divide-y divide-[#4a2f1c]">
                  {book.chapters.map((chapter) => (
                    <Link
                      key={chapter.id}
                      to="/ranger-squad/$chapterId"
                      params={{ chapterId: chapter.id }}
                      className="flex items-center justify-between px-6 py-4 hover:bg-[#3a2218] transition group"
                    >
                      <div>
                        <p className="text-xs text-[#b45309] mb-1">
                          Chapter {chapter.chapterNumber}
                        </p>
                        <p className="text-[#e8c89a] group-hover:text-[#fbbf24] transition">
                          {chapter.title}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#b45309] group-hover:text-[#fbbf24] transition" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#2a1810] to-[#1a0f08]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display italic text-2xl md:text-3xl text-[#fbbf24] mb-4">
            Ready to Begin the Adventure?
          </h2>
          <p className="text-[#d4a574] mb-8">
            Join Rangers Xander, Addie, and Bear as they learn the joy of saving, fixing, having fun, and giving.
          </p>
          <Link
            to="/ranger-squad/$chapterId"
            params={{ chapterId: "ch0" }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#fbbf24] text-[#1a0f08] font-semibold hover:bg-[#fcd34d] transition shadow-lg"
          >
            <BookOpen className="w-5 h-5" />
            Start Chapter 1
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[#4a2f1c] text-center text-sm text-[#8a7359]">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Granny &amp; Pappy Foor. All rights reserved.
        </p>
        <p>
          Available on{" "}
          <a
            href="https://www.amazon.com/s?k=The+%245+Ranger+Squad&i=digital-text"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e8c89a] hover:text-[#fbbf24] underline transition"
          >
            Kindle
          </a>{" "}
          and{" "}
          <a
            href="https://gumroad.com/search?query=The+%245+Ranger+Squad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e8c89a] hover:text-[#fbbf24] underline transition"
          >
            Gumroad
          </a>
        </p>
        <p className="mt-4">
          <Link to="/" className="text-[#e8c89a] hover:text-[#fbbf24] transition">
            &larr; Back to Granny&apos;s Route
          </Link>
        </p>
      </footer>
    </div>
  );
}
