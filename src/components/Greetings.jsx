export default function Greetings() {
  const otherGreetings = [
    {
      name: "Hans",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      name: "Olav",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. readable content of a page when looking at its layout.",
    },
    {
      name: "Inger",
      message: "It is a long established fact that a reader will be distracted by",
    },
  ];

  return (
    <div className="greetings">
      <form className="greetings__form" action="">
        <h1 className="greetings__form__title">SEND JULEHILSE</h1>
        <label className="greetings__form__label" for="name">
          Navn
        </label>
        <input className="greetings__form__input" type="text" id="name" />
        <label className="greetings__form__label" for="message">
          Julehilsen
        </label>
        <textarea className="greetings__form__input" id="message"></textarea>
        <input className="greetings__form__submit" type="submit" />
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
