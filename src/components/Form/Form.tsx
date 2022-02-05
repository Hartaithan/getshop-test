import React from "react";
import { IErrorResponse, IFormProps } from "../../models/FormModel";
import { useNavigate } from "react-router-dom";
import "./form.scss";

let lastEditedIndex: number | null = null;

function Form(props: IFormProps) {
  const { form, setForm } = props;
  const [isComplete, setComplete] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<IErrorResponse | null>(null);
  let navigate = useNavigate();
  const apiKey = process.env.REACT_APP_NUMVERIFY_KEY;
  const keyboard: string[] = [
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

  React.useEffect(() => {
    if (!form.number.includes("_") && form.checkbox) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [form]);

  function clearErrors() {
    if (errors) {
      setErrors(null);
    }
  }

  function setNumber(event: any) {
    clearErrors();
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
    clearErrors();
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

  function handleSubmit() {
    const cleanedNumber = form.number.join("");
    const url = `http://apilayer.net/api/validate?access_key=${apiKey}&number=${cleanedNumber}&country_code=RU`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.valid) {
          navigate("./final");
        } else {
          setErrors(data);
          console.error("invalid number", data);
          setComplete(false);
        }
      });
  }

  return (
    <form className="form">
      <p className="form__title">Введите ваш номер мобильного телефона</p>
      <div
        className={errors ? "form__customInput invalid" : "form__customInput"}
      >
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
        {keyboard.map((key: string) => {
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
      <div className={errors ? "form__checkbox invalid" : "form__checkbox"}>
        {errors ? (
          <p>Неверно введён номер</p>
        ) : (
          <label className="control control--checkbox">
            Согласие на обработку персональных данных
            <input
              type="checkbox"
              onChange={(e) => setForm({ ...form, checkbox: e.target.checked })}
            />
            <div className="control__indicator"></div>
          </label>
        )}
      </div>
      <button
        className="form__submit"
        type="button"
        onClick={() => handleSubmit()}
        disabled={!isComplete}
      >
        Подтвердить номер
      </button>
    </form>
  );
}

export default Form;
