"use client";

const clientData = [
  {
    id: 1,
    name: "Bill",
    carModel: "Audi",
    vinNumber: "123",
    mileage: "70000km",
  },
  {
    id: 2,
    name: "John",
    carModel: "BMW",
    vinNumber: "33i4u34",
    mileage: "78000km",
  },
  {
    id: 3,
    name: "Bill",
    carModel: "Skoda",
    vinNumber: "98394834hejh9823",
    mileage: "30000km",
  },
];

const MyComponent = () => {
  let store = JSON.parse(localStorage.getItem("clientsData"));
  console.log(store[0]);

  return (
    <div>
      <div>
        <input type="search"></input>
      </div>
      <div>
        <table style={{ color: "white" }}>
          <thead>
            <td>Id</td>
            <td>Name</td>
            <td>Car model</td>
            <td>Vin number</td>
            <td>Mileage</td>
          </thead>
          <tr>
            <td>
              <input value={clientData[0].id}></input>
            </td>
            <td>
              <input value={clientData[0].name}></input>
            </td>
            <td>{clientData[0].carModel}</td>
            <td>{clientData[0].vinNumber}</td>
            <td>{clientData[0].mileage}</td>
          </tr>

          <tr>
            <td>{clientData[1].id}</td>
            <td>{clientData[1].name}</td>
            <td>{clientData[1].carModel}</td>
            <td>{clientData[1].vinNumber}</td>
            <td>{clientData[1].mileage}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default MyComponent;
