import React from 'react';

const ExternalLink = ({ href, children, ...props }) => (
  <a
    href={href}
    className="Link-root"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

export default ExternalLink;
