import { useState } from 'react'
import ChatBubble from '../components/ChatBubble'
import { SendHorizonal } from 'lucide-react'

function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'them' as const, text: 'Hi, is this still available?', time: '10:21 AM' },
    { sender: 'me' as const, text: 'Yes! When would you like to meet?', time: '10:22 AM' },
  ])
  const [text, setText] = useState('')

  function send() {
    if (!text.trim()) return
    setMessages((m) => [...m, { sender: 'me', text, time: 'now' }])
    setText('')
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <div className="border rounded-xl overflow-hidden">
        <div className="border-b p-3 bg-neutral-100">
          <div className="text-sm text-neutral-600">Chat about:</div>
          <div className="font-medium">iPad Air 64GB · $250</div>
        </div>
        <div className="p-3 space-y-2 h-[60vh] overflow-y-auto bg-white">
          {messages.map((m, idx) => (
            <ChatBubble key={idx} sender={m.sender} text={m.text} time={m.time} />
          ))}
        </div>
        <div className="border-t p-2 flex gap-2 bg-neutral-50">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message" className="flex-1 border rounded-lg px-3 py-2 bg-white" />
          <button onClick={send} className="grid place-items-center h-10 w-10 rounded-lg bg-neutral-900 text-white">
            <SendHorizonal size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat