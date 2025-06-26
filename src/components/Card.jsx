import './Card.css';

export default function Card({ title, poweredBy }) {
  return (
    <div className="card">
      <p className="heading">{title}</p>
      <p>{poweredBy}</p>
    </div>
  );
}
//NOTE: connected to the homepage