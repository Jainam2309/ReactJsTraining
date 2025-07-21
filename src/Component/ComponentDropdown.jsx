
import { useNavigate } from "react-router-dom";

export default function ComponentDropdown({ options }) {
  const navigate = useNavigate();

  function handleChange(event) {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate("/" + selectedValue.toLowerCase());
    }
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>Select a Component</option>
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>{opt.value}</option>
        ))}
      </select>
    </div>
  );
}
