import { useEffect } from "react";
import debounce from "lodash-es/debounce";
import dayjs from "dayjs";

export default function App() {
  useEffect(() => {
    const debouncedFn = debounce(() => console.log("debounced"), 300);
    debouncedFn();
    return () => debouncedFn.cancel();
  }, []);

  const formattedDate = dayjs().format("MMMM D, YYYY");

  return (
    <div>
      <h1> Bundle Analysis Demo</h1>
      <p>Formatted Date: {formattedDate}</p>
    </div>
  );
}
