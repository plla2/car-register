/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CarListing = () => {
  const [cardata, setCardata] = useState(null);
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate("/car/edit/" + id);
  };

  const LoadDetail = (id) => {
    navigate("/car/detail/" + id);
  };

  const Removefunction = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      fetch("http://localhost:8000/cars/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("성공적으로 삭제되었습니다.");
          window.location.reload();
        })
        .catch((err) => {
          alert("에러가 발생하였습니다 !!");
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/cars/")
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
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Car Listing</h2>
        </div>
        <div className="card-body">
          <div className="addbtn">
            <Link to="car/create" className="btn btn-success">
              Add Entered car(+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-secondary bg-gradient text-white">
              <tr>
                <td>ID</td>
                <td>Car Name</td>
                <td>Company</td>
                <td>Car Num</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cardata &&
                cardata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>{item.num}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-warning"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CarListing;
