
function Card({ title, children, bgColor = "crema-azul", textColor = "text-gray-800" }) {
  return (
    <div className={`${bgColor} ${textColor} rounded-2xl shadow-lg p-8 max-w-md w-full`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Card;