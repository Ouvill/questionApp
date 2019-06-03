import { QuestionArray } from "../constants";

export interface Counter {
    [id: string]: number;
}

const COUNTER = "counter";

export const initializeCounter = () => {
    const counter: Counter = {};

    for (let i = 0; i < QuestionArray.length; i++) {
        counter[i] = 0;
    }
    localStorage.setItem(COUNTER, JSON.stringify(counter));
};

export const initializeCounterIfNoData = () => {
    if (!localStorage.getItem(COUNTER)) {
        initializeCounter();
    }
};

export const loadCounter: () => Counter = () => {
    const data = localStorage.getItem(COUNTER);
    if (data) {
        return JSON.parse(data);
    } else {
        initializeCounter();
    }
};

export const setCounter = (counter: Counter) => {
    localStorage.setItem(COUNTER, JSON.stringify(counter));
};

export const incrementCounter = (id: number) => {
    const counter = loadCounter();
    const next = { ...counter, [id]: counter[id] + 1 };
    console.log("next:", next);
    setCounter(next);
};

export const clearCounter = () => {
    localStorage.removeItem(COUNTER);
    initializeCounter();
};
