import { useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState({
    UniversityName: "",
    UniAddress: "",
    PinCode: "",
    colleges: [],
  });

  const handleUniversityChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleAddCollege = () => {
    const newColleges = data.colleges;
    newColleges.push({
      collegeName: "",
      collegeAddress: "",
      collegeId: "",
    });
    setdata({ ...data, ["colleges"]: newColleges });
    console.log(data);
  };

  const handleDelete = (index) => {
    const colleges = data.colleges.filter((el, i) => index !== i);
    setdata({ ...data, colleges });
  };

  const handleCollegeFiledChange = (index, key, value) => {
    const colleges = data.colleges;
    colleges[index][key] = value;
    setdata({ ...data, colleges });
  };

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            value={data.UniversityName}
            placeholder="University Name"
            name="UniversityName"
            onChange={handleUniversityChange}
          />
        </div>
        <div>
          <input
            type="text"
            value={data.UniAddress}
            placeholder="Address"
            name="UniAddress"
            onChange={handleUniversityChange}
          />
        </div>
        <div>
          <input
            type="number"
            value={data.PinCode}
            placeholder="PIN Code"
            name="PinCode"
            onChange={handleUniversityChange}
          />
        </div>
      </form>
      {data.colleges.map((el, index) => {
        return (
          <>
            <div className="flex" key={index + el}>
              <div>
                <input
                  type="text"
                  name="collegeName"
                  placeholder="college Name"
                  value={data.colleges[index].collegeName}
                  onChange={(e) =>
                    handleCollegeFiledChange(
                      index,
                      "collegeName",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <input
                  type="text"
                  name="collegeAddress"
                  placeholder="college Address"
                  value={data.colleges[index].collegeAddress}
                  onChange={(e) =>
                    handleCollegeFiledChange(
                      index,
                      "collegeAddress",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <input
                  type="text"
                  name="collegeId"
                  placeholder="college Id"
                  value={data.colleges[index].collegeId}
                  onChange={(e) =>
                    handleCollegeFiledChange(index, "collegeId", e.target.value)
                  }
                />
              </div>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </>
        );
      })}
      <div>
        <button onClick={handleAddCollege}>Add Colleges</button>
      </div>
      <div>
        <button onClick={() => console.log(data, "Your added data")}>
          Submit Data
        </button>
      </div>
    </>
  );
}

export default App;
