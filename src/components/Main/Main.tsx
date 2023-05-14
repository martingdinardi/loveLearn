import LenguageCard from "./LenguageCard/LenguageCard";
import lenguages from "../../api/lenguages.json";

function Main() {
  return (
    <>
      {lenguages.map((lenguage) => {
        return (
          <LenguageCard
            number={lenguage.id}
            title={lenguage.title}
            description={lenguage.description}
            color={lenguage.color}
            img={lenguage.img}
            courses={lenguage.courses}
          />
        );
      })}
    </>
  );
}

export default Main;
