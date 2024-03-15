// src/components/Dashboard/DashboardMetrics.js
import React from 'react';
import styled from 'styled-components';

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;

const Metric = styled.div`
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const DashboardMetrics = () => {
  return (
    <MetricsContainer>
      <Metric>
        <h2>Total Products</h2>
        <p>100</p>
      </Metric>
      <Metric>
        <h2>Total Orders</h2>
        <p>50</p>
      </Metric>
    </MetricsContainer>
  );
};

export default DashboardMetrics;
