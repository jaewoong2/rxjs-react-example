import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { messageService } from "./service/messageService";

function App() {
  const [messages, setMessages] = useState<{ text: string }[] | undefined>(
    undefined
  );

  useEffect(() => {
    // subscribe to home component messages
    const subscription = messageService.onMessage().subscribe(message => {
      if (message) {
        // add message to local state if not empty
        setMessages(messages => messages && [...messages, message]);
      } else {
        // clear messages when empty message received
        setMessages([]);
      }
    });

    // return unsubscribe method to execute when component unmounts
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="jumbotron">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            {messages?.map((message, index) => (
              <div key={index} className="alert alert-success">
                {message.text}
              </div>
            ))}
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export { App };
