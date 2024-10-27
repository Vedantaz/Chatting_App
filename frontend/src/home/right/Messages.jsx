// import React, { useRef, useEffect } from "react";
// import Message from "./Message";
// import useGetMsg from "../../context/useGetMsg";
// import Loading from "../../components/Loading";

// export default function Messages() {
//   const { messages, loading } = useGetMsg();
//   console.log(messages);
//   const lastMsgRef = useRef();
//   useEffect(() => {
//     setTimeout(() => {
//       if (lastMsgRef.current) {
//         lastMsgRef.current.scrollView({ behavior: "smooth" });
//       }
//     }, 100);
//   }, [messages]);

//   return (
//     <>
//       {loading ? (
//         <Loading></Loading>
//       ) : (
//         messages.length > 0 &&
//         messages.map((message) => {
//           return <Message key={message._id} message={message} />;
//         })
//       )}

//       <div className="" style={{ minHeight: "calc(88vh - 10vh)" }}>
//         <Message></Message>
//         <Message></Message>
//         <Message></Message>
//         <Message></Message>
//         {!loading && messages.length === 0 && (
//           <div>
//             <p className="text-center font-sans mt-[20%]">Say! Hi </p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMsg from "../../context/useGetMsg.jsx";
import Loading from "../../components/Loading.jsx";

import useGetSocketMsg from "../../context/useGetSocketMsg.jsx";
function Messages() {
  const { loading, messages } = useGetMsg();
  useGetSocketMsg(); // listing incoming messages
  console.log(messages);

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
        messages.map((message) => (
          <div key={message._id} ref={lastMsgRef}>
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
