
const Ys = styled.div`
  font-family: "open sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 25px;

  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 26px;
    height: 600px;
  }

  .container {
    display: flex;
    flex-wrap: wrap; /* Allow cards to wrap to the next line */
    justify-content: center;
  }

  .cards {
    width: 300px;
    margin: 0 10px;
    background-color: white;
    border-radius: 15px;
    transition: 0.2s;
  }

  .card-img {
    height: 400px;
  }

  .card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
  }

  .card-body h5,
  .card-body p {
    text-align: center;
    margin: 0; /* Remove default margins */
  }

  @media screen and (max-width: 768px) {
    .parent {
      flex-direction: column; /* Stack cards vertically */
      height: auto; /* Reset height */
    }

    .container {
      width: 100%; /* Full width */
      justify-content: center; /* Center align cards */
      align-items: center; /* Center align cards */
    }

    .cards {
      width: calc(100% - 20px); /* Full width with gap */
      margin: 10px;
    }

    .card-img {
      height: 270px;
    }
  }
`;