const index = (props) => {
  return (
    <p className={`font-semibold text-2xl ${props.className}`}>{props.name}</p>
  );
};

export default index;
