import { Link } from 'react-router-dom';

export default function MoviesLinkList(data) {
  return (
    data && (
      <ul>
        {data.data.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          );
        })}
      </ul>
    )
  );
}
