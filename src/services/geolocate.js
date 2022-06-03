export const getUserLocation = async () => {
  if (!navigator.geolocation) {
    alert("no geolocation support");
    return;
  }

  const currentPosition = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      maximumAge: 0,
      enableHighAccuracy: true,
    });
  }).catch((error) => {
    alert(error.message);
  });
  if (!currentPosition) {
    return {};
  }

  //return this
  const { latitude, longitude } = currentPosition.coords;
  console.log(`${latitude}, ${longitude}`);
  return { lat: latitude, lon: longitude };
};

export const emitLocation = async (geocode) => {
  const response = await fetch(`${API_URL}/emit-current-location`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(geocode),
  }).catch((error) => {
    alert("failed to emit location");
    return;
  });

  if (response) {
    const result = await response;
    return result;
  }
};
