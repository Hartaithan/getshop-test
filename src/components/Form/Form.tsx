import React from "react";
import { IErrorResponse, IFormProps } from "../../models/FormModel";
import { useNavigate } from "react-router-dom";
import "./form.scss";
import keyBindings from "../../keys/keyboardBindings";
import { IKeyObject } from "../../models/ToFormBadgeModel";

let lastEditedIndex: number | null = null;

function Form(props: IFormProps) {
  const { form, setForm } = props;
  const [isComplete, setComplete] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<IErrorResponse | null>(null);
  const activeRef = React.useRef<any>(null);
  let navigate = useNavigate();
  const apiKey = process.env.REACT_APP_NUMVERIFY_KEY;
  const keyboard: IKeyObject[] = [
    { key: "1", pos: "00" },
    { key: "2", pos: "10" },
    { key: "3", pos: "20" },
    { key: "4", pos: "01" },
    { key: "5", pos: "11" },
    { key: "6", pos: "21" },
    { key: "7", pos: "02" },
    { key: "8", pos: "12" },
    { key: "9", pos: "22" },
    { key: "СТЕРЕТЬ", pos: "03" },
    { key: "0", pos: "13" },
  ];

  React.useEffect(() => {
    if (!form.number.includes("_") && form.checkbox) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [form]);

  React.useEffect(() => {
    activeRef.current.focus();
  }, []);

  function nextElement(key: number) {
    let pos;
    pos = activeRef.current.dataset.pos;
    let xy = pos.split("");
    console.log(key);
    switch (key) {
      case keyBindings.KEY_UP:
        if (pos === "13") {
          xy = ["2", "2"];
          break;
        }
        xy[1] = parseInt(xy[1]) - 1;
        break;
      case keyBindings.KEY_DOWN:
        if (["02", "12"].includes(pos)) {
          xy = ["0", "3"];
          break;
        }
        if (pos === "22") {
          xy = ["1", "3"];
          break;
        }
        if (pos === "13") {
          xy = ["0", "4"];
          break;
        }
        xy[1] = parseInt(xy[1]) + 1;
        break;
      case keyBindings.KEY_LEFT:
        xy[0] = parseInt(xy[0]) - 1;
        break;
      case keyBindings.KEY_RIGHT:
        if (["21", "22", "13", "04", "05"].includes(pos)) {
          xy = ["3", "0"];
          break;
        }
        xy[0] = parseInt(xy[0]) + 1;
        break;
      default:
        break;
    }
    let posString = xy.join("");
    const nextEl: HTMLButtonElement | HTMLInputElement | null =
      document.querySelector(`[data-pos="${posString}"]`);
    if (nextEl && !nextEl.disabled) {
      activeRef.current = nextEl;
      activeRef.current.focus();
    }
  }

  const handleKeyDown = React.useCallback(
    (e) => {
      if (
        [
          keyBindings.KEY_UP,
          keyBindings.KEY_DOWN,
          keyBindings.KEY_LEFT,
          keyBindings.KEY_RIGHT,
        ].includes(e.keyCode)
      ) {
        nextElement(e.keyCode);
      }
      if (
        e.keyCode >= keyBindings.NUMKEY_0 &&
        e.keyCode <= keyBindings.NUMKEY_9
      ) {
        setNumberFromNumpad(e);
      }
      if (e.keyCode >= keyBindings.KEY_0 && e.keyCode <= keyBindings.KEY_9) {
        setNumberFromNumpad(e);
      }
      if (e.keyCode === keyBindings.KEY_BACK) {
        clear();
      }
    },
    [form.number] // eslint-disable-line
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  function clearErrors() {
    if (errors) {
      setErrors(null);
    }
  }

  function setNumberFromNumpad({ key }: any) {
    clearErrors();
    if (form.number.includes("_")) {
      const numbers = [...form.number];
      let index = numbers.findIndex((x) => x === "_");
      lastEditedIndex = index;
      numbers[index] = key;
      setForm({ ...form, number: numbers });
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
    const url = `https://apilayer.net/api/validate?access_key=${apiKey}&number=${cleanedNumber}&country_code=RU`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.valid) {
          navigate("/final");
        } else {
          setErrors(data);
          console.error("invalid number", data);
          setComplete(false);
        }
        activeRef.current = document.querySelector(`[data-pos="00"]`);
        activeRef.current.focus();
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
        {keyboard.map((key: IKeyObject) => {
          if (key === keyboard[0]) {
            return (
              <button
                onClick={(e) => setNumber(e)}
                type="button"
                key={key.pos}
                ref={activeRef}
                data-pos={key.pos}
              >
                {key.key}
              </button>
            );
          }
          if (key === keyboard[9]) {
            return (
              <button
                className="reset"
                onClick={() => clear()}
                type="button"
                key={key.pos}
                data-pos={key.pos}
              >
                {key.key}
              </button>
            );
          }
          return (
            <button
              onClick={(e) => setNumber(e)}
              type="button"
              key={key.pos}
              data-pos={key.pos}
            >
              {key.key}
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
              checked={form.checkbox}
              onChange={(e) => setForm({ ...form, checkbox: e.target.checked })}
              onKeyDown={(e) => {
                if (e.keyCode === keyBindings.KEY_OK) {
                  setForm({ ...form, checkbox: !form.checkbox });
                }
              }}
              data-pos="04"
            />
            <div className="control__indicator" />
          </label>
        )}
      </div>
      <button
        className="form__submit"
        type="button"
        onClick={() => handleSubmit()}
        disabled={!isComplete}
        data-pos="05"
      >
        Подтвердить номер
      </button>
    </form>
  );
}

export default Form;
