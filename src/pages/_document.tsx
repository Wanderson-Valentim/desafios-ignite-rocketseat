
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return(
      <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,500&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/images/favicon.svg" type="image/svg" />
      </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
      </Html>
    )
  }
}