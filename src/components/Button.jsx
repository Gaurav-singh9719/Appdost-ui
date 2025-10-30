const Button = ({ children, variant = "primary", onClick, className = "", type = "button" }) => {
  if (variant === "primary") {
    return (
      <button type={type} onClick={onClick} className={`btn-primary ${className}`}>
        {children}
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button type={type} onClick={onClick} className={`btn-outline ${className}`}>
        {children}
      </button>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`px-4 py-2 rounded-md ${className}`}>
      {children}
    </button>
  );
};

export default Button;
