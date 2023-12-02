const AboutServiceCards = (props) => {
  const { img, title, description } = props;

  return (
    <div className="flex flex-col items-center gap-4 bg-primaryDark/10 w-full lg:w-2/4 p-5 rounded-lg cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition duration-300 ease-in-out">
      <img src={img} alt="aboutCard" />
      <h1 className="font-semibold text-3xl font-OpenSens">{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default AboutServiceCards;
