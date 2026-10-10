function Users({
  id,
  name,
  age,
  Job,
  handelIncrement,
  decrementAge,
  handelDelete,
}) {
  const Increment = () => handelIncrement(id);
  const Decrement = () => decrementAge(id);
  const DeleteUser = () => handelDelete(id);

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-xl font-bold text-violet-700">
          {name?.charAt(0)?.toUpperCase() || "U"}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-bold text-gray-900">
            {name}
          </h2>
          <p className="text-sm text-gray-500">{Job}</p>
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
          #{id}
        </span>
      </div>

      {/* User Information */}
      <div className="grid grid-cols-2 gap-4 py-5">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="mb-1 text-sm text-gray-500">User ID</p>
          <p className="text-xl font-bold text-gray-900">{id}</p>
        </div>

        <div className="rounded-xl bg-violet-50 p-4">
          <p className="mb-1 text-sm text-violet-600">Age</p>
          <p className="text-xl font-bold text-violet-700">{age}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={Increment}
          className="rounded-lg bg-emerald-500 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 active:scale-95"
        >
          + Increment
        </button>

        <button
          onClick={Decrement}
          className="rounded-lg bg-blue-500 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 active:scale-95"
        >
          − Decrement
        </button>

        <button
          onClick={DeleteUser}
          className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white active:scale-95"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Users;