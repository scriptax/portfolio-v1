import { useContext } from "react";
import { AccentContext } from "../../App";

function WorkCard({ data }) {
  const accent = useContext(AccentContext);
  return (
    <div className={`work-card m-1 mt-2 font-md bg-${accent}`}>
      <div className="row">
        <div className="col-12-xs col-6-md p-1">
          <img src={data.pic} alt={data.name} draggable="false" />
        </div>
        <div className="col-12-xs col-6-md p-1">
          <div className="mb-1">
            <h4>{data.name}</h4>
            <p className="fontfam-temp font-sm">{data.description}</p>
          </div>
          <hr />
          <div className="display-f justify-space-between align-center mt-1">
            <div>
              {data.stack.map((techLogo, index) => (
                <img
                  className="mr-1"
                  height="25px"
                  key={index}
                  src={techLogo}
                  alt=""
                />
              ))}
            </div>
            <div>
              <a
                className={`link link-${accent} mr-1 fontfam-temp font-sm`}
                href={data.repoLink}
                target="blank"
              >
                Code
              </a>
              <a
                className={`link link-${accent} fontfam-temp font-sm`}
                href={data.liveLink}
                target="blank"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
