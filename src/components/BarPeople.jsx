import { useEffect, useState } from "react";
import { data } from "../data";
import Chart from "react-apexcharts";

const BarPeople = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    let cnt = 1;
    const res = () => {
      let sum = 0;
      let arr = [];

      for (let i = 0; i < data.length; i++) {
        if (data[i].arrival_date_day_of_month === cnt) {
          sum += data[i].adults;
          sum += data[i].children;
          sum += data[i].babies;
        } else {
          if (cnt > 30) break;
          arr.push(sum);
          sum = data[i].adults + data[i].children + data[i].babies;
          cnt += 1;
        }
      }
      setPeople(arr);
    };
    res();
  }, []);
  console.log(people);
  return (
    <div className="flex justify-between p-3 mt-10 flex-wrap">
      <div>
        <Chart
          type="bar"
          width={600}
          height={600}
          series={[{ name: "comapny", data: people }]}
          options={{}}
        ></Chart>
      </div>
    </div>
  );
};

export default BarPeople;
