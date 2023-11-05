import {
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ElementType,
  type PropsWithChildren
} from 'react'

// Read more about Polymorphic Components:
// https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/

type AsProp<Component extends ElementType> = {
  as?: Component
}

type PropsToOmit<
  Component extends ElementType,
  Props
> = keyof (AsProp<Component> & Props)

export type PolymorphicComponentProp<
  Component extends ElementType,
  Props = {}
> = PropsWithChildren<Props & AsProp<Component>> &
  Omit<ComponentPropsWithoutRef<Component>, PropsToOmit<Component, Props>>

export type PolymorphicRef<Component extends ElementType> =
  ComponentPropsWithRef<Component>['ref']

export type PolymorphicComponentPropWithRef<
  Component extends ElementType,
  Props = {}
> = PolymorphicComponentProp<Component, Props> & {
  ref?: PolymorphicRef<Component>
}
