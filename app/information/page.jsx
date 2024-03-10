import React from 'react';

function AdvertisingDisclosure() {
  return (
    <div>
      <header>
        <h1>Advertising Disclosure</h1>
      </header>
      <main>
        <p>This website may contain advertisements, sponsored content, paid insertions, affiliate links or other forms of monetization.</p>
        <p>Our website may receive compensation for clicks or purchases made through the links on this site. This compensation may impact how, where and in what order products appear. We do our best to ensure that the content and opinions expressed on our website are accurate and unbiased.</p>
        <p>Any product claim, statistic, quote or other representation about a product or service should be verified with the manufacturer, provider or party in question.</p>
        <p>For questions about this website, please <a href="/contact">contact us</a>.</p>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AdvertisingDisclosure;
