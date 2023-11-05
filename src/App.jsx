import BarPeople from "./components/BarPeople";
import BarCountry from "./components/BarCountry";

const App = () => {
  return (
    <div className=" flex">
      {<BarPeople />}
      {<BarCountry />}
    </div>
  );
};

export default App;
