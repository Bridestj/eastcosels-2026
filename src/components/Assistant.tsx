"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const quickQuestions = [
  "How do I register?",
  "How much is registration?",
  "Where is the conference?",
  "I already paid. How do I get my ticket?",
];

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm the EASTCOSELS 2026 Assistant. How can I help you today?",
    },
  ]);

  const sendMessage = async (message?: string) => {
    const text = (message ?? input).trim();

    if (!text || loading) return;

    setInput("");

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: text,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong."
        );
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch (error) {
      console.error("Assistant error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "I'm sorry, I'm having trouble connecting right now. Please try again or contact an EASTCOSELS organizer.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* Floating Button */}

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open EASTCOSELS Assistant"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-700 px-5 py-4 text-sm font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-green-800 sm:bottom-6 sm:right-6"
        >
          <span className="text-xl">🤖</span>

          <span className="hidden sm:inline">
            Ask EASTCOSELS
          </span>

          <span className="sm:hidden">
            Ask Us
          </span>
        </button>
      )}

      {/* Chat Window */}

      {open && (
        <div className="fixed bottom-4 right-4 z-50 flex h-[min(650px,calc(100vh-2rem))] w-[calc(100vw-2rem)] max-w-md flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10 sm:bottom-6 sm:right-6 sm:h-[650px]">

          {/* Header */}

          <div className="flex items-center justify-between bg-green-900 px-5 py-4 text-white">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-700 text-xl">
                🤖
              </div>

              <div>
                <p className="font-bold">
                  EASTCOSELS Assistant
                </p>

                <p className="text-xs text-green-200">
                  Here to help
                </p>
              </div>

            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="rounded-full p-2 text-xl transition hover:bg-white/10"
            >
              ×
            </button>

          </div>

          {/* Messages */}

          <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4">

            {messages.map((message, index) => (

              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-md bg-green-700 text-white"
                      : "rounded-bl-md bg-white text-gray-800 shadow-sm"
                  }`}
                >
                  {message.content}
                </div>

              </div>

            ))}

            {loading && (
              <div className="flex justify-start">

                <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">

                  <div className="flex gap-1">

                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />

                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:150ms]" />

                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:300ms]" />

                  </div>

                </div>

              </div>
            )}

          </div>

          {/* Quick Questions */}

          {messages.length === 1 && (
            <div className="border-t bg-white px-4 py-3">

              <p className="mb-2 text-xs font-semibold text-gray-500">
                Popular questions
              </p>

              <div className="flex gap-2 overflow-x-auto pb-1">

                {quickQuestions.map((question) => (

                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    disabled={loading}
                    className="shrink-0 rounded-full border border-green-200 bg-green-50 px-3 py-2 text-xs font-semibold text-green-800 transition hover:bg-green-100 disabled:opacity-50"
                  >
                    {question}
                  </button>

                ))}

              </div>

            </div>
          )}

          {/* Input */}

          <form
            onSubmit={handleSubmit}
            className="flex gap-2 border-t bg-white p-3"
          >

            <input
              type="text"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              placeholder="Ask about EASTCOSELS..."
              disabled={loading}
              className="min-w-0 flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
            />

            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="rounded-xl bg-green-700 px-4 py-3 font-bold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              →
            </button>

          </form>

          {/* Human Support */}

          <div className="border-t bg-white px-4 pb-4 pt-2 text-center">

            <p className="text-xs text-gray-500">
              Need personal assistance?{" "}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-semibold text-green-700 hover:text-green-900"
              >
                Contact an organizer
              </a>
            </p>

          </div>

        </div>
      )}
    </>
  );
}