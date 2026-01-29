const Field = ({ label, placeholder }) => {
  return (
    <div>
      <div className="mb-2">
        <label className="text-gray-700 text-sm">{label}</label>
      </div>
      <div>
        <input placeholder={placeholder} className="px-4 h-12 py-3 rounded-3xl border border-gray-300 w-full" />
      </div>
    </div>
  );
}

export default Field;