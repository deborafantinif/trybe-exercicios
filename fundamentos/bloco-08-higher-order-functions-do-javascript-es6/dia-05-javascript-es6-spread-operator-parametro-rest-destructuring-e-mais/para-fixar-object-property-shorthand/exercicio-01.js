const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});

console.log(getPosition(-19.8157, -43.9542));

// Resolução

const newGetPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(newGetPosition(-19.8157, -43.9542));