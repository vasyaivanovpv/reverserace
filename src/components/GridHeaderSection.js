import React from 'react';
import PropTypes from 'prop-types';

const GridHeaderSection = ({ title, page }) => (
  <section className="GridHeader-section">
    <div className={`GridHeader-wrapper GridHeader-wrapper${page}`}>
      <div className="GridHeader-container">
        <div className="GridHeader-titleContainer">
          <div className="GridHeader-title">{title}</div>
        </div>
      </div>
    </div>
  </section>
);

GridHeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default GridHeaderSection;
