import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, BookOpen, Home } from "lucide-react";
import { getChapterById, getNextChapter, getPreviousChapter, books } from "@/lib/ranger-squad-data";
import logo from "@/assets/grannys-route-logo.png";

export const Route = createFileRoute("/ranger-squad/$chapterId")({
  component: ChapterReader,
  loader: ({ params }) => {
    const chapter = getChapterById(params.chapterId);
    if (!chapter) {
      throw notFound();
    }
    return { chapter };
  },
  head: ({ loaderData }) => {
    const chapter = loaderData?.chapter;
    return {
      meta: [
        { 
          title: chapter 
            ? `${chapter.title} — The $5 Ranger Squad` 
            : "Chapter Not Found" 
        },
        {
          name: "description",
          content: chapter
            ? `Book ${chapter.bookNumber}, Chapter ${chapter.chapterNumber}: ${chapter.title}. ${chapter.subtitle}. Part of The $5 Ranger Squad children's financial literacy ebook.`
            : "Chapter not found",
        },
      ],
    };
  },
});

function ChapterReader() {
  const { chapter } = Route.useLoaderData();
  const nextChapter = getNextChapter(chapter.id);
  const prevChapter = getPreviousChapter(chapter.id);

  return (
    <div className="min-h-screen bg-[#1a0f08] text-[#f5e6d3]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1a0f08]/95 backdrop-blur-sm border-b border-[#4a2f1c]">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src={logo} alt="Granny's Route" className="w-8 h-8 rounded-full" />
            <span className="font-display italic text-lg text-[#fbbf24] hidden sm:inline">Granny&apos;s Route</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              to="/ranger-squad"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm text-[#e8c89a] hover:text-[#fbbf24] hover:bg-[#2a1810] transition"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Contents</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm text-[#e8c89a] hover:text-[#fbbf24] hover:bg-[#2a1810] transition"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Chapter Content */}
      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* Chapter Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#fcd34d] mb-2">
            Book {chapter.bookNumber} &middot; Chapter {chapter.chapterNumber}
          </p>
          <h1 className="font-display italic text-3xl md:text-5xl text-[#fbbf24] mb-3 text-balance">
            {chapter.title}
          </h1>
          <p className="text-[#d4a574] italic">{chapter.subtitle}</p>
        </div>

        {/* Sections */}
        {chapter.sections.length > 0 ? (
          <div className="space-y-8">
            {chapter.sections.map((section, sectionIndex) => (
              <article
                key={sectionIndex}
                className="bg-[#2a1810] border-l-4 border-[#b45309] rounded-r-xl p-6 md:p-8"
              >
                <h2 className="font-display text-xl md:text-2xl text-[#fbbf24] mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-[#f5e6d3] leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-[#fcd34d]">$1</strong>')
                          .replace(/"([^"]+)"/g, '&ldquo;$1&rdquo;')
                      }}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-[#2a1810] border-l-4 border-[#b45309] rounded-r-xl p-6 md:p-8 text-center">
            <p className="text-[#d4a574] italic mb-4">
              This chapter&apos;s content is available in the full ebook.
            </p>
            <a
              href="https://www.amazon.com/s?k=The+%245+Ranger+Squad&i=digital-text"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fbbf24] text-[#1a0f08] font-semibold hover:bg-[#fcd34d] transition"
            >
              Get the Full Ebook
            </a>
          </div>
        )}

        {/* Campfire Questions Placeholder */}
        {chapter.sections.length > 0 && (
          <div className="mt-10 p-6 bg-gradient-to-r from-[#2a1810] to-[#3a2218] rounded-xl border border-[#4a2f1c]">
            <h3 className="font-display text-lg text-[#fbbf24] mb-3">
              Pappy&apos;s Campfire Questions
            </h3>
            <ul className="space-y-2 text-[#e8c89a] text-sm">
              <li>What would you put in your Camp jar?</li>
              <li>Can you think of a time when you needed a Fix jar?</li>
              <li>What&apos;s something fun you&apos;d save for?</li>
              <li>Who would you like to help with your Giving jar?</li>
            </ul>
          </div>
        )}

        {/* Navigation */}
        <nav className="mt-12 flex items-center justify-between gap-4">
          {prevChapter ? (
            <Link
              to="/ranger-squad/$chapterId"
              params={{ chapterId: prevChapter.id }}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#2a1810] border border-[#4a2f1c] hover:border-[#b45309] transition group flex-1 max-w-[45%]"
            >
              <ChevronLeft className="w-5 h-5 text-[#b45309] group-hover:text-[#fbbf24] transition shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-[#8a7359]">Previous</p>
                <p className="text-sm text-[#e8c89a] group-hover:text-[#fbbf24] transition truncate">
                  {prevChapter.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1 max-w-[45%]" />
          )}

          {nextChapter ? (
            <Link
              to="/ranger-squad/$chapterId"
              params={{ chapterId: nextChapter.id }}
              className="flex items-center justify-end gap-2 px-4 py-3 rounded-xl bg-[#2a1810] border border-[#4a2f1c] hover:border-[#b45309] transition group flex-1 max-w-[45%] text-right"
            >
              <div className="min-w-0">
                <p className="text-xs text-[#8a7359]">Next</p>
                <p className="text-sm text-[#e8c89a] group-hover:text-[#fbbf24] transition truncate">
                  {nextChapter.title}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#b45309] group-hover:text-[#fbbf24] transition shrink-0" />
            </Link>
          ) : (
            <div className="flex-1 max-w-[45%]" />
          )}
        </nav>

        {/* Back to Contents */}
        <div className="mt-8 text-center">
          <Link
            to="/ranger-squad"
            className="text-sm text-[#8a7359] hover:text-[#fbbf24] transition"
          >
            &larr; Back to Table of Contents
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[#4a2f1c] text-center text-sm text-[#8a7359]">
        <p>&copy; {new Date().getFullYear()} Granny &amp; Pappy Foor</p>
        <p className="mt-1 font-display italic text-[#b45309]">
          Save some, fix some, fun some, give some.
        </p>
      </footer>
    </div>
  );
}
