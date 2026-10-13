export async function fetchTodo(id: number): Promise<unknown> {
  console.log("starting fetch...");

  try {
    const response = await fetch(`http://127.0.0.1:9/todos/1`);

    if (!response.ok) {
      console.log(response.status);
      return null;
    }

    const data = await response.json();
    console.log("got data");
    return data;
  } catch (error) {
    console.log("Network error:", error);
    return null;
  }
}