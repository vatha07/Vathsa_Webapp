import './Inputcomponent.css';

const InputComponent = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="input-component">
        <label htmlFor={placeholder}>{placeholder}</label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
            onChange(e.target.value)
        }}
      />
    </div>
  );
}

export default InputComponent;