import React from 'react';
import { useSelector } from 'react-redux';

const SearchResults = () => {
  const results = useSelector((state) => state.searcher.searchResults);
  let content = 'No results yet';
  if (results.length) {
    content = results.map((item, index) => (
      <li key={index}>
        <a target="_blank" rel="noreferrer noopener" href={item.link}>
          {item.title}
        </a>
      </li>
    ));
  }
  return (
    <div>
      <ul>{content}</ul>
    </div>
  );
};

export default SearchResults;
