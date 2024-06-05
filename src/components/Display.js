import { useState } from "react";
import "./Display.css";
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      console.log(Otheraddress);
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      console.log(str);
      console.log(str_array); //photo
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            {/* <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}?pinataGatewayToken=4tT7Cc8xmfUJlCXA_NvWYn37zS48vFpwwB1l0rHU9VyhrDj-SGJx_O67DwoB6HC6`}
              alt="new"
              className="image-list"
            ></img> */}

<img
              key={i}
              src={`https://blush-far-ladybug-492.mypinata.cloud/ipfs${item.substring(6)}?pinataGatewayToken=4tT7Cc8xmfUJlCXA_NvWYn37zS48vFpwwB1l0rHU9VyhrDj-SGJx_O67DwoB6HC6`}
              alt="new"
              className="image-list"
            ></img>

          </a>
        );
      });
      setData(images);
    } else {
      alert("No Aadhar Card to display");
    }
  };
  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
    </>
  );
};
export default Display;
