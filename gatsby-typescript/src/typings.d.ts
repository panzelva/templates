interface CSSModule {
  [className: string]: string
}

declare module '*.svg' {
  const content: any
  export default content
}
