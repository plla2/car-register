import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CarCreate = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [num, setNum] = useState("");
  const [active, setActive] = useState(true);
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardata = { id, name, company, num, active };

    fetch("http://localhost:8000/cars", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cardata),
    })
      .then((res) => {
        alert("저장되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        alert("에러가 발생하였습니다 !!");
      });
  };
  return (
    <div className="offset-lg-3 col-lg-6">
      <form className="container" onSubmit={handleSubmit}>
        <div
          className="card"
          style={{ textAlign: "center", background: "#FFFFE8" }}
        >
          <div className="card-title">
            <h2>Car Create</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>ID</label>
                  <input
                    value={id}
                    disabled="disabled"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12 ">
                <div className="form-group">
                  <label>Car Name</label>
                  <input
                    onMouseDown={(e) => setValidation(true)}
                    required
                    style={{ background: "#ECF9FF" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  ></input>
                  {name.length === 0 && validation && (
                    <span className="text-danger">차의 이름을 입력하세요.</span>
                  )}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Company</label>
                  <input
                    value={company}
                    style={{ background: "#ECF9FF" }}
                    onChange={(e) => setCompany(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Car Num</label>
                  <input
                    value={num}
                    onChange={(e) => setNum(e.target.value)}
                    style={{ background: "#ECF9FF" }}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12" style={{ textAlign: "left" }}>
                <div className="form-check">
                  <input
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                    type="checkbox"
                    className="form-check-input"
                  ></input>
                  <label className="form-check-label">Is Active</label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <button className="btn btn-success" type="submit">
                    저장하기
                  </button>
                  <Link to="/" className="btn btn-danger">
                    뒤로가기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CarCreate;
