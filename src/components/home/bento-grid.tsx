import { cn } from '@/lib/utils'

export function BentoGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4', className)}>
      {children}
    </div>
  )
}

export function BentoCell({
  children,
  className,
  span = 'default',
}: {
  children: React.ReactNode
  className?: string
  span?: 'default' | 'wide' | 'full'
}) {
  return (
    <div
      className={cn(
        span === 'wide' && 'md:col-span-2',
        span === 'full' && 'col-span-full',
        className
      )}
    >
      {children}
    </div>
  )
}
