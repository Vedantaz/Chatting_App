import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMsg from "../../context/useGetMsg.jsx";
import Loading from "../../components/Loading.jsx";

import useGetSocketMsg from "../../context/useGetSocketMsg.jsx";
function Messages() {
  const { loading, messages } = useGetMsg();
  useGetSocketMsg(); // listing incoming messages

  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);
  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message, index) => (
          <div key={message._id || index} ref={lastMsgRef}>
            <Message message={message} />
          </div>
        ))
      )}

      {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[20%]">
            Say! Hi to start the conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;
