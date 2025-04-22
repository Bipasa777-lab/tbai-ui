"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Trash2,
  X,
  ChevronDown,
  MoreVertical,
  Send,
  Loader2,
} from "lucide-react";
import { assistantsData as assistants } from "@/constants";

interface Assistant {
  name: string;
  image: string;
  description: string;
}

export default function AssistantPage() {
  const [messages, setMessages] = useState([
    {
      sender: "Kritika",
      text: "Hello, I am Kritika. How can I help you today?",
      time: "18:09",
      isAssistant: true,
    },
  ]);
  const [messageInput, setMessageInput] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedAssistant, setSelectedAssistant] = useState<Assistant>({
    name: "Kritika",
    image: "/kritika-avatar.png",
    description: "Your smart assistant",
  });
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClear = () => {
    setMessages([
      {
        sender: selectedAssistant.name,
        text: `Hello, I am ${selectedAssistant.name}. How can I help you today?`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isAssistant: true,
      },
    ]);
  };

  const handleDelete = () => {
    handleClear();
  };

  const handleAssistantChange = (assistant: Assistant) => {
    setSelectedAssistant(assistant);
    setDropdownOpen(false);
    setMessages([
      {
        sender: assistant.name,
        text: `Hello, I am ${assistant.name}. How can I help you today?`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isAssistant: true,
      },
    ]);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleSendMessage = async () => {
    if (messageInput.trim() === "") return;

    const userMessage = {
      sender: "You",
      text: messageInput,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isAssistant: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessageInput("");
    setIsLoading(true);

    setTimeout(() => {
      const assistantResponse = {
        sender: selectedAssistant.name,
        text: `I'm ${selectedAssistant.name} responding to your message. This is a simulated response.`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isAssistant: true,
      };

      setMessages((prev) => [...prev, assistantResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <main className="flex flex-col gap-4 px-3 py-4 md:px-6 lg:px-12 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-3 md:p-4 rounded-xl shadow-sm">
        {/* Assistant Dropdown */}
        <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 text-2xl font-semibold bg-white px-4 py-2 rounded-lg cursor-pointer transition">
              Assistants - {selectedAssistant.name}
              <ChevronDown size={20} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-4 grid grid-cols-3 gap-4 w-96 bg-white rounded-xl shadow-lg">
            {assistants.map((asst) => (
              <div
                key={asst.name}
                onClick={() => handleAssistantChange(asst)}
                className="flex flex-col items-center hover:bg-gray-100 p-2 rounded-lg transition cursor-pointer"
              >
                <img
                  src={asst.image}
                  alt={asst.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-sm mt-1 text-center">{asst.name}</span>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Actions */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <MoreVertical size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuItem onClick={handleClear} className="cursor-pointer">
              <X size={16} className="mr-2" />
              Clear Chat
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete} className="cursor-pointer">
              <Trash2 size={16} className="mr-2 text-red-600" />
              Delete Chat
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Chat Area */}
      <section className="bg-white p-6 rounded-xl shadow-lg flex flex-col">
        <div className="flex flex-col items-center mb-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src={selectedAssistant.image} alt={selectedAssistant.name} />
            <AvatarFallback>{selectedAssistant.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="mt-3 text-xl font-bold text-gray-800">{selectedAssistant.name}</h3>
          <p className="text-sm text-gray-500">{selectedAssistant.description}</p>
        </div>

        {/* Messages */}
        <div
          className="flex-1 space-y-4 overflow-y-auto py-2 px-1 mb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          style={{ maxHeight: "calc(100vh - 320px)", minHeight: "200px" }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 md:p-4 rounded-lg ${
                msg.isAssistant
                  ? "bg-gray-100"
                  : "bg-pink-50 ml-auto max-w-[85%] md:max-w-[75%]"
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <p
                  className={`text-xs md:text-sm font-semibold ${
                    msg.isAssistant ? "text-pink-500" : "text-blue-600"
                  }`}
                >
                  {msg.sender}
                </p>
                <p className="text-xs text-gray-400">{msg.time}</p>
              </div>
              <p className="text-sm md:text-base break-words">{msg.text}</p>
            </div>
          ))}
          {isLoading && (
            <div className="bg-gray-100 p-3 md:p-4 rounded-lg animate-pulse">
              <p className="text-xs md:text-sm font-semibold text-pink-500">
                {selectedAssistant.name}
              </p>
              <div className="flex items-center gap-1 mt-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <Input
            ref={inputRef}
            placeholder="Ask anything..."
            className="flex-1 py-2 px-4 focus-visible:ring-pink-300"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            aria-label="Message input"
          />
          <Button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-3 md:px-4 py-2 transition-colors focus:ring-2 focus:ring-pink-300 focus:ring-offset-2"
            disabled={isLoading || messageInput.trim() === ""}
            aria-label="Send message"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
            <span className="sr-only">Send</span>
          </Button>
        </form>
        <p className="text-xs text-gray-400 mt-2 text-center">
          Press Enter to send your message
        </p>
      </section>
    </main>
  );
}
