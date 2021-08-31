import { Link } from 'react-router-dom';

import '../styles/page404.scss';

export default function Page404() {
  return (
    <div className="page404__wrapper">
      <h1>Oops...This page is no longer there!</h1>
      <Link to='/' tabIndex={1}>Go to homepage</Link>
    </div>
  )
}