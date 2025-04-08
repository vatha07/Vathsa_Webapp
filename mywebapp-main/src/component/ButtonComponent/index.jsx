const ButtonComponent = ({name, onClick}) => {
  return (
    <button style={{margin: '5px'}} onClick={onClick} className="btn btn-primary">
      {name}
    </button>
  );
}

export default ButtonComponent; 