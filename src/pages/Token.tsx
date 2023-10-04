
function Token() {

  const BUY_PACKAGE = {
    EARN_ACCESS: '0.1',
    MASTERNODE: '2',
    TRADER: '20',
  }

  const buyToken = (amount: string) => {
    return amount;
  }

  return (<div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="page-content">
          {/*** ***** Details Start ***** ***/}
          <div className="game-details">
            <div className="row">
              <div className="col-lg-12">
                <div className="content">
                  <div className="row">
                    <div className="col">
                      <div className="heading-section text-center m-5">
                        <h4>Buy <em>BOW</em> Token</h4>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="buy-card main-button">
                        <h4>Early Access</h4>
                        <p>Receive updates first hand. Get early access to the game and get ahead to get the best robots, mining blocks and much more.</p>
                        <div className="main-button text-center mt-3">
                          <button onClick={() => buyToken(BUY_PACKAGE.EARN_ACCESS)}>{`${BUY_PACKAGE.EARN_ACCESS} BNB`}</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="buy-card main-button">
                        <h4>Master Node</h4>
                        <p>In addition to providing security for the network, you will receive a commission from all tokens that are traded within the network.</p>
                        <div className="main-button text-center mt-3">
                          <button onClick={() => buyToken(BUY_PACKAGE.MASTERNODE)}>{`${BUY_PACKAGE.MASTERNODE} BNB`}</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="buy-card main-button">
                        <h4>Trader</h4>
                        <p>For those who want to surf token speculation. Despite the game's entire economy being geared towards token scarcity. Caution is recommended.</p>
                        <div className="main-button text-center mt-3">
                          <button onClick={() => buyToken(BUY_PACKAGE.TRADER)}>{`${BUY_PACKAGE.TRADER} BNB`}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*** ***** Details End ***** ***/}
        </div>
      </div>
    </div>
  </div>)
}

export default Token
