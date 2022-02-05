import React from "react";
import { IFormProps } from "../../models/FormModel";
import "./form.scss";

let lastEditedIndex: number | null = null;

function Form(props: IFormProps) {
  const { form, setForm } = props;
  const keyboard = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "СТЕРЕТЬ",
    "0",
  ];

  function setNumber(event: any) {
    if (form.number.includes("_")) {
      const number = event.target.outerText;
      const numbers = [...form.number];
      let index = numbers.findIndex((x) => x === "_");
      lastEditedIndex = index;
      numbers[index] = number;
      setForm({ ...form, number: numbers });
    }
  }

  function clear() {
    if (lastEditedIndex !== null) {
      const numbers = [...form.number];
      numbers[lastEditedIndex] = "_";
      if (lastEditedIndex === 0) {
        lastEditedIndex = null;
      } else {
        lastEditedIndex = lastEditedIndex - 1;
      }
      setForm({ ...form, number: numbers });
    }
  }

  return (
    <form className="form">
      <p className="form__title">Введите ваш номер мобильного телефона</p>
      <div className="form__customInput">
        {form.number.map((char: string, index: number) => {
          if (index === 0) {
            return (
              <React.Fragment key={`${index}${char}`}>
                <p>+7(</p>
                <p>{char}</p>
              </React.Fragment>
            );
          }
          if (index === 2) {
            return (
              <React.Fragment key={`${index}${char}`}>
                <p>{char}</p>
                <p>)</p>
              </React.Fragment>
            );
          }
          if (index === 5) {
            return (
              <React.Fragment key={`${index}${char}`}>
                <p>{char}</p>
                <p>-</p>
              </React.Fragment>
            );
          }
          if (index === 7) {
            return (
              <React.Fragment key={`${index}${char}`}>
                <p>{char}</p>
                <p>-</p>
              </React.Fragment>
            );
          }
          return <p>{char}</p>;
        })}
      </div>
      <p className="form__descr">
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </p>
      <div className="form__keyboard">
        {keyboard.map((key) => {
          if (key === keyboard[9]) {
            return (
              <button
                className="reset"
                onClick={() => clear()}
                type="button"
                key={key}
              >
                {key}
              </button>
            );
          }
          return (
            <button onClick={(e) => setNumber(e)} type="button" key={key}>
              {key}
            </button>
          );
        })}
      </div>
      <div className="form__checkbox">
        <label className="control control--checkbox">
          Согласие на обработку персональных данных
          <input type="checkbox" />
          <div className="control__indicator"></div>
        </label>
      </div>
      <button className="form__submit" type="submit">
        Подтвердить номер
      </button>
    </form>
  );
}

export default Form;
