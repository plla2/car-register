import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CarDetail = () => {
  const { carid } = useParams();
  const [cardata, setCardata] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/cars/" + carid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setCardata(resp);
      })
      .catch((err) => {
        alert("에러가 발생하였습니다 !!");
      });
  }, []);

  return (
    <div>
      <div className="card" style={{ textAlign: "center" }}>
        <div className="card-title">
          <h2>Car Detail</h2>
        </div>
        <div className="card-body"></div>
        {cardata && (
          <div>
            <h2>
              The Car name is :<b>{cardata.name}</b> ({cardata.id})
            </h2>
            <h3>Contact Details</h3>
            <h5>
              Company is : <b>{cardata.company}</b>
            </h5>
            <h5>
              Car Num is : <b>{cardata.num}</b>
            </h5>
            <Link className="btn btn-danger" to="/">
              목록으로 돌아가기
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default CarDetail;
