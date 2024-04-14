import React, { useState, useEffect } from "react";

function ListContacts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let contacts_url = "http://localhost:3000/contacts";
      try {
        const response = await fetch(contacts_url);
        const responseData = await response.json();

        console.log("DATA DE MIERDA !", responseData);

        setData(responseData);
      } catch (error) {
        console.error("OCURRIO UN HERROR DE MIERDA!");
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call fetchData directly inside useEffect
  }, []); // No need to include fetchData in the dependency array

  return (
    <div>
      <h1>Data fetched from the back-end:</h1>
      {data ? (
        data.data.map((item, index) => (
          <p>
            {index} - {item.name}
          </p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ListContacts;
