import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 1,
    endCounText: "+",
    text: "Yrs. of Experience",
  },
  {
    endCountNum: 10,
    endCounText: "+",
    text: "Website Built",
  },
  {
    endCountNum: 95,
    endCounText: "%",
    text: "Client Satisfied",
  },
];

const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statsData.map((item, index) => {
        return (
          <StatsItem
            endCountNum={item.endCountNum}
            endCountText={item.endCounText}
            text={item.text}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default Stats;
