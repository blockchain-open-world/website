import { useState } from "react"
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify";

import bow from '../assets/images/bow.jpg'
import pipe_city from '../assets/images/pipe_city.jpg'
import sky_city from '../assets/images/sky_city.jpg'
import service01 from '../assets/images/service-01.jpg'
import service02 from '../assets/images/service-02.jpg'
import service03 from '../assets/images/service-03.jpg'

function Home() {

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const register = async () => {
    console.log({
      name,
      email
    })
    try {
      const req = await fetch('/subscriptions.php', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          name,
          email
        })
      });
      if (await req.text() === "success") {
        setEmail("");
        setName("");
        handleClose();
        toast.success("Success!")
        return;
      }
    } catch (err) {
      console.log(err)
    }
    toast.error("Failed subscribe")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">

            {/*** ***** Banner Start ***** ***/}
            <div className="main-banner">
              <div className="main-banner-shadon">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="header-text">
                      <h6>Welcome To BOW</h6>
                      <h4>An <em>Open World</em> cyberpunk dystopia</h4>
                      <div className="main-button">
                        <button onClick={handleShow}>Pre-Register Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*** ***** Banner End ***** ***/}

            {/*** ***** Start Stream Start ***** ***/}
            <div className="start-stream">
              <div className="col-lg-12">
                <div className="heading-section">
                  <h4>About <em>Blockchain Open World</em> Game System</h4>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="content-dark">
                      <div className="row">
                        <div className="col-lg-12">
                          <p>With the opensource philosophy, it is built and maintained by an active community where everything within its cyberpunk universe can be customized and shared.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="item">
                      <div className="icon">
                        <img src={service01} alt="" style={{
                          maxWidth: '60px',
                          borderRadius: '50%'
                        }} />
                      </div>
                      <h4>Descentralized</h4>
                      <p>Explore a new cyberpunk world with other players. Train robots and climb to the surface if you are able.</p>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="item">
                      <div className="icon">
                        <img src={service02} alt="" style={{
                          maxWidth: '60px',
                          borderRadius: '50%'
                        }} />
                      </div>
                      <h4>Open Source</h4>
                      <p>BOW is a collaborative game, created and maintained by a community of players and content creators.</p>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="item">
                      <div className="icon">
                        <img src={service03} alt="" style={{
                          maxWidth: '60px',
                          borderRadius: '50%'
                        }} />
                      </div>
                      <h4>Metaverse</h4>
                      <p>Highly Customizable! Allows users to create skins, game mechanics, battles, items, in-game economy, and much more.</p>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="main-button">
                      <button onClick={handleShow}>Pre-Register Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*** ***** Start Stream End ***** ***/}

            {/*** ***** Details Start ***** ***/}
            <div className="game-details">
              <div className="row">
                <div className="col-lg-12">
                  <h2>History</h2>
                </div>
                <div className="col-lg-12">
                  <div className="content">
                    <div className="row">
                      <div className="col-lg-4">
                        <img src={bow} alt="" style={{
                          marginBottom: '30px',
                          borderRadius: '23px'
                        }} />
                      </div>
                      <div className="col-lg-4">
                        <img src={pipe_city} alt="" style={{
                          marginBottom: '30px',
                          borderRadius: '23px'
                        }} />
                      </div>
                      <div className="col-lg-4">
                        <img src={sky_city} alt="" style={{
                          marginBottom: '30px',
                          borderRadius: '23px'
                        }} />
                      </div>
                      <div className="col-lg-12">
                        <p>The game takes place in the distant future. The machines have already reached the singularity, eventually humans go to war with it and now humans live underground. Dreaming of better days.</p>
                        <p>The game has three levels: underground, tunnels and the upper city. You must fight to survive, mine to earn money and find parts and robots to begin your ascension.</p>
                      </div>
                      <div className="col-lg-12">
                        <div className="main-border-button text-center">
                          <button onClick={handleShow}>Pre-Register Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*** ***** Details End ***** ***/}

            {/*** ***** Start Stream Start ***** ***/}
            <div className="start-stream">
              <div className="col-lg-12">
                <div className="heading-section">
                  <h4>Mechanics</h4>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="item">
                      <div className="blockchain-banner">
                      </div>
                      <h4>Economy</h4>
                      <p>Fun first! The first coins the player will have to buy from other players or provide services within the game. After that, the player can mine blocks within the game and obtain more coins. As time passes, it will be more difficult to find blocks that mine the BOW Token.</p>
                      <p>These coins will be used as currency between players and can be sold outside the game.</p>

                      <h4 className="mt-4">Blockchain</h4>
                      <p>Game data will be stored on Binance's <a href="https://greenfield.bnbchain.org" className="greenfield"><strong>Greenfield Blockchain</strong></a>.</p>

                      <h4 className="mt-4">Battles</h4>
                      <p>User actions will be validated on the blockchain itself in order to prevent hackers. Battles will take place using Robots that players find on the map. There will be turn-based battles based on probability, level and skills of the robots.</p>

                      <h4 className="mt-4">Minning</h4>
                      <p>There will be three types of blocks in the game:</p>
                      <p>- The first type is the most common, where it is possible to exchange your skin for a pre-defined set to build houses and structures.</p>
                      <p>- The second type is more difficult to find. This block allows the user to place a unique custom skin, this block cannot be removed by other players.</p>
                      <p>- The third type is the rarest block. This block gives a number of BOW tokens to the user who found it.</p>

                      <h4 className="mt-4">Tokenomics</h4>
                      <p>The BOW token will have a maximum limit of 1000000000 (one billion) units.</p>
                      <p>- 20% aimed at encouraging the improvement of the game, content creators, programmers and people engaged in the community.</p>
                      <p>- 20% intended to be purchased by first players and masternodes.</p>
                      <p>- The largest amount, 60%, of the tokens can only be obtained within the game.</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="main-button">
                      <button onClick={handleShow}>Pre-Register Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*** ***** Start Stream End ***** ***/}
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <div className="subscription_form">
                <div className="row">
                  <label className="col-auto">Name:</label>
                  <input className="col" type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <div className="subscription_form">
                <div className="row">
                  <label className="col-auto">Email:</label>
                  <input className="col" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="main-border-button text-center">
            <button onClick={handleClose}>Close</button>
          </div>
          <div className="main-button text-center">
            <button onClick={register}>Subscribe</button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Home
