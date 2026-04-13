import { Link } from "react-router-dom";
// REVIEW: `About/style.css` exists but is not imported here; global `index.css` covers `.info-*` classes — either import `./style.css` for locality or delete the unused file to avoid confusion.
// REVIEW: About documents `GET /users?name=X` only; API also supports `email` and `age` query params — align docs with backend behavior.

function About() {
  return (
    <div className="container">
      <section className="info-section">
        <div className="info-container">
          <h2>About This Project</h2>
          <p className="subtitle">
            Full-stack user management system built for Course 5 at Hyper Island
          </p>

          <div className="info-grid">
            <div className="info-card">
              <h3>Features</h3>
              <ul>
                <li>Create, search, display, edit and delete user records</li>
                <li>Notifications with visual feedback</li>
                <li>Form validation</li>
                <li>Responsive design</li>
                <li>RESTful API with CRUD operations</li>
                <li>Client-side routing with React Router</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Technologies</h3>
              <div className="tech-list">
                <span className="tech-badge">React</span>
                <span className="tech-badge">React Router</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">Vite</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Express</span>
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Mongoose</span>
                <span className="tech-badge">Axios</span>
              </div>
            </div>

            <div className="info-card">
              <h3>What I Learned</h3>
              <ul>
                <li>useState and useRef hooks</li>
                <li>Custom hooks for reusable logic</li>
                <li>Breaking the app into components</li>
                <li>Passing data with props</li>
                <li>Conditional and list rendering</li>
                <li>Controlled inputs</li>
                <li>React Router for navigation</li>
                <li>Connecting frontend to a REST API</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>API Endpoints</h3>
              <div className="api-docs">
                <div className="api-endpoint">
                  <strong>GET</strong> <code>/users</code> - Get all users
                </div>
                <div className="api-endpoint">
                  <strong>GET</strong> <code>/users?name=X</code> - Search users
                </div>
                <div className="api-endpoint">
                  <strong>POST</strong> <code>/users</code> - Create user
                </div>
                <div className="api-endpoint">
                  <strong>PUT</strong> <code>/users/:id</code> - Update user
                </div>
                <div className="api-endpoint">
                  <strong>DELETE</strong> <code>/users/:id</code> - Delete user
                </div>
              </div>
            </div>
          </div>

          <div className="info-footer">
            <p>
              Made by <strong>Patricia Gea</strong> —{" "}
              <strong>Hyper Island, Stockholm</strong>
            </p>
            <div className="social-links">
              <a
                href="https://github.com/PatriciaGea"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub →
              </a>
              <a
                href="https://www.linkedin.com/in/patriciageafrontend/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/PatriciaGea/devClubCadastrouser"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Project Repo →
              </a>
            </div>
            <Link to="/" className="social-link">
              ← Back to App
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
