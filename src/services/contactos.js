export const getData = async function () {
  const res = await fetch(
    "https://gist.githubusercontent.com/BrunoMaiaPinto/efa10d7df693b46ce3dc247f577d8e82/raw/99aa633cc1f8a314706f2987d1fc4abe8f9f7de3/alimenta%25C3%25A7%25C3%25A3o.json",
  );
  const data = await res.json();

  return data;
};
