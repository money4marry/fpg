import { DatePicker } from "antd";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function Review() {
  return (
    <div>
      <DatePicker onChange={onChange} />
    </div>
  );
}

export default Review;
