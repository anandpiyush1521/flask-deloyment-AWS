import React from "react";

export default function App() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className="App">
      <Mailto email="payerupINDIA@gmail.com" subject="A Test Email">
        <p>
          <h1>Email</h1>
        </p>
      </Mailto>
    </div>
  );
}
