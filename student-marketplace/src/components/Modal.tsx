import type { ReactNode } from 'react'

type ModalProps = {
  open: boolean
  title?: string
  onClose: () => void
  children: ReactNode
}

function Modal({ open, title, onClose, children }: ModalProps) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={onClose} className="text-sm text-gray-500">Close</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal