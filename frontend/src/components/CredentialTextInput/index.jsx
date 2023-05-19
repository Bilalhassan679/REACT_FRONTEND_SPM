const index = (props) => {
  return (
    <input
      type="text"
      className={` border-b pb-1 border-gray-400 focus:border-blue-600 focus:outline-none ${props.className}`}
      placeholder={props.placeholder}
    />
  );
};

export default index;
