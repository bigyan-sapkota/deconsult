import useCounterStore from "../store/use-counter-store";

export default function ShowCount() {
  const count = useCounterStore((store) => store.count);

  return <div>The value of count is : {count}</div>;
}
