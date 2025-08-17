import React from "react";

export default function PackageCard({ data, onCompareToggle, isSelected }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "10px",
      width: "300px"
    }}>
      <h3>{data.name}</h3>
      <p><strong>Duration:</strong> {data.duration}</p>
      <p><strong>Price:</strong> ₹{data.price}</p>
      <p><strong>Services:</strong> {data.services.join(", ")}</p>
      <details>
        <summary>Itinerary</summary>
        <ul>
          {data.itinerary.map((day, i) => (
            <li key={i}>{day}</li>
          ))}
        </ul>
      </details>
      <button 
        style={{
          background: isSelected ? "green" : "blue",
          color: "white",
          padding: "8px",
          marginTop: "10px",
          border: "none",
          borderRadius: "5px"
        }}
        onClick={() => onCompareToggle(data)}
      >
        {isSelected ? "Remove from Compare" : "Add to Compare"}
      </button>
    </div>
  );
}
