const date = new Date();
export default function useLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(key));
  const exist = data ? (data?.exp <= date.getDate() ? false : true) : false;
  const setData = (value) =>
    localStorage.setItem(
      key,
      JSON.stringify({ is_exist: value, exp: date.getDate() + 2 })
    );
  console.log(exist);
  const clearData = () => localStorage.removeItem(key);
  return { exist, setData, clearData };
}
