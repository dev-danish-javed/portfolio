import "./../css/AppProgressBar.css";

const AppProgressBar = ({ icon, value, name }) => {
  const percentage = { "--value": value };
  return (
    <>
      <div
        style={percentage}
        className="skill_progress d-flex justify-content-center align-items-center"
      >
        <div className="skill-bg rounded rounded-circle d-flex justify-content-center align-items-center">
          <div className="skill-fg  rounded-circle d-flex flex-column justify-content-center align-items-center gap-3">
            <img src={icon} alt={name} />
            <sub className="">{name}</sub>
          </div>
        </div>
      </div>
    </>
  );
};
export default AppProgressBar;
