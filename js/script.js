// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates perimeter of a parallelogram.
 */
function calculatePerimeterOfParallelogram () {
  // input
  const baseOfParallelogram = parseInt(document.getElementById('base-of-parallelogram').value)
  const sideOfParallelogram = parseInt(document.getElementById('side-of-parallelogram').value)

  // process
    const perimeterOfParallelogram = (baseOfParallelogram + sideOfParallelogram) * 2

  // output
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeterOfParallelogram + ' cm'
}
