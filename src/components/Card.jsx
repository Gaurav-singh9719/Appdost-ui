const Card = ({ title, children, icon }) => {
  return (
    <div className="card flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 text-xl">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="text-sm text-gray-600">{children}</div>
    </div>
  );
};

export default Card;
