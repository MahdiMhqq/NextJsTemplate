import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";
import "../src/assets/styles/globals.scss"
// import "../src/assets/styles/CustomTable.scss"

import React from 'react';

export const decorators = [
  (Story) => (
    <div style={{padding: '1rem 1.5rem'}}>
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "mainBack",
    values: [
      {
        name: "mainBack",
        value: "#171E30",
      },
      {
        name: "White",
        value: "#FFF",
      },
      {
        name: "Black",
        value: "#000",
      },
    ],
  },
};
