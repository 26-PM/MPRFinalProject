// import { useState, useEffect } from "react";

// const ngos = [
//   { name: "NGO 1", lat: 28.7041, lng: 77.1025 },
//   { name: "NGO 2", lat: 28.5355, lng: 77.3910 },
//   { name: "NGO 3", lat: 28.4595, lng: 77.0266 },
//   { name: "NGO 4", lat: 28.5672, lng: 77.2100 },
//   { name: "NGO 5", lat: 28.6139, lng: 77.2090 },
//   { name: "NGO 6", lat: 28.6519, lng: 77.2315 },
//   { name: "NGO 7", lat: 28.6448, lng: 77.2167 },
//   { name: "NGO 8", lat: 28.5276, lng: 77.0689 },
//   { name: "NGO 9", lat: 28.7046, lng: 77.1632 },
//   { name: "NGO 10", lat: 28.5675, lng: 77.1565 }
// ];

// const getDistance = (lat1, lon1, lat2, lon2) => {
//   const toRad = (value) => (value * Math.PI) / 180;
//   const R = 6371;
//   const dLat = toRad(lat2 - lat1);
//   const dLon = toRad(lon2 - lon1);
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(toRad(lat1)) *
//       Math.cos(toRad(lat2)) *
//       Math.sin(dLon / 2) *
//       Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c;
// };

// const NGOFinder = () => {
//   const userLocation = { lat: 28.6135, lng: 77.2090 }; // Near NGO 5
//   const [nearestNGO, setNearestNGO] = useState(null);

//   useEffect(() => {
//     let minDistance = Infinity;
//     let closestNGO = null;
//     ngos.forEach((ngo) => {
//       const distance = getDistance(
//         userLocation.lat,
//         userLocation.lng,
//         ngo.lat,
//         ngo.lng
//       );
//       if (distance < minDistance) {
//         minDistance = distance;
//         closestNGO = ngo;
//       }
//     });
//     setNearestNGO(closestNGO);
//   }, []);

//   return (
//     <div>
//       <h2>Find the Nearest NGO to Donate</h2>
//       {nearestNGO && (
//         <p>
//           The nearest NGO is <strong>{nearestNGO.name}</strong>
//         </p>
//       )}
//     </div>
//   );
// };

// export default NGOFinder;














import { useState, useEffect } from "react";

const ngos = [
  { name: "NGO 1", lat: 28.7041, lng: 77.1025 },
  { name: "NGO 2", lat: 28.5355, lng: 77.3910 },
  { name: "NGO 3", lat: 28.4595, lng: 77.0266 },
  { name: "NGO 4", lat: 28.5672, lng: 77.2100 },
  { name: "NGO 5", lat: 28.6139, lng: 77.2090 },
  { name: "NGO 6", lat: 28.6519, lng: 77.2315 },
  { name: "NGO 7", lat: 28.6448, lng: 77.2167 },
  { name: "NGO 8", lat: 28.5276, lng: 77.0689 },
  { name: "NGO 9", lat: 28.7046, lng: 77.1632 },
  { name: "NGO 10", lat: 28.5675, lng: 77.1565 }
];

const getDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const NGOFinder = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestNGO, setNearestNGO] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (err) => setError("Location access denied. Please allow location access."),
      { enableHighAccuracy: true }
    );
  }, []);

  useEffect(() => {
    if (userLocation) {
      let minDistance = Infinity;
      let closestNGO = null;
      ngos.forEach((ngo) => {
        const distance = getDistance(
          userLocation.lat,
          userLocation.lng,
          ngo.lat,
          ngo.lng
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestNGO = ngo;
        }
      });
      setNearestNGO(closestNGO);
    }
  }, [userLocation]);

  return (
    <div>
      <h2>Find the Nearest NGO to Donate</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!userLocation && !error && <p>Fetching your location...</p>}
      {nearestNGO && (
        <p>
          The nearest NGO is <strong>{nearestNGO.name}</strong>
        </p>
      )}
    </div>
  );
};

export default NGOFinder;

