import { useEffect, useState } from "react";
import { data } from "../data";
import Chart from "react-apexcharts";

const BarCountry = () => {
  const [countryPeople, setcountryPeople] = useState([]);

  useEffect(() => {
    const res = () => {
      const result = data.reduce((acc, item) => {
        if (acc[item.country] === undefined) {
          acc[item.country] = 0;
        }
        acc[item.country] += item.adults + item.children + item.babies;
        return acc;
      }, {});
      const value = Array(Object.values(result));
      setcountryPeople(value[0]);
    };
    res();
  }, []);
  console.log(countryPeople);
  return (
    <div className="flex justify-between p-3 mt-10 flex-wrap">
      <div>
        <Chart
          type="bar"
          width={800}
          height={600}
          series={[{ name: "country", data: countryPeople }]}
          options={{}}
        ></Chart>
      </div>
    </div>
  );
};

export default BarCountry;
