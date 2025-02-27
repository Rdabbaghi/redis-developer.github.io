import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import SvgDots from '@site/src/svg/Dots';

function Demos() {
  return (
    <section className="rds-demos">
      <div className="container">
        <h2 className="section-title">
          <br />
        </h2>

        <div className="row terminals">
          <img
            src={useBaseUrl('/img/code-1.png')}
            className="code"
            alt="Background image of sample redis code"
          />

          <div className="col col--6">
            <div className="terminal left">
              <div className="terminal-header">
                <SvgDots />
              </div>
              <div className="terminal-body">
                <h5 className="title">Getting started with Redis Stack</h5>
                <ul className="links">
                  <li>
                    <a href="/create/redis-stack/">
                      Introduction to Redis Stack
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/redisjson/getting-started/">
                      Storing and Searching JSON documents
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/redisearch/">
                      Full-text Search Using Redis Stack
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/redistimeseries/getting-started/">
                      Storing and Querying Time Series data
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/redisbloom/">
                      Probabilistic Data Structures Using Redis Stack
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className="terminal right">
              <div className="terminal-header">
                <SvgDots />
              </div>
              <div className="terminal-body">
                <h5 className="title">Featured how-tos & tutorials</h5>
                <ul className="links">
                  <li>
                    <a href="/howtos/shoppingcart/">
                      How to Build a Shopping App Using NodeJS and Redis
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/ratelimiting/">
                      How to Build a Rate Limiter Using Redis and Python
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/moviesdatabase/getting-started/">
                      How to Build an IMDB Clone Using Redis Stack
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/leaderboard/">
                      How to Build a Real-Time Leaderboard App Using Redis
                    </a>
                  </li>
                  <li>
                    <a href="/howtos/solutions/microservices/caching">
                      How to Implement Cache-aside Using Redis and NodeJS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demos;
