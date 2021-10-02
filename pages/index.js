import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { testAction } from "redux/actions";
import useScrollProgressBar from "hooks/useScrollProgressBar";
import Todo from "components/Todo";
import DefaultLayout from "layout/DefaultLayout";
import { useTranslation } from "react-i18next";
import SectionCharacter from "components/SectionCharacter";
import SectionCar from "components/SectionCar";
import SectionMap from "components/SectionMap";
import SectionSpecialMod from "components/SectionSpecialMod";
import SectionSource from "components/SectionSource";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../layout/Header";

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
    <>
      <Header />
      <SectionSource
        onClickCharacter={() => {
          fullpageApi.moveTo(3, 0);
        }}
        onClickCar={() => {
          fullpageApi.moveTo(4, 0);
        }}
        onClickMap={() => {
          fullpageApi.moveTo(5, 0);
        }}
        onClickSpecialMode={() => {
          fullpageApi.moveTo(6, 0);
        }}
      />
      <SectionCharacter />
      <SectionCar />
      <SectionMap />
      <SectionSpecialMod />
    </>
  );
}
