import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CardComponent from "./CardComponent";

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

const UsersPanelComponent = () => {
  const [usersArr, setUsersArr] = useState([]);

  useEffect(() => {
    getData("http://localhost:3003/api/users/allusers")
      .then((dataFromServer) => {
        console.log("dataFromServer", dataFromServer);
        setUsersArr(dataFromServer);
      })
      .catch((err) => {
        toast("Something went wrong");
      });
  }, []);

  return (
    <div>
      {usersArr.map((item) => {
        return (
          <CardComponent key={item._id} name={item.name} desc={item.email} />
        );
      })}
    </div>
  );
};

export default UsersPanelComponent;
