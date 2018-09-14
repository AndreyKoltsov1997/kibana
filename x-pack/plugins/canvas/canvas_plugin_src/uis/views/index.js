/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { dropdownControl } from './dropdownControl';
import { image } from './image';
import { markdown } from './markdown';
import { metric } from './metric';
import { pie } from './pie';
import { plot } from './plot';
import { getCell } from './getCell';
import { repeatImage } from './repeatImage';
import { revealImage } from './revealImage';
import { render } from './render';
import { shape } from './shape';
import { table } from './table';
import { timefilterControl } from './timefilterControl';

export const viewSpecs = [
  dropdownControl,
  image,
  markdown,
  metric,
  pie,
  plot,
  getCell,
  repeatImage,
  revealImage,
  render,
  shape,
  table,
  timefilterControl,
];
