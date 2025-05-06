import { useEffect, useState } from "react";
import * as webllm from "@mlc-ai/web-llm";
import "./app.scss";

function App() {
  const [count, setCount] = useState(0);
  const [messages, setmessages] = useState([
    {
      role: "model",
      content: "Hello, how can I help you?",
    },
    {
      role: "user",
      content: "Hello, how can I help you?",
    },
    {
      role: "model",
      content: "Hello, how can I help you?",
    },
    {
      role: "user",
      content: "Hello, how can I help you?",
    },
    {
      role: "model",
      content: "Hello, how can I help you?",
    },
    {
      role: "user",
      content: "Hello, how can I help you?",
    },
  ]);
  const [engine, setengine] = useState(null);

  useEffect(() => {
    const selectedModel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";
    webllm
      .CreateMLCEngine(selectedModel, {
        initProgressCallback: (initProgress) => {
          console.log(initProgress);
        },
      })
      .then((engine) => {
        console.log(engine);
      });
  }, []);

  return (
    <main>
      <section>
        <div className="conversation-area">
          <div className="messages">
            {messages.map((message, index) => {
              return (
                <div className={`message ${message.role}`} key={index}>
                  {message.content}
                </div>
              );
            })}
          </div>
          <div className="input-area">
            <input type="text" placeholder="Message LLm" />
            <button>send</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
