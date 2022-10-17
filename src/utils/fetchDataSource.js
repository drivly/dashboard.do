export async function fetchDataSource() {
  const newData = await fetch("https://northwind.kvdb.do/", {
    method: "GET",
  });
  console.log("newData", newData)
  const database = await newData.json();
  return Object.keys(database.data);
}

export async function fetchDataCategory(category) {
  const newData = await fetch(`https://northwind.kvdb.do/${category}`, {
    method: "GET",
  });
  const database = await newData.json();
  const navData = database.data;
  return navData;
}