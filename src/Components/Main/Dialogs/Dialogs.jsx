import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialogs.css";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div>{props.message}</div>;
};

let dialogs = [
  { id: 1, name: "Marina" },
  { id: 1, name: "Makson" },
  { id: 1, name: "Oleg" },
  { id: 1, name: "Tanya" },
  { id: 1, name: "Sasha" },
];

let messages = [
  { id: 1, text: "Hello" },
  { id: 2, text: "How are you" },
  { id: 3, text: "Time to eat" },
];

let dialogsElements = dialogs.map((dialog) => (
  <DialogsItem name={dialog.name} id={dialog.id} />
));

let messagesElements = messages.map((message) => (
  <Message message={message.text} id={message.id} />
));

const Dialogs = () => {
  return (
    <div className="dialogs">
      <div className="dialogsItem">{dialogsElements}</div>
      <div className="dialogsMesagge">{messagesElements}</div>
    </div>
  );
};

// const Dialogs = () => {
//   return (
//     <div className="dialogs">
//       <div className="dialogsItem">
//         <DialogsItem name="Marina" id="01" />
//         <DialogsItem name="Makson" id="02" />
//         <DialogsItem name="Oleg" id="03" />
//         <DialogsItem name="Tanya" id="04" />
//         <DialogsItem name="Sasha" id="05" />
//       </div>
//       <div className="dialogsMesagge">
//         <Message message="Hello!" />
//         <Message message="How are you ?" />
//         <Message message="Time to eat" />
//       </div>
//     </div>
//   );
// };

export default Dialogs;
