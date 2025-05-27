import type { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/features/counterSlice";

const PostMardem = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increment());
  };

  const handleDecrease = () => {
    dispatch(decrement());
  };

  return (
    <div className="grid col-span-12">
      <div className="col-start-2 col-end-10">
        <div>This is A counter App</div>
        <div>
          <h1> {count}</h1>
          <button onClick={handleIncrease}>Increase</button>
          <button onClick={handleDecrease}>Decrease</button>
        </div>
      </div>
    </div>
  );
};

export default PostMardem;
