function CardPanel({ title, number, icon, newItems, lastVisit }) {

  return (
    <div className="card mb-0">
      <div className="flex justify-content-between mb-3">
        <div>
          <span className="block text-500 font-medium mb-3">{title}</span>
          <div className="text-900 font-medium text-xl">{number}</div>
        </div>
        <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
            <i className={icon} />
        </div>
      </div>
      <span className="text-green-500 font-medium">{newItems} nuevos </span>
      {lastVisit && (
        <span className="text-500">desde la ultima visita</span>
      )}
    </div>
  );
}

export default CardPanel;