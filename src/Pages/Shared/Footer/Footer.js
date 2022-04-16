import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p>
        <small>Copywrite © {year} Name</small>
      </p>
    </footer>
  );
};

export default Footer;
