import { useState } from "react";
import styles from "./Donation.module.css";

const DonationForm = () => {
  const categories = [
    { name: "Food", icon: "🥗" },
    { name: "Clothes", icon: "👕" },
    { name: "Books", icon: "📚" },
    { name: "Medicines", icon: "💊" },
    { name: "Electronics", icon: "📱" },
    { name: "Others", icon: "✏️" },
  ];

  const [items, setItems] = useState([{ category: "", quantity: "", image: null }]);
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [location, setLocation] = useState("");

  const handleAddItem = () => {
    setItems((prevItems) => [...prevItems, { category: "", quantity: "", image: null }]);
  };

  const handleRemoveItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleLocationDetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`);
        },
        () => alert("Unable to retrieve location")
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Donation request submitted successfully!");
    // Handle API submission logic here
  };

  return (
    <div className={styles.container}>
      <h2>What would you like to donate?</h2>
      <form onSubmit={handleSubmit}>
        {items.map((item, index) => (
          <fieldset key={index} className={styles.itemFieldset}>
            <label>Category:</label>
            <select
              value={item.category}
              onChange={(e) => {
                const newItems = [...items];
                newItems[index].category = e.target.value;
                setItems(newItems);
              }}
            >
              <option value="">Select</option>
              {categories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>

            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              placeholder="Enter quantity"
              value={item.quantity}
              onChange={(e) => {
                const newItems = [...items];
                newItems[index].quantity = e.target.value;
                setItems(newItems);
              }}
            />

            <label>Upload Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const newItems = [...items];
                newItems[index].image = e.target.files[0];
                setItems(newItems);
              }}
            />

            {index > 0 && (
              <button type="button" className={styles.removeBtn} onClick={() => handleRemoveItem(index)}>
                Remove
              </button>
            )}
          </fieldset>
        ))}

        <button type="button" className={styles.addBtn} onClick={handleAddItem}>
          Add More Items
        </button>

        <h3>Select Pickup Date & Time</h3>
        <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
        <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
        <button type="button" className={styles.asapBtn} onClick={() => {
          setPickupDate("ASAP");
          setPickupTime("ASAP");
        }}>
          ASAP Pickup
        </button>

        <h3>Enter Pickup Location</h3>
        <input
          type="text"
          placeholder="Enter location manually"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="button" className={styles.gpsBtn} onClick={handleLocationDetect}>
          Use GPS
        </button>

        <button type="submit" className={styles.submitBtn}>
          Submit Donation Request
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
