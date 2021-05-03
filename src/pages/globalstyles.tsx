import React from 'react';
import Layout from '../components/layouts/Layout';

export default function GlobalStylesPage() {
  return (
    <Layout>
      <section className="">
        <div className="container">
          <h1 id="headingone">Heading One</h1>
          <h2>Heading Two</h2>
          <h3>Heading Three</h3>
          <h4>Heading Four</h4>
          <h5>Heading Five</h5>
          <h6>Heading Six</h6>
          <hr />
          <p>Paragraph</p>
          <blockquote>This is a blockqoute</blockquote>
          <hr />
          <ol>
            <span>Ordered list</span>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
          </ol>
          <ul>
            <span>Unordered list</span>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
          </ul>
          <hr />
          <a href="/">Anchor Tag</a>; that will take you to homepage
          <hr />
          <p>Sample Simple Table</p>
          <table className="table border-separate border-white align-middle text-left rounded">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
            </tr>
          </table>
          <p>Icons</p>
          <div className="w-12 h-12 text-2xl leading-7 bg-black">
            <i className="socicon-twitter"></i>
          </div>
        </div>
      </section>
    </Layout>
  );
}
