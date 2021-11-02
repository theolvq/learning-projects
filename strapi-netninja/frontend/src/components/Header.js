import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = gql`
  query getCategories {
    categories {
      name
      id
    }
  }
`;

export default function Header() {
  const { loading, error, data } = useQuery(CATEGORIES);
  if (loading) {
    return <p>Loading categories...</p>;
  }

  if (error) {
    return <p>Error fetching categories!</p>;
  }
  console.log(data);
  return (
    <header className='site-header'>
      <Link to='/'>
        <h1>Ninja Reviews</h1>
      </Link>
      <nav className='categories'>
        <span>Filter reviews by categories</span>
        {data.categories.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
