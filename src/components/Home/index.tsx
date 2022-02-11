import React from "react";
import { messageService } from "../../service/messageService";

function Home() {
  function sendMessage() {
    // send message to subscribers via observable subject
    messageService.sendMessage(
      "Message from Home Page Component to App Component!"
    );
  }

  function clearMessages() {
    // clear messages
    messageService.clearMessages();
  }

  return (
    <div>
      <h2>React Hooks + RxJS Component Communication</h2>
      <button onClick={sendMessage} className="btn btn-primary mr-2">
        Send Message
      </button>
      <button onClick={clearMessages} className="btn btn-secondary">
        Clear Messages
      </button>
    </div>
  );
}

export default React.memo(Home);
