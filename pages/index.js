import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { testAction } from "redux/actions";
import useScrollProgressBar from "hooks/useScrollProgressBar";
import Todo from "components/Todo";
import DefaultLayout from "layout/DefaultLayout";
import { useTranslation } from "react-i18next";
import SectionNews from "./section-news";
import SectionCharacter from "./section-character";
import SectionCar from "./section-car";
import SectionMap from "./section-map";

export default function Index() {
  const dispatch = useDispatch();
  const testReducer = useSelector((state) => state.testReducer);
  const { isFetching, listTodos } = testReducer;

  const { t } = useTranslation();

  useScrollProgressBar();
  useEffect(() => {
    dispatch(testAction());
  }, []);

  return (
    <DefaultLayout>
      <SectionNews />
      <SectionCharacter />
      <SectionCar />
      <SectionMap />
    </DefaultLayout>
  );
}
