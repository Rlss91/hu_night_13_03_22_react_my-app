import { useState } from "react";
import { cloneDeep } from "lodash";
import CardComponent from "./CardComponent";

const dataArrInitial = [
  { name: "sadfsdfasdf1", desc: "asdfrehserhsrgeargerherth1", id: 1 },
  { name: "sadfsdfasdf2", desc: "asdfrehserhsrgeargerherth2", id: 2 },
  { name: "sadfsdfasdf3", desc: "asdfrehserhsrgeargerherth3", id: 3 },
  { name: "sadfsdfasdf4", desc: "asdfrehserhsrgeargerherth4", id: 4 },
];

const CardsPanelComponent = () => {
  const [dataArr, setDataArr] = useState(dataArrInitial);

  const handleDeleteCard = (id) => {
    console.log("from father", id);
    let newDataArr = cloneDeep(dataArr);
    newDataArr = newDataArr.filter((item) => {
      return item.id !== id;
    });
    setDataArr(newDataArr);
  };
  return (
    <div>
      {dataArr.map((item) => {
        return (
          <CardComponent
            name={item.name}
            desc={item.desc}
            id={item.id}
            key={item.id}
            onDeleteCard={handleDeleteCard}
          />
        );
      })}
    </div>
  );
};

export default CardsPanelComponent;
{
  /* <div className="card" key={item.name}>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">{item.desc}</p>
            </div>
          </div> */
}
