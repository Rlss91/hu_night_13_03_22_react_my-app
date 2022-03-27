import { useState, useEffect } from "react";
import { cloneDeep } from "lodash";
import CardComponent from "./CardComponent";
import SpinnerComponent from "./SpinnerComponent/SpinnerComponent";

// Example POST method implementation:
async function getData(url = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "x-user-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQwOThmMzczZTE4ODgyM2FlY2Q5NDEiLCJiaXoiOnRydWUsImlhdCI6MTY0ODQwMjIyNH0.EepyQ0AJZ-qlA3qs55kdJc8ia5JAYeFKdp27r_FHNa0",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const CardsPanelComponent = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    console.log("dataArr changed");
    setShowSpinner(false);
  }, [dataArr]);

  useEffect(() => {
    getData("http://localhost:3003/api/cards/myCards").then(
      (dataFromServer) => {
        console.log("dataFromServer", dataFromServer);
        setDataArr(dataFromServer);
      }
    );
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
