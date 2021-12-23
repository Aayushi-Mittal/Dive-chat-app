// onMessage(content) {
//     if (this.selectedUser) {
//       socket.emit("private message", {
//         content,
//         to: this.selectedUser.userID,
//       });
//       this.selectedUser.messages.push({
//         content,
//         fromSelf: true,
//       });
//     }
//   }

//   onSelectUser(user) {
//     this.selectedUser = user;
//     user.hasNewMessages = false;
//   },
// }

// created() {
//   socket.on("connect", () => {
//     this.users.forEach((user) => {
//       if (user.self) {
//         user.connected = true;
//       }
//     });
//   });
  
//   socket.on("disconnect", () => {
//     this.users.forEach((user) => {
//       if (user.self) {
//         user.connected = false;
//       }
//     });
//   });

//   const initReactiveProperties = (user) => {
//     user.hasNewMessages = false;
//   };

//   socket.on("users", (users) => {
//     users.forEach((user) => {
//       user.messages.forEach((message) => {
//         message.fromSelf = message.from === socket.userID;
//       });
//       for (let i = 0; i < this.users.length; i++) {
//         const existingUser = this.users[i];
//         if (existingUser.userID === user.userID) {
//           existingUser.connected = user.connected;
//           existingUser.messages = user.messages;
//           return;
//         }
//       }
//       user.self = user.userID === socket.userID;
//       initReactiveProperties(user);
//       this.users.push(user);
//     });
//     // put the current user first, and sort by username
//     this.users.sort((a, b) => {
//       if (a.self) return -1;
//       if (b.self) return 1;
//       if (a.username < b.username) return -1;
//       return a.username > b.username ? 1 : 0;
//     });
//   });

//   socket.on("user connected", (user) => {
//     for (let i = 0; i < this.users.length; i++) {
//       const existingUser = this.users[i];
//       if (existingUser.userID === user.userID) {
//         existingUser.connected = true;
//         return;
//       }
//     }
//     initReactiveProperties(user);
//     this.users.push(user);
//   });

//   socket.on("user disconnected", (id) => {
//     for (let i = 0; i < this.users.length; i++) {
//       const user = this.users[i];
//       if (user.userID === id) {
//         user.connected = false;
//         break;
//       }
//     }
//   });

//   socket.on("private message", ({ content, from, to }) => {
//     for (let i = 0; i < this.users.length; i++) {
//       const user = this.users[i];
//       const fromSelf = socket.userID === from;
//       if (user.userID === (fromSelf ? to : from)) {
//         user.messages.push({
//           content,
//           fromSelf,
//         });
//         if (user !== this.selectedUser) {
//           user.hasNewMessages = true;
//         }
//         break;
//       }
//     }
//   });
// }

// destroyed() {
//   socket.off("connect");
//   socket.off("disconnect");
//   socket.off("users");
//   socket.off("user connected");
//   socket.off("user disconnected");
//   socket.off("private message");
// },

// export {};