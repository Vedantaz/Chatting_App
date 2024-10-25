// import { create } from "zustand";

// const useConversation = create((set) => ({
//   selectedConversation: null,
//   setSelectedConversation: (selectedConversation) =>
//     set({ selectedConversation }),
//   messages: [],

//   setMessage: (messages) => set({ messages }),
//   // addMessage: (newMessage) =>
//   //   set((state) => ({ messages: [...state.messages, newMessage] })),
//   // clearMessages: () => set({ messages: [] }),
// }));

// export default useConversation;

import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessage: (messages) => set({ messages }),
}));
export default useConversation;
