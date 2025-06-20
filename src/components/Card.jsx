import './Card.css';

export default function Card({ title, poweredBy, source }) {
  return (
    <div className="card">
      <p className="heading">{title}</p>
      <p>{poweredBy}</p>
      <p>{source}</p>
    </div>
  );
}
