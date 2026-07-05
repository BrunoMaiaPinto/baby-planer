/*
 * Data access layer for Baby Planner.
 *
 * Right now data is persisted in the browser via localStorage so records
 * survive page reloads. The functions are intentionally `async` and mirror the
 * shape of a Supabase client (`list`, `insert`, `remove`) so that migrating to
 * a real database later only requires swapping the bodies below — the pages and
 * the `useCollection` hook won't need to change.
 *
 * TODO(supabase): replace the localStorage reads/writes with calls such as:
 *   const { data } = await supabase.from(collection).select("*").order("created_at");
 *   const { data } = await supabase.from(collection).insert(values).select().single();
 *   await supabase.from(collection).delete().eq("id", id);
 */

const KEY_PREFIX = "baby-planner:";

function read(collection) {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY_PREFIX + collection);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function write(collection, rows) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY_PREFIX + collection, JSON.stringify(rows));
}

function makeId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export async function list(collection) {
  return read(collection);
}

export async function insert(collection, values) {
  const rows = read(collection);
  const row = {
    id: makeId(),
    created_at: new Date().toISOString(),
    ...values,
  };
  write(collection, [...rows, row]);
  return row;
}

export async function remove(collection, id) {
  write(
    collection,
    read(collection).filter((row) => row.id !== id),
  );
}

/** Seed a collection once (used to import initial data such as contacts). */
export async function seedOnce(collection, rows) {
  const existing = read(collection);
  if (existing.length > 0) return existing;
  const seeded = rows.map((values) => ({
    id: makeId(),
    created_at: new Date().toISOString(),
    ...values,
  }));
  write(collection, seeded);
  return seeded;
}
