import { NextPage } from "next";

const paragraphs = [
  "My Company is dedicated to providing high-quality services and customer",
  "satisfaction. We strive to meet and exceed your expectations.",
];

export const Content: NextPage = () => {
  return (
    <>
      <h1>About Our Company</h1>

      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
};

export default Content;
