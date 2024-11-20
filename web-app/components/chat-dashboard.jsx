'use client'

import { useState, useEffect } from 'react'
import { Send, Menu, Home, MessageSquare, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ChatDashboard() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', content: 'Hello! How can I assist you today?' },
    { id: 2, sender: 'user', content: 'Can you help me with my credit score?' },
    { id: 3, sender: 'ai', content: 'Of course! Your current credit score is 720, which is considered good. Would you like some tips on how to improve it further?' }
  ])

  const [shapes, setShapes] = useState([])

  useEffect(() => {
    const generateShapes = () => {
      const shapeTypes = [
        { type: 'circle', count: 5 },
        { type: 'hexagon', count: 3 },
        { type: 'triangle', count: 4 }
      ]

      const newShapes = shapeTypes.flatMap(({ type, count }) =>
        Array.from({ length: count }, (_, i) => ({
          type,
          x: 10 + (i * 20) + (Math.random() * 10 - 5),
          y: 10 + (i * 20) + (Math.random() * 10 - 5),
          size: 80 + Math.random() * 40,
          opacity: 0.1 + Math.random() * 0.05,
          rotation: Math.random() * 360,
        })))

      setShapes(newShapes)
    }

    generateShapes()
  }, [])

  const renderShape = (shape) => {
    const lightPurple = '#e0d0ff'
    switch (shape.type) {
      case 'circle':
        return (
          (<circle
            cx={`${shape.x}%`}
            cy={`${shape.y}%`}
            r={shape.size / 2}
            fill={lightPurple}
            opacity={shape.opacity} />)
        );
      case 'hexagon':
        return (
          (<polygon
            points={`${shape.x},${shape.y} ${shape.x + shape.size / 2},${shape.y + shape.size * 0.29} ${shape.x + shape.size / 2},${shape.y + shape.size * 0.71} ${shape.x},${shape.y + shape.size} ${shape.x - shape.size / 2},${shape.y + shape.size * 0.71} ${shape.x - shape.size / 2},${shape.y + shape.size * 0.29}`}
            fill={lightPurple}
            opacity={shape.opacity}
            transform={`rotate(${shape.rotation} ${shape.x} ${shape.y})`} />)
        );
      case 'triangle':
        return (
          (<polygon
            points={`${shape.x},${shape.y} ${shape.x + shape.size / 2},${shape.y + shape.size * 0.87} ${shape.x - shape.size / 2},${shape.y + shape.size * 0.87}`}
            fill={lightPurple}
            opacity={shape.opacity}
            transform={`rotate(${shape.rotation} ${shape.x} ${shape.y})`} />)
        );
      default:
        return null
    }
  }

  return (
    (<div className="flex h-screen bg-[#0a0b1a] overflow-hidden relative">
      {/* Background Shapes */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg">
        {shapes.map((shape, index) => (
          <g key={index}>{renderShape(shape)}</g>
        ))}
      </svg>
      {/* Sidebar */}
      <div
        className="w-64 bg-[#12132d]/80 backdrop-blur-sm p-4 flex flex-col border-r border-[#2a2b4a] z-10">
        <div className="flex items-center gap-2 mb-8">
          <div className="text-violet-400 font-bold text-2xl">Nano AI Chat</div>
        </div>
        
        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-gray-300 hover:text-white hover:bg-[#1a1b3d]">
            <Home className="h-4 w-4" />
            Overview
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-gray-300 hover:text-white hover:bg-[#1a1b3d]">
            <MessageSquare className="h-4 w-4" />
            Chats
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-gray-300 hover:text-white hover:bg-[#1a1b3d]">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col z-10">
        {/* Header */}
        <header
          className="h-16 border-b border-[#2a2b4a] flex items-center justify-between px-6 bg-[#12132d]/80 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <Menu className="h-6 w-6 text-gray-400" />
            <h1 className="text-lg font-semibold text-white">Chat Assistant</h1>
          </div>
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search messages..."
              className="w-64 bg-[#1a1b3d] border-[#2a2b4a] text-white" />
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Chat Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.sender === 'user'
                      ? 'bg-violet-600 text-white'
                      : 'bg-[#1a1b3d]/80 backdrop-blur-sm text-gray-100'
                  }`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div
          className="p-4 border-t border-[#2a2b4a] bg-[#12132d]/80 backdrop-blur-sm">
          <div className="flex gap-4">
            <Input
              placeholder="Type your message..."
              className="flex-1 bg-[#1a1b3d] border-[#2a2b4a] text-white" />
            <Button className="bg-violet-600 hover:bg-violet-700">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </div>
    </div>)
  );
}