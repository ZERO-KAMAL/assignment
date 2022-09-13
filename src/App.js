import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

// https://www.balldontlie.io/api/v1/teams

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios
      .get("https://www.balldontlie.io/api/v1/teams")
      .then((res) => {
        // console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "city", headerName: "City", width: 150 },
    { field: "abbreviation", headerName: "Abbreviation", width: 150 },
    { field: "conference", headerName: "Conference", width: 150 },
    { field: "division", headerName: "Division", width: 150 }
];

  const rows = data.map((row) => ({
    id: row.id,
    abbreviation: row.abbreviation,
    city: row.city,
    conference: row.conference,
    division: row.division,
  }));

  return (
    <>
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
      {/* {data.map((item, index) => (
        <div className="" key={index}>
          {item.title}
        </div>
      ))} */}
    </>
  );
}

export default App;
