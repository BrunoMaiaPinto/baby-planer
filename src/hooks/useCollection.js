import { useCallback, useEffect, useState } from "react";
import { insert, list, remove } from "../lib/store";

/**
 * Loads and mutates a collection of records from the data store.
 * Handles loading and error state so pages don't fetch inside render.
 */
export function useCollection(collection) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);
      const data = await list(collection);
      setRows(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [collection]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const add = useCallback(
    async (values) => {
      const row = await insert(collection, values);
      setRows((prev) => [...prev, row]);
      return row;
    },
    [collection],
  );

  const removeRow = useCallback(
    async (id) => {
      await remove(collection, id);
      setRows((prev) => prev.filter((row) => row.id !== id));
    },
    [collection],
  );

  return { rows, loading, error, add, remove: removeRow, refresh, setRows };
}
