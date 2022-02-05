import React from "react";
import "./form.scss";

function Form() {
  return (
    <form className="form">
      <p className="form__title">Введите ваш номер мобильного телефона</p>
      <input
        className="form__input"
        type="text"
        placeholder="+7(___)___-__-__"
      />
      <p className="form__descr">
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </p>
      <div className="form__keyboard">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="reset">СТЕРЕТЬ</button>
        <button>0</button>
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
