import { useState, useEffect } from "react";
import { cloneDeep } from "lodash";
import axios from "axios";
import CardComponent from "./CardComponent";
import SpinnerComponent from "./SpinnerComponent/SpinnerComponent";

const CardsPanelComponent = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    console.log("dataArr changed");
    setShowSpinner(false);
  }, [dataArr]);

  useEffect(() => {
    axios.get("/cards/myCards").then((dataFromServer) => {
      console.log("dataFromServer", dataFromServer);
      setDataArr(dataFromServer.data);
    });
  }, []);

  const handleDeleteCard = (id) => {
    setShowSpinner(true);
    setTimeout(() => {
      console.log("from father", id);
      let newDataArr = cloneDeep(dataArr);
      newDataArr = newDataArr.filter((item) => {
        return item.id !== id;
      });
      setDataArr(newDataArr);
    }, 3000);
  };
  return (
    <div>
      {showSpinner && <SpinnerComponent />}
      {dataArr.map((item) => {
        return (
          <CardComponent
            name={item.bizName}
            desc={item.bizDescription}
            id={item._id}
            key={item._id}
            onDeleteCard={handleDeleteCard}
          />
        );
      })}
    </div>
  );
};

export default CardsPanelComponent;
