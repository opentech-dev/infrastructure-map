import { Button } from '@/components/ui/button'
import { Markdown } from './markdown'
import { X } from 'lucide-react'
import { useResizeObserver } from '@/hooks/use-resize-observer'

export interface InfoBoxProps {
  onClose: () => void
  title?: string
  content?: string
}


const InfoBox = ({ onClose, content, title }: InfoBoxProps) => {
  const { height: sidebarHeight } = useResizeObserver(document.getElementById('menu_sidebar'))

  return (
    <div
      className="ml-2 slide-in-from-left-10 flex flex-col min-w-44 q640:min-w-52 right-0 absolute left-full overflow-y-hidden rounded-xl bg-white duration-75"
      style={{
        bottom: '50%',
        transform: 'translateY(50%)',
        height: sidebarHeight + 'px',
      }}
    >
      <div className="w-full flex items-center justify-between rounded-t-md border-b border-b-slate-300 px-1.5 py-1 q640:px-2 q640:py-2 q960:px-3 q960:py-3">
        <h5 className="text-black text-sm q640:text-base">
          {title}
        </h5>
        <Button
          variant="ghost"
          className="h-auto rounded-full bg-transparent p-1"
          onClick={onClose}
        >
          <X className='text-blue-700 w-5 h-5' />
        </Button>
      </div>
      <div className="p-1.5 q640:p-2 q960:p-3 flex w-full flex-col overflow-y-auto overflow-x-hidden text-slate-700">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  )
}

export default InfoBox
