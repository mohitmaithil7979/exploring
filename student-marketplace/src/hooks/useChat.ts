import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'

export type ChatMessage = { id: string; senderId: string; text: string; createdAt: string }

export function useChat(roomId: string) {
  const socketRef = useRef<Socket | null>(null)
  const [connected, setConnected] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])

  useEffect(() => {
    const socket = io('/', { autoConnect: true, transports: ['websocket'] })
    socketRef.current = socket

    socket.on('connect', () => {
      setConnected(true)
      socket.emit('join', { roomId })
    })

    socket.on('message', (msg: ChatMessage) => {
      setMessages((prev) => [...prev, msg])
    })

    socket.on('disconnect', () => setConnected(false))

    return () => {
      socket.emit('leave', { roomId })
      socket.disconnect()
    }
  }, [roomId])

  function sendMessage(text: string) {
    const socket = socketRef.current
    if (!socket || !connected) return
    socket.emit('message', { roomId, text })
  }

  return { connected, messages, sendMessage }
}