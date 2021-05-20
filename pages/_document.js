import React from 'react';
import Document, { Html, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
