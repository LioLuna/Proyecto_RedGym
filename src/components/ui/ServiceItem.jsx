function ServiceItem ({ icon, title, description, items }) {
    return (
        <div className="text-white">
            <div className="flex items-center gap-3 mb-3">
                <img src={icon} alt={title} className="w-6 h-6 object-contain" />
                <h3 className="font-semibold text-white text-lg">{title}</h3>
            </div>

        <p className="text-gray-400 text-sm mb-3">
            {description}
            </p>

        <ul className="text-gray-300 text-sm space-y-1">
            {items.map((item, index) => ( 
                <li key={index} >-{item}</li>
            ))}
            </ul>
        </div>
    );
}
export default ServiceItem;