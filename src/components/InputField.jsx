const InputField = ({ label, type = "text", placeholder = "", name, required = false, textarea = false }) => {
  return (
    <div className="w-full">
      {label && <label className="text-sm text-gray-600">{label}</label>}
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows="5"
          className="input mt-2"
          required={required}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="input mt-2"
          required={required}
        />
      )}
    </div>
  );
};

export default InputField;
