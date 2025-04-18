"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, X, ChevronDown, MoreVertical } from "lucide-react";
import { assistantsData as assistants } from "@/constants";

export default function AssistantPage() {
  const [messages, setMessages] = useState([
    {
      sender: "Kritika",
      text: "Hello, I am Kritika. How can I help you today?",
      time: "18:09",
    },
  ]);
  const [messageInput, setMessageInput] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClear = () => setMessages([]);
  const handleDelete = () => {
    // Add delete logic here
    setMessages([]);
  };

  return (
    <main className="flex flex-col gap-6 px-4 py-6 md:px-8 lg:px-16 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        {/* Assistant Dropdown */}
        <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 text-2xl font-semibold bg-white px-4 py-2 rounded-lg cursor-pointer transition">
              Assistants - Kritika
              <ChevronDown size={20} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-4 grid grid-cols-3 gap-4 w-96 bg-white rounded-xl shadow-lg">
            {assistants.map((asst) => (
              <div
                key={asst.name}
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
          <DropdownMenuContent align="end" className="bg-white ">
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
      </div>

      {/* Chat Area */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/kritika-avatar.png" alt="Kritika" />
          </Avatar>
          <h3 className="mt-3 text-xl font-bold text-gray-800">Kritika</h3>
          <p className="text-sm text-gray-500">Your smart assistant</p>
        </div>

        {/* Messages */}
        <div className="mt-6 space-y-4 max-h-[400px] overflow-y-auto">
          {messages.map((msg, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm text-pink-500 font-semibold">{msg.sender}</p>
              <p className="mt-1">{msg.text}</p>
              <p className="text-xs text-gray-400 mt-2">{msg.time}</p>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="mt-6 flex items-center gap-2">
          <Input
            placeholder="Ask anything..."
            className="flex-1"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <Button
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2"
            onClick={() => {
              if (messageInput.trim() === "") return;
              setMessages((prev) => [
                ...prev,
                {
                  sender: "You",
                  text: messageInput,
                  time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                },
              ]);
              setMessageInput("");
            }}
          >
            ↑
          </Button>
        </div>
      </div>
    </main>
  );
}
