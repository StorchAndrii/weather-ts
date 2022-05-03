import React from "react";
import s from "./Days.module.scss";

interface Props {}

export const Tabs = () => {
  return (
    <div className={s.tabs}>
      <div className={s.wrapper}>
        <div className={s.items}>На неделю</div>
        <div className={s.items}>На месяц</div>
        <div className={s.items}>На 10 дней</div>
      </div>
      <div className={s.items}>Отменить</div>
    </div>
  );
};
