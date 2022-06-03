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
  alert(`${latitude}, ${longitude}`);
  return { lat: latitude, lon: longitude };
};
