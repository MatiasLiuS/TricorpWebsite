// src/config/constants.js

/**
 * Global Design Tokens 
 * (Matches your CSS variables in index.css for JS-heavy components)
 */
export const DESIGN_TOKENS = {
  COLORS: {
    brandBlue: '#1498e6',
    brandNavy: '#071a45',
    brandNavyDark: '#000817',
    slateGrave: '#64748b',
  },
  ANIMATION_DEFAULTS: {
    ROTATION_INTERVAL_MS: 8000,
  }
};

/**
 * Value Realization Curve Spline Percentages
 * Mapped directly along the SVG Bezier path
 */
export const PHILOSOPHY_CURVE_STAGES = {
  ACTION: { key: 'action', percent: '13.1%', fallbackX: 60 },
  ADAPT: { key: 'adapt', percent: '42.1%', fallbackX: 166 },
  RELATIONSHIPS: { key: 'relationships', percent: '71.2%', fallbackX: 275 },
  RESULTS: { key: 'results', percent: '97.4%', fallbackX: 377 }
};