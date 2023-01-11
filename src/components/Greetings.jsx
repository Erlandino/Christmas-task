// Imports
import { useEffect, useState } from "react";

// Greetings component
export default function Greetings() {
  // contains an object with two empty properties called name and message
  const [formItem, setFormItem] = useState({
    name: "",
    message: "",
  });

  // contains an array with objects containing a name,
  // message and dataSent property
  const [otherGreetings, setOtherGreetings] = useState([
    {
      name: "Hans",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      dateSent: "12-12-2022",
    },
    {
      name: "Olav",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. readable content of a page when looking at its layout.",
      dateSent: "13-12-2022",
    },
    {
      name: "Inger",
      message: "It is a long established fact that a reader will be distracted by",
      dateSent: "17-12-2022",
    },
  ]);

  // sets the formItem value according to the event target value called
  // also adds a property called dataSent, which contains when data was sent
  function inputValue(event) {
    setFormItem((prevItem) => {
      return {
        name: event.target.id === "name" ? event.target.value : prevItem.name,
        message: event.target.id === "message" ? event.target.value : prevItem.message,
        dateSent: `${new Date().getDate()}-${
          new Date().getMonth() + 1
        }-${new Date().getFullYear()}`,
      };
    });
  }

  // loads what currently is inside the formItem state into
  // localstorage with the name "Greeting"
  function addGreeting(event) {
    event.preventDefault();
    localStorage.setItem("Greeting", JSON.stringify(formItem));
    postGreeting();
  }

  // Only runs on first load
  useEffect(() => {
    postGreeting();
  }, []);

  // posts what inside of local storage into the greetings section
  function postGreeting() {
    const post = localStorage.getItem("Greeting");

    if (post) {
      setOtherGreetings((prevState) => {
        return [JSON.parse(post), ...prevState];
      });
    }
  }

  return (
    // Greetings section
    <div className="greetings">
      {/* Greetings form */}
      <form className="greetings__form">
        {/* Title */}
        <h1 className="greetings__form__title">SEND JULEHILSE</h1>
        {/* Name label */}
        <label className="greetings__form__label" htmlFor="name">
          Navn
        </label>
        {/* Name input  */}
        <input
          className="greetings__form__input greetings__form__input-name"
          type="text"
          id="name"
          onChange={inputValue}
        />
        {/* Julehilse label */}
        <label className="greetings__form__label" htmlFor="message">
          Julehilsen
        </label>
        {/* Julehilsen input */}
        <textarea className="greetings__form__input" id="message" onChange={inputValue}></textarea>

        {/* Submit button */}
        <input
          className="greetings__form__submit"
          type="submit"
          onClick={addGreeting}
          value="Send"
          onChange={() => inputValue("message")}
        />
      </form>
      {/* List of the current greetings */}
      <div className="greetings__list">
        {/* Title */}
        <h1 className="greetings__list__title">JULEHILSER</h1>
        {otherGreetings.map((element, index) => {
          return (
            <div key={index} className="greetings__list__output">
              <h3 className="greetings__list__output__title">{element.name}</h3>
              <p className="greetings__list__output__text">{element.message}</p>
              <p className="greetings__list__output__date">{element.dateSent}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
