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
      <ReactFullpage
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <section className="section">
                <Header />
              </section>
              <section className="section">
                <SectionSource />
              </section>
              <section className="section" id="section-character">
                <SectionCharacter />
              </section>
              <section className="section" id="section-car">
                <SectionCar />
              </section>
              <section className="section" id="section-map">
                <SectionMap />
              </section>
              <section className="section">
                <SectionSpecialMod />
              </section>
            </div>
          );
        }}
      />
    </>
  );
}
