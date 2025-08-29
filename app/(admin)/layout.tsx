import { Navigation } from '@/components/navigation'

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col gap-8 bg-gray-100">
      <Navigation />

      <main className="flex flex-col items-center justify-center px-6 pb-10">
        {children}
      </main>
    </div>
  )
}
