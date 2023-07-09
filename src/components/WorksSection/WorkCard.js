import { useContext } from "react";
import { AccentContext } from "../../App";
import * as icons from "./../../utils/icons";

function WorkCard({ data, img }) {
  const accent = useContext(AccentContext);
  console.log(data)
  return (
    <div className={`work-card m-1 mt-2 font-md bg-${accent}`}>
      <div className="row">
        <div className="col-12-xs col-6-md p-1">
          <img src={img} alt={data.name} draggable="false" />
        </div>
        <div className="col-12-xs col-6-md p-1">
          <div className="mb-1">
            <h4>{data.name}</h4>
            <p className="fontfam-temp font-sm">{data.description}</p>
          </div>
          <hr />
          <div className="display-f justify-space-between align-center mt-1">
            <div>
              {data.stack.map((tech, index) => (
                <img
                  className="mr-1"
                  height="25px"
                  key={index}
                  src={icons[tech]}
                  alt=""
                />
              ))}
            </div>
            <div>
              <a
                className={`link link-${accent} mr-1 fontfam-temp font-sm`}
                href={data.repo}
                target="blank"
              >
                Code
              </a>
              <a
                className={`link link-${accent} fontfam-temp font-sm`}
                href={data.live}
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
