import { LoadingSpinner } from '..'

import css from './Loading.module.css'

export function Loading() {
  return (
    <div className={css.loading}>
      <LoadingSpinner />
    </div>
  )
}
