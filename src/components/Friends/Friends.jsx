import React from "react";
import cn from "./Friends.module.css";

export const Friends = ({ friends }) => {
  const friendsElements = friends.map(({ name, id }) => {
    return (
      <li key={id} className={cn.friends_item}>
        {name}
      </li>
    );
  });
  return (
    <section className={cn.friends}>
      <ul className={cn.friends_list}>{friendsElements}</ul>
    </section>
  );
};
