const getData = async () => {
  try {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erreur de recuperation", errorData);
    } else {
      const tasks = await response.json();
      return tasks;
    }
  } catch (error) {
    console.error("ddd", error.message);
  }
};
