export default function Input({ label, type = "text", value, onChange, placeholder }) {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-1 font-semibold">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
}
