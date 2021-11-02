import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';

const CATEGORY = gql`
  query getCategory($id: ID!) {
    category(id: $id) {
      name
      id
      reviews {
        title
        body
        rating
        id
        categories {
          name
          id
        }
      }
    }
  }
`;

export default function Category() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(CATEGORY, {
    variables: { id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  console.log(data);
  return (
    <div>
      <h1>Category</h1>
      <h2>{data.category.name}</h2>
      {data.category.reviews.map((review) => (
        <div key={review.id} className='review-card'>
          <div className='rating'>{review.rating}</div>
          <h2>{review.title}</h2>
          {review.categories.map((c) => (
            <small key={c.id}>{c.name}</small>
          ))}
          <p>{review.body.substring(0, 150)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
