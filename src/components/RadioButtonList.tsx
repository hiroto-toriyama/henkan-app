type RadioButtonListPropsType = {
  name: string;
  value: string[];
  state: React.SetStateAction<string>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const RadioButtonList = ({name, value, state, onChange}: RadioButtonListPropsType) => {
  return (
    <div className="w-24">
      <div className="form-control">
        {value.map((item, index) => (
          <label key={index} className="label cursor-pointer">
            <span className="label-text">{item}</span> 
            <input type="radio" name={name} value={item} checked={item === state} onChange={onChange} className="radio" />
          </label>
        ))}
      </div>
    </div>
  );
};

{/* <div className="w-24">
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">csv</span> 
    <input type="radio" name="radio-input" onChange={onChecked} className="radio" checked />
  </label>
</div> */}

export default RadioButtonList;