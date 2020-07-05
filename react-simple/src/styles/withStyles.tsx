import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/core"
import React, { ComponentType } from "react"
import Global from "./Global"
import Reset from "./Reset"

const emotionCache = createCache()
emotionCache.compat = true

export const withStyles = <P extends Record<string, unknown>>(Komponent: ComponentType<P>) => {
  const WithStyles = (props: P) => {
    return (
      <CacheProvider value={emotionCache}>
        <Reset />
        <Global />
        <Komponent {...props} />
      </CacheProvider>
    )
  }

  return WithStyles
}
