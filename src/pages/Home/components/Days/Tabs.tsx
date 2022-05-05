import React from "react";
import s from "./Days.module.scss";

interface Props {}

interface TabsItem {
  value: string;
}

export const Tabs = () => {
  const tabs: TabsItem[] = [
    {
      value: "На неделю",
    },
    {
      value: "На месяц",
    },
    {
      value: "На 10 дней",
    },
  ];
  return (
    <div className={s.tabs}>
      <div className={s.wrapper}>
        {tabs.map((tab) => (
          <div className={s.item + " " + s.active} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
};
