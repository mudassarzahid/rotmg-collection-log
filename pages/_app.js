import React from "react";

const _App = ({Component, pageProps}) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default _App
