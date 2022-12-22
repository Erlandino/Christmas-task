import { useEffect, useState } from "react";

export default function Greetings() {
  const [formItem, setFormItem] = useState({
    name: "",
    message: "",
  });

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

  function inputValue(event) {
    setFormItem((prevItem) => {
      return {
        name: event.target.id === "name" ? event.target.value : prevItem.name,
        message: event.target.id === "message" ? event.target.value : prevItem.message,
      };
    });
  }
  function addGreeting(event) {
    event.preventDefault();
    localStorage.setItem("Greeting", JSON.stringify(formItem));
    postGreeting();
  }

  useEffect(() => {
    postGreeting();
  }, []);

  function postGreeting() {
    const post = localStorage.getItem("Greeting");
    console.log(post);
    if (post) {
      setOtherGreetings((prevState) => {
        return [JSON.parse(post), ...prevState];
      });
    }
  }

  // if (localStorage.getItem("Greeting")) console.log("yes");
  return (
    <div className="greetings">
      <form className="greetings__form">
        <h1 className="greetings__form__title">SEND JULEHILSE</h1>
        <label className="greetings__form__label" htmlFor="name">
          Navn
        </label>
        <input
          className="greetings__form__input greetings__form__input-name"
          type="text"
          id="name"
          onChange={inputValue}
        />
        <label className="greetings__form__label" htmlFor="message">
          Julehilsen
        </label>
        <textarea className="greetings__form__input" id="message" onChange={inputValue}></textarea>
        <input
          className="greetings__form__submit"
          type="submit"
          onClick={addGreeting}
          value="Send"
          onChange={() => inputValue("message")}
        />
      </form>

      <div className="greetings__list">
        <h1 className="greetings__list__title">JULEHILSER</h1>
        {otherGreetings.map((element, index) => {
          return (
            <div key={index} className="greetings__list__output">
              <h3 className="greetings__list__output__title">{element.name}</h3>
              <p className="greetings__list__output__text">{element.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
