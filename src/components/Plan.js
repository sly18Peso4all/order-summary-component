import { BsMusicNoteBeamed } from "react-icons/bs";

const Plan = () => {
  return (
    <div className="card-plan">
      <span className="icon">
        <BsMusicNoteBeamed />
      </span>
      <span>
        <p className="big-text">Annual Plan</p>
        <p>$59.99/yr</p>
      </span>
      <a href="#">change</a>
    </div>
  );
};

export default Plan;
