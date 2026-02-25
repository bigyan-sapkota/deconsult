import useCounterStore from "../store/use-counter-store";

export default function UpdateCount() {
  const { inc, dec, res } = useCounterStore();

  return (
    <div className="flex items-center gap-8">
      <Btn handler={inc} bgCol="green">
        Increase Count
      </Btn>
      <Btn handler={dec} bgCol="red">
        Decrease Count
      </Btn>
      <Btn handler={res} bgCol="blue">
        Reset Count
      </Btn>
    </div>
  );
}

type BtnProps = {
  children: React.ReactNode;
  handler: () => void;
  bgCol: string;
};

function Btn({ children, handler, bgCol }: BtnProps) {
  return (
    <button
      style={{
        backgroundColor: `${bgCol}`,
      }}
      className={`px-6 py-2 text-white rounded-lg `}
      onClick={handler}
    >
      {children}
    </button>
  );
}
