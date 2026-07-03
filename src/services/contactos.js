export const getData = async function () {
  const res = await fetch(
    "https://gist.githubusercontent.com/BrunoMaiaPinto/efa10d7df693b46ce3dc247f577d8e82/raw/67586eb1b63979c474557936da3e9f18f970e840/contactos.json",
  );
  const data = await res.json();

  return data;
};
