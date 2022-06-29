import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const MeterPower = () => {
  const data = [
    {
      Month: 'January',
      Power: 38,
    },
    {
      Month: 'February',
      Power: 52,
    },
    {
      Month: 'Ma',
      Power: 61,
    },
    {
      Month: 'Ap',
      Power: 145,
    },
    {
      Month: 'May',
      Power: 48,
    },
    {
      Month: 'Ju',
      Power: 38,
    },
    {
      Month: 'Ju',
      Power: 38,
    },
    {
      Month: 'Au',
      Power: 38,
    },
  ];
  const config = {
    data,

    // các tên quy ước trục
    xField: 'Month',
    yField: 'Power',

    // label cho trục x
    label: {
      position: 'bottom',
      style: {
        fontSize: 24,
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },

    // css cho trục x
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
        style: {
          fill: 'white',
          opacity: 0.6,
          fontSize: 24,
        },
      },
    },
    meta: {
      Month: {
        alias: 'Month',
      },
      Power: {
        alias: 'Power',
      },
    },
  };
  return (
    <>
      <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '25px' }}>Biểu đồ sử dụng điện</h2>
      <Column {...config} />
    </>
  );
};

export default MeterPower;
