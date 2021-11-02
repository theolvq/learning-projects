import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';

const REVIEW = gql`
  query getReview($id: ID!) {
    review(id: $id) {
      id
      title
      body
      rating
      categories {
        id
        name
      }
    }
  }
`;

export default function ReviewDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(REVIEW, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }
  console.log(data);

  return (
    <div className='review-card'>
      <div className='rating'>{data.review.rating}</div>
      <h2>{data.review.title}</h2>
      {data.review.categories.map((c) => (
        <small key={c.id}>{c.name}</small>
      ))}
      <ReactMarkdown>{data.review.body}</ReactMarkdown>
    </div>
  );
}
