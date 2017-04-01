/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const baseSelector = state => state.wlk;

export const shouldRandomizePlaylistsSelector = createSelector(
  baseSelector,
  wlk => wlk.shouldRandomize
);
