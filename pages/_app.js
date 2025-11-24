// pages/_app.js

import '../style.css'; // Importando o arquivo CSS global
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
