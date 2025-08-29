import { Preview } from '@/components/preview'

interface BlocksAndAppearanceLayoutProps {
  children: React.ReactNode
}

export default function BlocksAndAppearanceLayout({
  children
}: BlocksAndAppearanceLayoutProps) {
  return (
    <div className="grid w-full max-w-5xl gap-8 lg:grid-cols-[1fr_420px]">
      {children}
      <Preview />
    </div>
  )
}
