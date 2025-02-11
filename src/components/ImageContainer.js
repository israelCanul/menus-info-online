import { getLastUlrPath } from "../helpers";
import { Link } from "react-router-dom";
const ImageContainer = ({ img, name = "default" }) => {
  const urlPath = getLastUlrPath();

  return (
    <>
      {urlPath && (
        <div className="back">
          <div className="nav">
            <Link to={urlPath}>
              <span className="material-icons">keyboard_arrow_left</span>
            </Link>
          </div>
        </div>
      )}
      <div className="information">
        <span>Scroll down for English</span>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAYACcDAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcEBQYD/8QAGwEAAgIDAQAAAAAAAAAAAAAAAAYCBQEDBwj/2gAMAwEAAhADEAAAAFe76bmAykDsWtoGyVnVmuo+d7OA0ll03lXb9SCFrXwAACTnX//EADEQAAAFAgMGAgsBAAAAAAAAAAECAwQFBhIABwgRExRXk9QxQRUiMkJSVFVyg5LTo//aAAgBAQABPwCMyqi6jo5jIxeWiphlqTO8ZPVahSAnEMlB493YJwGwQACAmPhiSypp1k6lJQMplyQzdzEVBYpVCI2Q7oAIRC6/2llTDsP7oYy1ozI6gouVgMzomdjaqYSrtI7NiudwRBDeCKJN4mIlMIE8cWaTflqp/wB8RielTjU+GbVRvvz4W0L1+MMs0SyppBFyeEbRpXQVM59R0mpeq8AvxK7CgJcL6LK1GYXdo5NUcigpNNpIjUaqcmAjZJPYZn9hz3HEcZL5faislqPVpyApyiGkTxzh2g2dvV3JkCKHuBMFLwEwFDYUBHHpjVJ9Dy+/dx/XDWX1Pb8N/CUBuvOw6/8AXFmm7nJX3UcdpizTdzkr7qOO0xZpu5yV91HHaYs03c5K+6jjtMRpNOfGp7jOCvFVfIh1HHa4/8QAKREAAQIEBAYCAwAAAAAAAAAAAQACAwQRMVFTgfAFEhMUIWEkQVKR0f/aAAgBAgEBPwAxi1xDn2OGNghGeQG9Tz5FvsfxcafJxJrni1JIFl8D2h2Htd/CrXqG9bC2CE9DpQxDalh+1xGPMRo/NAoW0F7rmn/xag6ewaqSWa7eipJZrt6Kklmu3oqSWa7eiAks129F/8QALBEAAAUBBQUJAAAAAAAAAAAAAAEDBhESAgVVotMTMkGC0gQQFRYiMVJTgf/aAAgBAwEBPwDubHmQruLww7Gyk96JniJenyTyhQ3lQdRpx+CkUi6km8fZiO8rahKSe7ERw9yGxZ/2rZekWkWhHpVWnl6RLrw9HLqCXXh6OXUEuvD0cuoJdeHo5dQKG6qTqu9GOXUH/9k="
          alt="flag"
        />
      </div>
      <div className="scaleUp">
        <a target="_blank" rel="noopener noreferrer" href={img} download>
          <span className="material-icons">get_app</span>
        </a>
      </div>

      <img style={{ width: "100%" }} alt="Spa Img" src={img} />
    </>
  );
};

export default ImageContainer;
