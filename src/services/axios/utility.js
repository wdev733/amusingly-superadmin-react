
export function clearToken() {
  localStorage.removeItem("adminID");
  localStorage.removeItem("userName");
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("accessToken");
}

export function getToken() {
  try {
    const adminID = localStorage.getItem("adminID");
    const userName = localStorage.getItem("userName");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const accessToken = localStorage.getItem("accessToken");

    return { adminID, userName, firstName, lastName, accessToken };

  } catch (err) {
    clearToken();
    return null;
  }
}