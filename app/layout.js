import Navigation from './components/navbar/page';

import './styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id='mainBody'>
        <div><Navigation /></div>
        <div style={{ width: "100%" }}> {children} </div>
      </body>
    </html>
  );
}
