import { cva, type VariantProps } from 'class-variance-authority'
import React, { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

interface IProps
  extends PropsWithChildren,
  VariantProps<typeof typographyVariants> {
  className?: React.ComponentProps<'div'>['className']
  onClick?: () => void
}

const typographyVariants = cva('text-slate-700', {
  variants: {
    variant: {
      default: 'font-onest-regular text-[18px] ',
      'pin-label': 'font-onest-medium text-[16px]',
      'group-title': 'font-onest-medium text-[18px]',
      'menu-item': 'font-onest-medium text-[20px]',
      'menu-title': 'font-onest-medium text-[24px]',
      span: 'font-onest-regular text-[18px]',
      title: 'font-onest-medium text-[24px]',
      section: 'font-onest-bold text-[20px]'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

const Typography = React.forwardRef<HTMLParagraphElement, IProps>(
  ({ className, variant, children, onClick }, ref) => {
    return (
      <p
        onClick={onClick}
        className={cn(
          typographyVariants({
            variant,
            className
          })
        )}
        ref={ref}
      >
        {children}
      </p>
    )
  }
)

export default Typography
