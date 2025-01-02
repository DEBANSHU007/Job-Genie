const Logo = ({ className = "", ...props }) => {
  return (
    <h2
      className={`text-3xl 2xl:text-5xl font-black text-primary text-white hover:text-purple-400 ${className}`}
      {...props}
    >
      JobGenie
    </h2>
  );
};

export default Logo;
