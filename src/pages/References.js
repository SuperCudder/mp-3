import React from 'react';
import Layout from '../components/Layout';

const References = () => {
  return (
    <Layout title="Jonah Kastelic" subtitle="References">
      <main>
        <h3>Professional</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tyler Wilcox</td>
              <td>American Airlines TPA Manager</td>
              <td>+1 (207) 245-5045</td>
            </tr>
            <tr>
              <td>Artemios Kayas</td>
              <td>SPARK! Innovator (Technical)</td>
              <td><a href="mailto:artemioskayas@gmail.com">artemioskayas@gmail.com</a></td>
            </tr>
          </tbody>
        </table>
        <h3>Personal</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Occupation</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Samuel L. Jackson</td>
              <td>Singer</td>
              <td>+1 (323) 822-4852</td>
            </tr>
          </tbody>
        </table>
      </main>
    </Layout>
  );
};

export default References;