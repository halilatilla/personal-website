import React from "react";

function Custom404() {
  return (
    <div className="error">
      404 Ups !! There is nothing here 🧐
      <style jsx>{`
        .error {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-size: 40px;
        }
      `}</style>
    </div>
  );
}

export default Custom404;
