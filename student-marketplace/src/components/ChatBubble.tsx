type ChatBubbleProps = {
  sender: 'me' | 'them'
  text: string
  time?: string
}

function ChatBubble({ sender, text, time }: ChatBubbleProps) {
  const isMe = sender === 'me'
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm ${isMe ? 'bg-black text-white rounded-br-none' : 'bg-gray-100 text-gray-900 rounded-bl-none'}`}>
        <p>{text}</p>
        {time && <span className="block text-[10px] opacity-70 mt-1">{time}</span>}
      </div>
    </div>
  )
}

export default ChatBubble