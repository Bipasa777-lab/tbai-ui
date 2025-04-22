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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Assistant {
  name: string;
  image: string;
  description: string;
}

export default function AssistantPage() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
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
  const [selectedAssistant, setSelectedAssistant] = useState({
    name: "Kritika",
    image: "/kritika-avatar.png",
    description: "Your smart assistant",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to bottom when messages change
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
    // In a real app, this would call an API to delete the chat
    handleClear();
  };

  const handleAssistantChange = (assistant) => {
    setSelectedAssistant(assistant);
    setDropdownOpen(false);

    // Add a greeting message from the new assistant
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

    // Focus on input after changing assistant
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

    // Simulate assistant response
    setIsLoading(true);

    // In a real app, this would be an API call to get the assistant's response
    setTimeout(() => {
      const assistantResponse = {
        sender: selectedAssistant.name,
        text: `I'm ${selectedAssistant.name} responding to your message. This is a simulated response. In a real application, this would be powered by an AI model.`,
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

  const handleKeyDown = (e) => {
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-2 text-lg md:text-2xl font-semibold bg-white hover:bg-gray-50 px-3 py-1.5 md:px-4 md:py-2 rounded-lg cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-pink-200"
                    aria-label="Select an assistant"
                  >
                    <span className="truncate max-w-[180px] md:max-w-none">
                      Assistants - {selectedAssistant.name}
                    </span>
                    <ChevronDown size={18} className="text-gray-500" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2 md:p-4 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 w-[280px] md:w-[420px] bg-white rounded-xl shadow-lg">
                  {assistants.map((asst) => (
                    <div
                      key={asst.name}
                      onClick={() => handleAssistantChange(asst)}
                      className="flex flex-col items-center hover:bg-gray-100 p-2 rounded-lg transition-colors cursor-pointer"
                      role="menuitem"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                        <img
                          src={asst.image}
                          alt={asst.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/default-avatar.png";
                          }}
                        />
                      </div>
                      <span className="text-xs md:text-sm mt-1 text-center font-medium">
                        {asst.name}
                      </span>
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </TooltipTrigger>
            <TooltipContent>
              <p>Select an assistant to chat with</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Actions */}
        <TooltipProvider>
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer hover:bg-gray-100 focus:ring-2 focus:ring-pink-200"
                    aria-label="Chat options"
                  >
                    <MoreVertical size={20} />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Chat options</p>
              </TooltipContent>
            </Tooltip>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem
                onClick={handleClear}
                className="cursor-pointer flex items-center text-sm px-3 py-2 hover:bg-gray-50"
              >
                <X size={16} className="mr-2" />
                Clear Chat
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleDelete}
                className="cursor-pointer flex items-center text-sm px-3 py-2 hover:bg-gray-50 text-red-600 focus:text-red-600"
              >
                <Trash2 size={16} className="mr-2" />
                Delete Chat
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TooltipProvider>
      </header>

      {/* Chat Area */}
      <section
        className="bg-white p-4 md:p-6 rounded-xl shadow-md flex flex-col flex-1 overflow-hidden"
        aria-label="Chat with assistant"
      >
        {/* Avatar and Info */}
        <div className="flex flex-col items-center mb-6">
          <Avatar className="w-16 h-16 md:w-24 md:h-24">
            <AvatarImage
              src={selectedAssistant.image}
              alt={selectedAssistant.name}
            />
            <AvatarFallback>{selectedAssistant.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h2 className="mt-3 text-lg md:text-xl font-bold text-gray-800">
            {selectedAssistant.name}
          </h2>
          <p className="text-xs md:text-sm text-gray-500">
            {selectedAssistant.description || "Your smart assistant"}
          </p>
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
              } ${!msg.isAssistant ? "max-w-[85%] md:max-w-[75%]" : ""}`}
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
        <div className="mt-auto">
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
        </div>
      </section>
    </main>
  );
}
