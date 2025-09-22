import React from 'react';

/**
 * Override Danger admonition icon to use the same SVG as Warning.
 * This file follows Docusaurus theme swizzle structure: src/theme/Admonition/Icon/Danger/index.js
 */
export default function DangerIcon(props) {
  return (
    <svg viewBox="0 0 16 16" width={16} height={16} aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
      />
    </svg>
  );
}
