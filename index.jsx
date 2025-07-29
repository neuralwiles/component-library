import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/Button/Button";
import Menu from "./components/Menu/index";
import Star from "./components/Star";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import Testimonial from "./components/Testimonial/index";
import TestimonialWithImage from "./components/TestimonialWithImage/index";
import Tooltip from "./components/Tooltip/index";
import ToastPopup from "./components/ToastPopup/index";
import { TbCloudUpload } from "react-icons/tb";
import { HiOutlineInbox } from "react-icons/hi";
import logo from "./assets/Logo.png";
import photo from "./assets/Photo.jpg";

function App() {
  return (
    <>
      <h1>Your components go here</h1>
      <Badge color="purple" shape="pill">
        Badge
      </Badge>

      <br />

      <Banner type="success">
        <Banner.Title>Congratulations!</Banner.Title>
        <Banner.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid pariatur, ipsum similique
          veniam.
        </Banner.Body>
      </Banner>

      <br />

      <Banner type="error">
        <Banner.Title>Error!</Banner.Title>
      </Banner>

      <br />

      <Card>
        <Card.Icon>
          <TbCloudUpload className="card-icon" size="24px" />
        </Card.Icon>
        <Card.Title>Easy Deployment</Card.Title>
        <Card.Body>
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
          magna sit morbi lobortis.
        </Card.Body>
      </Card>

      <br />

      <Testimonial>
        <img src={logo} />
        <Testimonial.Quote>
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in
          laborum sed rerum et corporis.”
        </Testimonial.Quote>
        <Testimonial.Author name="May Andersons" title="Workcation, CTO" />
      </Testimonial>

      <br />

      <TestimonialWithImage src={photo}>
        <TestimonialWithImage.Quote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
          nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
          adipiscing nunc urna, sit.
        </TestimonialWithImage.Quote>
        <TestimonialWithImage.Author
          name="May Andersons"
          title="Workcation, CTO"
        />
      </TestimonialWithImage>

      <br />

      <Tooltip.Container>
        <Tooltip icon={<HiOutlineInbox size="20px" />}>
          <Tooltip.Title>Archive notes</Tooltip.Title>
          <Tooltip.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
            tenetur.
          </Tooltip.Body>
        </Tooltip>
        <Tooltip.Element>
          <button>I Have a Tooltip</button>
        </Tooltip.Element>
      </Tooltip.Container>

      <br />

      <ToastPopup.Container type="success">
        <ToastPopup>
          <ToastPopup.Title>Success!</ToastPopup.Title>
          <ToastPopup.Body>Your work has been saved.</ToastPopup.Body>
        </ToastPopup>
        <ToastPopup.Element>
          <button>Click for Toast</button>
        </ToastPopup.Element>
      </ToastPopup.Container>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
