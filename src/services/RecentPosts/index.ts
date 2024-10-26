import { delay } from "@/src/utils/delay";

const Posts = async () => {
  const datas = await fetch("http://localhost:5000/api/v1/items?limit=9");

  await delay(5000);

  return datas.json();
};

export default Posts;
