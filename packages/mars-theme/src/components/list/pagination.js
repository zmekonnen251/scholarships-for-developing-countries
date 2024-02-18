import { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ({ state, actions }) => {
  // Get the total posts to be displayed based for the current link
  // const { next, previous } = state.source.get(state.router.link);
  const { previous, next, totalPages, page, route } = state.source.get(state.router.link);
  // console.log("State", state);
  // console.log("Actions", state.source.categories);
  const [currentPage, setCurrentPage] = useState(page ?? 1);
  const [startPage, setStartPage] = useState(1);
  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {

    if (next) actions.source.fetch(next);
  }, []);
  useEffect(() => {
    if (currentPage < 6) {
      setStartPage(1);
    } else {
      setStartPage(currentPage - 5);
    }
  }, [currentPage]);
  const handlePageClick = (pageNumber) => {
    actions.router.set(`${route}page/${pageNumber}`);
    setCurrentPage(pageNumber);
    if (pageNumber > startPage + 8) {
      setStartPage(pageNumber - 2);
    }
  };

  const handleNextClick = () => {
    actions.router.set(next);
    setCurrentPage(currentPage + 1);
    if (currentPage >= startPage + 8) {
      setStartPage(startPage + 2);
    }
  };
  const handlePrevClick = () => {
    actions.router.set(previous);
    setCurrentPage(currentPage - 1);
    if (currentPage <= startPage) {
      setStartPage(startPage - 2);
    }
  };
  return (
    <div>
      {previous && (
        <Button onClick={handlePrevClick}>
          &#171; Prev
        </Button>
      )}

      {Array.from({ length: Math.min(10, totalPages - startPage + 1) }, (_, i) => startPage + i).map(pageNumber => (
        <Button
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          className={pageNumber === currentPage ? 'active' : ''}
        >
          {pageNumber}
        </Button>
      ))
      }

      {
        next && (
          <Button onClick={handleNextClick}>
            Next &#187;
          </Button>
        )
      }
    </div >
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination);

const Text = styled.em`
  display: inline-block;
  margin-top: 16px;
`;
const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`
const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #f2f2f2;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }

  &.active {
    font-weight: bold;
    background-color: #ddd;
  }
`;