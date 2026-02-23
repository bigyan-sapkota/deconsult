import CountUp from "react-countup";
import type { IconType } from "react-icons";
import { GrAccessibility, GrAchievement, GrAction } from "react-icons/gr";
import { MdOutlineGroups3 } from "react-icons/md";

type CardProps = {
  id: number;
  Icon: IconType;
  stat: number;
  desc: string;
};

export default function Stats() {
  const arr: CardProps[] = [
    {
      id: 1,
      Icon: MdOutlineGroups3,
      stat: 500,
      desc: "Projects Completed",
    },
    {
      id: 2,
      Icon: GrAccessibility,
      stat: 1,
      desc: "Users Query Completed",
    },
    {
      id: 3,
      Icon: GrAchievement,
      stat: 20,
      desc: "Satisfied Users",
    },
    {
      id: 4,
      Icon: GrAction,
      stat: 80,
      desc: "Mew Customers",
    },
  ];
  return (
    <section className="h-40 bg-[url('/home/meeting.jpg')] bg-no-repeat bg-cover relative flex items-center">
      <div className="z-20 relative flex items-center justify-between w-full  max-w-[1500px] mx-auto">
        {arr.map((ele) => (
          <Card
            id={ele.id}
            key={ele.id}
            Icon={ele.Icon}
            stat={ele.stat}
            desc={ele.desc}
          />
        ))}
      </div>
      <div className="absolute h-full w-full bg-black/50 z-10 top-0 left-0"></div>
    </section>
  );
}

function Card({ id, Icon, stat, desc }: CardProps) {
  return (
    <div className="text-white flex gap-6 items-center">
      <div>
        <Icon className="size-25 pr-6 border-r-2 border-white" />
      </div>
      <div>
        <h1 className="text-5xl font-extrabold">
          <CountUp end={stat} scrollSpyOnce />
          {(id === 2 || id === 3) && "K"}+
        </h1>
        <p className="text-xl mt-2">{desc}</p>
      </div>
    </div>
  );
}
