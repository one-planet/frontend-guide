interface FooterProps {
  name: string;
  year: number;
  callback: () => void;
}

const Footer = (props: FooterProps) => {
  const { name, year, callback } = { ...props };
  return (
    <>
      <div>
        {name} {year}
      </div>
      <div onClick={callback}>Click for alert</div>
    </>
  );
};

export default Footer;
