import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../1.MainComponent/style.css";

function DatagetbyAsp() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newItem, setNewItem] = useState({
    shopId: "",
    shopName: "",
    shopType: "",
    shopAddrss: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get("https://localhost:7148/api/ShopInfoes");
      if (Array.isArray(result.data)) {
        setData(result.data);
      } else {
        console.error("Data is not an array:", result.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error while fetching data.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = useCallback((ShopId) => {}, []);

  const handleDelete = useCallback(async (ShopId) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      try {
        await axios.delete(`https://localhost:7148/api/ShopInfoes/${ShopId}`);
        setData(data.filter((item) => item.shopId !== ShopId));
        Swal.fire({
          icon: 'success',
          title: 'Deleted',
          text: `ShopId ${ShopId} has been deleted.`,
        });
      } catch (error) {
        console.error("Error deleting data:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error while deleting data.',
        });
      }
    }
  }, [data]);

  const handleAdd = useCallback(async () => {
    try {
      if (!newItem.shopId || !newItem.shopName || !newItem.shopType || !newItem.shopAddrss) {
        Swal.fire({
          icon: 'warning',
          title: 'Incomplete Data',
          text: 'Please fill in all required fields.',
        });
        return;
      }
      await axios.post("https://localhost:7148/api/ShopInfoes", newItem);
      setData([...data, newItem]);
      setNewItem({
        shopId: "",
        shopName: "",
        shopType: "",
        shopAddrss: "",
      });
      Swal.fire({
        icon: 'success',
        title: 'Added',
        text: 'New shop has been added successfully.',
      });
    } catch (error) {
      console.error("Error adding data:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error while adding data.',
      });
    }
  }, [newItem, data]);

  return (
    <>
      <div className="inpurt">
        <input
          className="inputShop"
          type="text"
          placeholder="ShopId"
          value={newItem.shopId}
          onChange={(e) => setNewItem({ ...newItem, shopId: e.target.value })}
        />
        <input
          className="inputShop"
          type="text"
          placeholder="ShopName"
          value={newItem.shopName}
          onChange={(e) => setNewItem({ ...newItem, shopName: e.target.value })}
        />
        <input
          className="inputShop"
          type="text"
          placeholder="ShopType"
          value={newItem.shopType}
          onChange={(e) => setNewItem({ ...newItem, shopType: e.target.value })}
        />
        <input
          className="inputShop"
          type="text"
          placeholder="ShopAddrss"
          value={newItem.shopAddrss}
          onChange={(e) => setNewItem({ ...newItem, shopAddrss: e.target.value })}
        />
        <button onClick={handleAdd} className="btn btnc1">
          Add
        </button>
      </div>
      <table id="customers">
        <thead>
          <tr>
            <th>ShopId</th>
            <th>ShopName</th>
            <th>ShopType</th>
            <th>ShopAddrss</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          ) : data.length > 0 ? (
            data.map((item,index) => (
              <tr key={item.ShopId || index}>
                <td>{item.shopId}</td>
                <td>{item.shopName}</td>
                <td>{item.shopType}</td>
                <td>{item.shopAddrss}</td>
                <td>
                  <button className="btn btnc1" onClick={() => handleEdit(item.shopId)}>
                    Edit
                  </button>
                  <button className="btn btnc2" onClick={() => handleDelete(item.shopId)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default DatagetbyAsp;
