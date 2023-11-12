import { type ElementType } from 'react'

import { cn } from '@/shared/lib'
import { type PolymorphicComponentProp } from '@/types'

import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'

import css from './Button.module.css'

type ButtonStyleProps = {
  beforeIcon?: JSX.Element
  afterIcon?: JSX.Element
  size?: 'small' | 'medium' | 'large' | 'icon'
  variant?: 'default' | 'primary' | 'secondary'
  isLoading?: boolean
}

type ButtonProps<C extends ElementType> = PolymorphicComponentProp<
  C,
  ButtonStyleProps
>

export function Button<C extends ElementType = 'button'>({
  className,
  as,
  beforeIcon,
  afterIcon,
  children,
  size = 'small',
  variant = 'default',
  isLoading = false,
  ...props
}: ButtonProps<C>) {
  const Component = as ?? 'button'

  const buttonClassName = cn(css.root, css[size], css[variant], className)

  return (
    <Component
      type={Component === 'button' ? 'button' : undefined}
      className={buttonClassName}
      {...props}
    >
      <div className={css.root__content}>
        {isLoading ? (
          <>
            {children}
            <LoadingSpinner />
          </>
        ) : (
          <>
            {beforeIcon ?? ''}
            <span className={css.root__text}>{children}</span>
            {afterIcon ?? ''}
          </>
        )}
      </div>
    </Component>
  )
}
