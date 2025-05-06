import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState(`function sum(params) 
                {
                  return 1+1
                }`);

  const [review, setReview] = useState("");
  useEffect(() => {
    prism.highlightAll();
  });

  async function reviewCode() {
    const response = await axios.post("http://localhost:3000/ai/get-review", {
      code,
    });
    setReview(response.data);
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code","Fira Mono",monospace', // Sets a monospace font, prioritizing Fira
                fontSize: 16, // Font size: 16px
                border: "1px solid #ddd", // Light gray border
                borderRadius: "5px", // Rounded corners
                height: "100%", // Full height of parent container
                width: "100%", // Full width of parent container
              }}
            />
          </div>
          <div className="review" onClick={reviewCode}>
            Review
          </div>
        </div>
        <div className="right">{review}</div>
      </main>
    </>
  );
}

export default App;
