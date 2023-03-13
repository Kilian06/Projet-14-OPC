import React from "react";
import { Link } from "react-router-dom";
import { countryStates } from "../data/countryState";
import { departmentData } from "../data/departement";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { storeForm } from "../../store/store";
import { Modal } from "modal-component-kle";
import { useEffect } from "react";
// import Modal from "../../components/modal/modal";

function Home() {
  const [firstName, setFirstName] = useState("1");
  const [lastName, setlastName] = useState("2");
  const [birthDate, setBirthDate] = useState("3");
  const [startDate, setStartDate] = useState("4");
  const [street, setStreet] = useState("5");
  const [city, setCity] = useState("6");
  const [stateCountry, setState] = useState("7");
  const [zipCode, setZipCode] = useState("8");
  const [department, setDepartment] = useState("9");
  const [stateCountryAbb, setStateAbb] = useState("");

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  function matchState(stateName) {
    const stateAbbr = countryStates.find(
      (stateName) => stateName.name === stateCountry
    );
    if (typeof stateAbbr !== "undefined") {
      setStateAbb(stateAbbr.abbreviation);
    }
  }

  useEffect(() => {
    matchState(stateCountry);
  }, [stateCountry]);

  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <>
      <h1>HRnet</h1>
      <Link to="/employee-list">View Current Employee</Link>
      <h2>Create Employee</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            storeForm({
              firstName,
              lastName,
              birthDate,
              startDate,
              street,
              city,
              stateCountryAbb,
              zipCode,
              department,
            })
          );
          setModal(true);
        }}
      >
        <label htmlFor="firstName">Fisrt Name</label>
        <input
          id="firstName"
          required
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          required
          type="text"
          onChange={(e) => setlastName(e.target.value)}
        ></input>
        <label htmlFor="birthDate">Date of Birth </label>
        <input
          id="birthDate"
          required
          type="date"
          min="1900-01-01"
          onChange={(e) => setBirthDate(e.target.value)}
        ></input>
        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          required
          type="date"
          min="1900-01-01"
          onChange={(e) => setStartDate(e.target.value)}
        ></input>
        <div className="insideFomr">
          <p>Adress</p>
          <label htmlFor="street">Street</label>
          <input
            id="street"
            required
            type="text"
            onChange={(e) => setStreet(e.target.value)}
          ></input>
          <label htmlFor="city">City</label>
          <input
            id="city"
            required
            type="text"
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <label htmlFor="stateCountry">State</label>
          <select
            id="stateCountry"
            name="state-select"
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">--Select a State--</option>
            {countryStates.map((state, index) => (
              <option key={index} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            required
            type="number"
            onChange={(e) => setZipCode(e.target.value)}
          ></input>
        </div>
        <label htmlFor="department">Department</label>
        <select
          id="department"
          name="state-select"
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">--Select a Department--</option>
          {departmentData.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
        <button type="submit">Valdier</button>
        <Modal bgModal={"#deb992"} bgContent={"#042033"} colorContent={"#869ba9"} colorClose={"#869ba9"} visible={modal} closelink={"/employee-list"} textContent={"Employee Created!"} onClose={handleModalClose}/>

      </form>
    </>
  );
}

export default Home;
