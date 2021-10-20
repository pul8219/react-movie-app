import React from 'react';
// import react from 'react';

// function Detail({ location }) {
//   console.log(location.state);
//   return <div>hello</div>;
// }

// export default Detail;

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
    // console.log(location.state);
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div>
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div>
            <h3>{location.state.title}</h3>
            <h5>{location.state.year}</h5>
            <ul>
              {location.state.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
            <p>{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
