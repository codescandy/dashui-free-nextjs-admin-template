'use client'

// import node module libraries
import { Card, Col, Row, Container } from 'react-bootstrap';

const Documentation = () => {
  return (
    <Container fluid className="p-6">
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex justify-content-between align-items-center">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-0 h2 fw-bold">Dash UI NextJS</h1>
              <p className="mb-0">
                Welcome to the Dash UI NextJS version of the original Dash UI theme.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={7} md={12} sm={12}>
          <Card>
            <Card.Body>
              <h2 className="fw-bold">Getting Started</h2>
              <p className="lead">
                A professional Dash UI NextJS Kit that comes with plenty of
                ready-to-use components that will help you to build more
                beautiful application (web app).
              </p>

              <p>
                Dash UI Kit is built with the most popular front-end framework{' '}
                <a
                  href="https://react-bootstrap.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ReactJS Bootstrap
                </a>{' '}
                with react-scripts.
              </p>
              <p>
                This doc will guide you to understand how Dash UI-NextJS theme is
                organized, basics of how to customize, and how to compile from
                the source code if you want.
              </p>

              <hr className="mb-5 mt-5" />

              <h2 className="mb-0 fw-bold">Running in Local environment</h2>
              <p>This project is scaffolded using npx create-next-app@latest.</p>

              <ol>
                <li>
                  <h4 className="mb-0 fw-bold">Requirements Node.js</h4>
                  <p>
                    Before proceeding you&apos;ll need to have the latest stable{' '}
                    <a
                      href="https://nodejs.org/en/download/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {' '}
                      nodejs.
                    </a>{' '}
                    Install <code>Node.js</code> or already have it installed on
                    your machine move to next step.
                  </p>
                </li>
                <li>
                  {' '}
                  <h4 className="mb-0 fw-bold">Install Dash UI NextJS</h4>
                  <p>
                    Open the <span>dashui-free-nextjs-admin-template </span>directory with your cmd
                    or terminal. Open the project folder and install its
                    dependencies.{' '}
                  </p>
                  <pre className="prism-code language-jsx mb-2 bg-dark text-white fs-5">
                    cd dashui-free-nextjs-admin-template{' '}
                  </pre>
                  <pre className="prism-code language-jsx mb-2  bg-dark text-white fs-5">
                    npm install{' '}
                  </pre>
                  <p>
                    This command will download all the necessary dependencies
                    for dash UI in the node_modules directory.
                  </p>
                </li>
                <li>
                  <h4 className="mb-0 fw-bold">Start</h4>
                  <p>
                    Run <code>npm run dev</code> or <code>yarn dev</code> or <code>pnpm dev</code> to start the development server on http://localhost:3000
                  </p>
                  <p>
                    Visit <code><a
                      href="http://localhost:3000"
                      target="_blank"
                      rel="noreferrer"
                    >
                      http://localhost:3000{' '}
                    </a></code> to view your application
                  </p>
                  <p>
                    Edit <code>pages/index.js</code> and see the updated result in your browser
                  </p>
                  <pre className="prism-code language-jsx  bg-dark text-white fs-5">
                    npm run dev
                  </pre>
                </li>
              </ol>
              <hr className="mb-5 mt-5" />
              <h2 className="mb-0 fw-bold">Creating a Production Build.</h2>
              <p>Production build of your app.</p>
              <ol>
                <li>
                  <div className="mb-4">
                    <p>
                      Run <code>npm run build</code> command in your project
                      directory to make the Production build app.
                    </p>
                    <pre className="prism-code language-jsx mb-2 bg-dark text-white fs-5">
                      npm run build
                    </pre>
                  </div>
                </li>
                <li>
                  <div className="">
                    <p> This output is generated inside the <code>.next</code> folder:</p>
                    <pre className="prism-code language-jsx  bg-dark text-white fs-5 mb-2">
                      npm run start
                    </pre>
                    <p>
                      Once you execute above command, the production build run
                      locally at <code>http://localhost:3000</code>.
                    </p>
                  </div>
                </li>
              </ol>

              <hr className="mb-5 mt-5" />

              <h2 className="mb-0 fw-bold">File Structure:</h2>
              <p>
                Inside the zip-file you&apos;ll find the following directories and
                files. Both compiled and minified distrubution files, as well as
                the source files are included in the package.
              </p>

              <code>
                <pre>
                  {`
theme/
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── package-lock.json
├── README.md
├── components/
├── data/
├── hooks/
├── layouts/
├── app/
├── public/
│   ├── fonts
│   ├── images
│   └── favicon.ico
├── routes/
├── styles/
├── sub-components/
└── widgets/
`}
                </pre>
              </code>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Documentation;
