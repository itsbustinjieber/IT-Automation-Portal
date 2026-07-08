import { useState } from "react";

function App() {
  const [page, setPage] = useState("dashboard");

  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState(null);

  const devices = [
  {
  name: "TCCLA0001",
  user: "Marc Matson",
  model: "Dell Precision 3551",
  serviceTag: "HRC8GB3",
  serialNumber: "38658436239",
  os: "Windows 10 Pro",
  ram: "8GB DDR4",
  warranty: "01/20/2026",
 },

  {
   name: "TCCLA0002",
   user: "Bradley Mattice",
   model: "Dell Precision 3551",
   warranty: "01/20/2026",
  },
    {
      name: "TCCD0001",
      user: "Office POS F9",
      model: "Dell Optiplex 3080",
      warranty: "09/01/2026",
    },
  ];

return (
  <div
    style={{
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#121826",
      color: "white",
      fontFamily: "Arial",
    }}
  >
    <div
  style={{
    width: "220px",
    backgroundColor: "#111827" ,
    padding: "20px",
    borderRight: "2px solid #374151",
  }}
>
  <h2
  style={{
    color: "#60a5fa",
    marginBottom: "30px",
  }}
>
  IT Portal
</h2>

  <p
    style={{ cursor: "pointer" }}
    onClick={() => setPage("dashboard")}
  >
    🏠 Dashboard
</p>
  <p
  style={{ cursor: "pointer" }}
  onClick={() => setPage("devices")}
>
  💻 Devices
</p>
  <p style={{cursor: "pointer" }}>
  👤 Users
</p>
  <p style={{cursor: "pointer" }}>
  📋 Assets
</p>
  <p style={{cursor: "pointer" }}>
  📄 Reports
</p>
</div>

    <div
      style={{
        flex: 1,
        padding: "20px",
        textAlign: "center",
      }}
    >
      {page === "dashboard" && (
  <>
    <h1>IT Automation Portal</h1>

    <p>Tucson Country Club IT</p>

    <hr />

    <h2>Dashboard</h2>

    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
      }}
    >
    </div>
  </>
)}
``

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>💻 Devices</h3>
          <h1>0</h1>
        </div>

        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>👤 Users</h3>
          <h1>0</h1>
        </div>

        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>⚠️ Alerts</h3>
          <h1>0</h1>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;