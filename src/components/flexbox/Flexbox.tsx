import React from "react";
import './flexbox.scss';

export const Flexbox: React.SFC = () => {
  return (
    <div className="contenedor">
      <header>
        <div className="logo">
          <img src="" width="150" alt=""/>
          LoremIpsum
        </div>
        <ul className="list-inline navegador">
          <li className="list-inline-item">Uno</li>
          <li className="list-inline-item">Dos</li>
          <li className="list-inline-item">Tres</li>
          <li className="list-inline-item">Cuatro</li>
        </ul>
      </header>

      <section className="main">
        <article>
          <h2 className="titulo">Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </article>

        <article>
          <h2 className="titulo">Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </article>
      </section>

      <aside>
        <div className="widget">
          <div className="imagen"></div>
        </div>

        <div className="widget">
          <div className="imagen"></div>
        </div>
      </aside>

      <footer>
        <ul className="list-inline links">
          <li className="list-inline-item">Uno</li>
          <li className="list-inline-item">Dos</li>
          <li className="list-inline-item">Tres</li>
          <li className="list-inline-item">Cuatro</li>         
        </ul>

        <ul className="list-inline social">
          <li className="list-inline-item">Uno</li>
          <li className="list-inline-item">Dos</li>
        </ul>
      </footer>
    </div>
  );
}

export default Flexbox;