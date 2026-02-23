import { createContext, useState } from "react";

type ContextValueType = {
  count: number;
  increment: () => void;
};

export const CounterContext = createContext<ContextValueType | null>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

export default function ContextProvider({ children }: ContextProviderProps) {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(count + 1);

  return (
    <CounterContext value={{ count, increment }}>{children}</CounterContext>
  );
}
