import React from "react";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="container text-center py-3">
        <small className="copyright">
          Designed with <span className="sr-only">love</span>
          <i className="fas fa-heart" style={{ color: "#fb866a" }}></i> by
          <a
            className="app-link"
            href=""
            target="_blank"
          >
            {" "}
            Muhammad Usama{" "}
          </a>
          for developers
        </small>
      </div>
    </footer>
  );
}
