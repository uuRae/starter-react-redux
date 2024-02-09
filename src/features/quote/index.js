import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchQuote,
  selectError,
  selectLoading,
  selectQuote,
} from './quote.slice';
import './quote.css';

export default function Quote() {
  const { quote, author } = useSelector(selectQuote);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadQuote() {
      await dispatch(fetchQuote());
    }
    loadQuote();
  }, [dispatch]);

  let render;
  if (loading) {
    render = <h3>Loading...</h3>;
  } else if (error) {
    render = <h3>Sorry, we're having trouble loading the quote.</h3>;
  } else {
    render = (
      <>
        <blockquote>
          <p>{quote}</p>
        </blockquote>
        <figcaption>—{author}</figcaption>
      </>
    );
  }

  return (
    <section>
      <h2>Quote of the Day</h2>
      {render}
    </section>
  );
}