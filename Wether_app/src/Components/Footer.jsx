import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} All Rights Reserved. Made with 🖤 by{" "}
        <a
          href="https://www.linkedin.com/in/faizurrahman-868700326/"
          target="_blank"
          rel="noopener noreferrer"
        
        >
          Faizur Rahman
        </a>
      </div>
    </footer>
  );
};

export default Footer;
