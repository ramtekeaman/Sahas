
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


// players Details
<div class="container-fluid programe position-relative px-5 mt-5" style={{ marginBottom: "135px", display: "flex", justifyContent: "center" , flexDirection:'column'}} id="achievements">
    {/* <!-- First subsection with first three players --> */}
    <div class="row g-5 gb-5" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap:'30px' }}>
        {/* <!-- Player 1 --> */}
        <div class="col-lg-4 col-md-6" style={{ width: "20rem", height: "22rem" }}>
            {/* <!-- Player 1 Content --> */}
              <div
                class="team-item position-relative"
                style={{ transition: "0.2s ease-in-out" }}
                onMouseEnter={() => {
                  setShow1(true);
                }}
                onMouseLeave={() => {
                  setShow1(false);
                }}
                data-aos="zoom-in"
              >
                <div class="position-relative overflow-hidden rounded">
                  <img
                    class="img-fluid w-100"
                    src="/img/disha_player2 (2).png"
                    alt=""
                    style={{ height: "340px" }}
                  />
                </div>
                <div
                  class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info"
                  style={{
                    background: "rgba(34, 36, 41, 0.96)",
                    width: "100%",
                  }}
                  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                >
                  <h5 class="text-uppercase text-light">Disha Kasat</h5>
                  {show1 && (
                    <p
                      style={{
                        maxHeight: "244px",
                        width: "100%",
                        overflow: "auto",
                        scrollbarWidth: "none",
                      }}
                      data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                    >
                      "Disha Kasat, a right-handed batter from Amravati,
                      Maharashtra, has etched her name in cricket's annals with
                      her remarkable consistency. Her journey is a testament to
                      perseverance and talent, highlighted by two impressive
                      half-centuries for India A Women in the Senior Women's One
                      Day Challenger Trophy 2021. Disha's century for Vidarbha
                      Women in Visakhapatnam was not only a display of skill but
                      also a match-winning performance. Selected for the Central
                      Zone team in the Senior Women Inter-Zonal T20 and by the
                      Royal Challengers Bangalore in the WPL, Disha's rise is a
                      testament to her potential. She symbolizes the power of
                      dedication and hard work in achieving one's dreams."
                    </p>
                  )}
                </div>
              </div>
            </div>

        {/* <!-- Player 2 --> */}
        <div class="col-lg-4 col-md-6" style={{ width: "20rem", height: "22rem" }}>
            {/* <!-- Player 2 Content --> */}
            <div
                class="team-item position-relative"
                style={{ transition: "0.2s ease-in-out" }}
                onMouseEnter={() => {
                  setShow(true);
                }}
                onMouseLeave={() => {
                  setShow(false);
                }}
                data-aos="zoom-in"
              >
                <div class="position-relative overflow-hidden rounded">
                  <img class="img-fluid w-100" src="img/player1.jpg " alt="" />
                </div>
                <div
                  class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info"
                  style={{ background: "rgba(34, 36, 41, 0.96)" }}
                  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                >
                  <h5 class="text-uppercase text-light">Lokesh Marghade</h5>
                  {show && (
                    <p style={{ color: "#989898", fontSize: "12.5px" }} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                      "The Vidarbha captain, who was born with a twisted ankle,
                      has demonstrated consistency in every competition he
                      participates in recent days. In December 2021, Marghade
                      also led the Challenger Trophy in runs scored. He had
                      played four games in Chandigarh and scored 169 runs,
                      including two fifties. "I think the advice I'm getting
                      from my elders at Sahas Cricket Club is really beneficial
                      to me. "My goal is to improve myself so that I can make a
                      strong return to the Indian team," he stated."
                    </p>
                  )}
                </div>
              </div>
        </div>

        {/* <!-- Player 3 --> */}
        <div class="col-lg-4 col-md-6" style={{ width: "20rem", height: "22rem" }}>
            {/* <!-- Player 3 Content --> */}
            <div
                class="team-item position-relative"
                style={{ transition: "0.2s ease-in-out" }}
                onMouseEnter={() => {
                  setShow2(true);
                }}
                onMouseLeave={() => {
                  setShow2(false);
                }}
                data-aos="zoom-in"
              >
                <div class="position-relative overflow-hidden rounded">
                  <img
                    class="img-fluid w-100"
                    src="/img/SiddhiAndAroohi.png"
                    alt=""
                    style={{ height: "340px" }}
                  />
                </div>
                <div
                  class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info"
                  style={{ background: "rgba(34, 36, 41, 0.96)" }}
                  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                >
                  <h5 class="text-uppercase text-light">Siddhi & AArohi</h5>
                  {show2 && (
                    <div
                      style={{
                        maxHeight: "260px",
                        overflow: "auto",
                        scrollbarWidth: "none",
                      }}
                    >
                      <p style={{ color: "#989898", fontSize: "12.5px" }} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                        "Siddhi and Arohi, your achievements are truly
                        remarkable! Your hard work, dedication, and perseverance
                        have paid off, bringing immense pride to your family and
                        community. It's been a privilege to witness your growth
                        and progress, fueled by countless hours of practice and
                        determination. Your humility and respect towards your
                        coaches, the game, and the learning process are
                        admirable qualities that set you apart as not only
                        exceptional athletes but also as admirable individuals.
                        Earning a spot in the U-19 women’s camp organized by
                        @bcciofficial.in @bcci.women is a testament to your
                        talent and commitment. As you continue on your journey,
                        we extend our heartfelt wishes for success and good
                        fortune. May you continue to push yourselves to new
                        heights and achieve your dreams, including representing
                        at the national level."
                      </p>
                    </div>
                  )}
                </div>
              </div>
        </div>
    </div>

    {/* <!-- Second subsection with next three players --> */}
    <div class="row g-5 gb-5" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", gap:'30px' }}>
        {/* <!-- Player 4 --> */}
        <div class="col-lg-4 col-md-6" style={{ width: "20rem", height: "22rem" }}>
            {/* <!-- Player 4 Content --> */}
            <div
                class="team-item position-relative"
                style={{ transition: "0.2s ease-in-out" }}
                onMouseEnter={() => {
                  setShow3(true);
                }}
                onMouseLeave={() => {
                  setShow3(false);
                }}
                data-aos="zoom-in"
              >
                <div class="position-relative overflow-hidden rounded">
                  <img
                    class="img-fluid w-100"
                    src={img13}
                    alt=""
                    style={{ height: "340px" }}
                  />
                </div>
                <div
                  class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info"
                  style={{ background: "rgba(34, 36, 41, 0.96)" }}
                  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                >
                  <h5 class="text-uppercase text-light">Pavya and Siddhi</h5>
                  {show3 && (
                    <div
                      style={{
                        maxHeight: "260px",
                        overflow: "auto",
                        scrollbarWidth: "none",
                      }}
                    >
                      <p
                        style={{
                          color: "#989898",
                          fontSize: "12.5px",
                          overflow: "auto",
                          scrollbarWidth: "none",
                        }}
                        data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                      >
                        "Pavya and Siddhi's selection for the VCA U-19 women’s
                        team is a true reflection of their unwavering
                        dedication, exceptional talent, and relentless hard
                        work. Their journey to this point has been paved with
                        countless sacrifices, hours of intense practice, and an
                        unyielding commitment to excellence. Their achievement
                        serves as a beacon of inspiration for aspiring athletes
                        everywhere, showcasing the power of resilience and
                        determination in the pursuit of one's dreams. As they
                        step onto this new stage in their athletic careers, we
                        stand in awe of their accomplishments and offer our
                        sincerest congratulations. May their success continue to
                        fuel their passion and drive as they navigate the
                        challenges and triumphs that lie ahead. We are proud to
                        celebrate their achievements and eagerly anticipate the
                        remarkable feats they will undoubtedly accomplish in the
                        future. Here's to Pavya and Siddhi, two shining examples
                        of perseverance and triumph in the world of sports."
                      </p>
                    </div>
                  )}
                </div>
              </div>
        </div>

        {/* <!-- Player 5 --> */}
        <div class="col-lg-4 col-md-6" style={{ width: "20rem", height: "22rem" }}>
            {/* <!-- Player 5 Content --> */}
            <div
                class="team-item position-relative"
                style={{ transition: "0.2s ease-in-out" }}
                onMouseEnter={() => {
                  setShow4(true);
                }}
                onMouseLeave={() => {
                  setShow4(false);
                }}
                data-aos="zoom-in"
              >
                <div class="position-relative overflow-hidden rounded">
                  <img class="img-fluid w-100" src="img/SanketK_player.jpg " alt="" style={{ height: "340px" }}/>
                </div>
                <div
                  class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info"
                  style={{ background: "rgba(34, 36, 41, 0.96)" }}
                >
                  <h5 class="text-uppercase text-light">Sanket khedkar</h5>
                  {show4 && (
                    <div
                      style={{
                        minHeight: "283px",
                        overflow: "auto",
                        scrollbarWidth: "none",
                      }}
                      data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                    >
                      <p style={{ color: "#989898", fontSize: "12px" }} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                        "Sanket khedkar played for Vidarbha cricket association for u-14 ,16,19 age group part of BCCI Central zone camp,  Currently Performance Analyst for Indian PD cricket team, And Freelance Analyst for Star sports in ICC cricket World Cup 2023, Ipl 2024 and T-20 world cup 2024."
                      </p>
                    </div>
                  )}
                </div>
              </div>
        </div>

        {/* <!-- Player 6 --> */}
        <div class="col-lg-4 col-md-6" style={{ width: "20rem", height: "22rem" }}>
            {/* <!-- Player 6 Content --> */}
            <div
                class="team-item position-relative"
                style={{ transition: "0.2s ease-in-out" }}
                onMouseEnter={() => {
                  setShow5(true);
                }}
                onMouseLeave={() => {
                  setShow5(false);
                }}
                data-aos="zoom-in"
              >
                <div class="position-relative overflow-hidden rounded">
                  <img
                    class="img-fluid w-100"
                    src="/img/VijayK_player.jpg"
                    alt=""
                    style={{ height: "340px" }}
                  />
                </div>
                <div
                  class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info"
                  style={{ background: "rgba(34, 36, 41, 0.96)" }}
                  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                >
                  <h5 class="text-uppercase text-light">Viraj kadbe</h5>
                  {show5 && (
                    <div
                      style={{
                        minHeight: "260px",
                        overflow: "auto",
                        scrollbarWidth: "none",
                      }}
                      data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                    >
                      <p style={{ color: "#989898", fontSize: "14px" }} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                        "Viraj Kadbe made history as the first player to represent Vidarbha in the Ranji Trophy and later debuted in the IPL, showcasing talent from the region on a national platform. His journey exemplifies the rise of cricket in Vidarbha, inspiring aspiring cricketers to aim for higher achievements in the sport."
                      </p>
                    </div>
                  )}
                </div>
              </div>
        </div>
    </div>
</div>