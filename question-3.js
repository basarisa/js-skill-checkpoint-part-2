// เริ่มเขียนโค้ดตรงนี้
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  let result = data
    .filter((user) => user.name.length > 17) 
    .map((user) => user.name); // กรองเฉพาะ name ใน object

  console.log(result);
};

getUsers();
