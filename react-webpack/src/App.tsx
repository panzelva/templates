import { css } from "@emotion/react"
import React from "react"
import { Square } from "./components/Square"
import { withStyles } from "./styles/withStyles"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"

function Root() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1
              css={css`
                color: blueviolet;
              `}
            >
              Home
            </h1>

            <Link to="/about">About</Link>

            <Square />
          </div>
        }
      />

      <Route
        path="about"
        element={
          <div>
            <h1
              css={css`
                color: greenyellow;
              `}
            >
              About
            </h1>

            <Link to="/">Home</Link>
          </div>
        }
      />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  )
}

export default withStyles(App)
