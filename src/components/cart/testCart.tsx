import type { AppDispatch, RootState } from "@/app/store";
import { createCart } from "@/features/cart/cartThunks";
import { useDispatch, useSelector } from "react-redux";

const TestCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.cart
  );
  const handleCreateCart = () => {
    dispatch(createCart());
  };
  return (
    <div className="p-4">
      <button
        onClick={handleCreateCart}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        {loading ? "Creating..." : "Create Cart"}
      </button>

      {error && <p className="text-red-500 mt-2">Error: {error}</p>}

      {data.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold">Cart Created:</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default TestCart;
