/* eslint-disable no-underscore-dangle */
declare const _brand: unique symbol

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  declare type RootState = import('../app/appStore').RootState
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  declare type AppDispatch = import('../app/appStore').AppDispatch
}

export {}
