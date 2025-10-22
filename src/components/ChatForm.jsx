import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current?.value?.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // update chat history with user's message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // add thinking placeholder and then generate the bot's response
    setTimeout(() => {
      // append the "Thinking..." placeholder
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);

      // call the function to generate the bot's response with the history that includes the user's message
      generateBotResponse([
        ...chatHistory,
        { role: "user", text: userMessage },
      ]);
    }, 640);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
        aria-label="Message input"
      />
      <button type="submit" className="material-symbols-rounded">
        arrow_upward
      </button>
    </form>
  );
};

export default ChatForm;
