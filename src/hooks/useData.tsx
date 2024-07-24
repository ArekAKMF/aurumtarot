"use client";
import { useMemo } from "react";
import { cards } from "@/const/cards";
import { horoscop, gamesType } from "@/const/gamesType";

export const useData = () => {
  return useMemo(() => {
    return {
      allCards: cards,
      allHoroscope: horoscop,
      allGameTypes: gamesType,
    };
  }, []);
};
