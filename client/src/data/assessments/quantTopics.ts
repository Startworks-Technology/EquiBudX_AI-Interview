export interface QuantTopic {
  id: string;
  title: string;
  category: 'Arithmetic' | 'Algebra & Geometry' | 'Data Interpretation' | 'Modern Math';
  questionsCount: number;
  marks: number;
  durationMinutes: number;
  description: string;
}

export const CRT_QUANT_TOPICS: QuantTopic[] = [
  // Arithmetic
  { id: 'number-system', title: 'Number System', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Divisibility, prime numbers, remainders, and unit digits.' },
  { id: 'simplification', title: 'Simplification', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'BODMAS rules, fractions, decimals, and surds.' },
  { id: 'hcf-lcm', title: 'HCF And LCM', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Highest common factor, least common multiple & applications.' },
  { id: 'percentage', title: 'Percentage', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Percentage change, successive percentages, and applications.' },
  { id: 'profit-loss', title: 'Profit And Loss', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Cost price, selling price, profit percentage, and markup.' },
  { id: 'discount', title: 'Discount', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Trade discount, cash discount, and marked price calculations.' },
  { id: 'simple-interest', title: 'Simple Interest', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Principal, rate, time, and simple interest formulas.' },
  { id: 'compound-interest', title: 'Compound Interest', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Compounding frequency, effective interest rate, and growth.' },
  { id: 'ratio-proportions', title: 'Ratio And Proportions', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Direct/indirect variation, mean proportion, and ratios.' },
  { id: 'partnership', title: 'Partnership', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Profit sharing ratios based on investment capital & duration.' },
  { id: 'average', title: 'Average', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Mean, weighted average, and change in average.' },
  { id: 'problems-on-ages', title: 'Problems On Ages', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Age ratio equations and present/past/future age calculations.' },
  { id: 'alligation-mixture', title: 'Alligation And Mixture', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Rule of alligation, liquid mixtures, and replacement problems.' },

  // Speed, Time & Work
  { id: 'time-work', title: 'Time And Work', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Efficiency, work equivalence, and days required.' },
  { id: 'time-work-wages', title: 'Time-Work-Wages', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Wage distribution proportional to work done.' },
  { id: 'pipe-cistern', title: 'Pipe And Cistern', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Inlet and outlet pipes filling/emptying tank capacities.' },
  { id: 'chain-rule', title: 'Chain Rule', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Direct and indirect proportion variations across variables.' },
  { id: 'time-distance', title: 'Time And Distance', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Speed formulas, relative speed, and average speed.' },
  { id: 'problems-on-train', title: 'Problems On Train', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Train crossing platforms, poles, and moving trains.' },
  { id: 'boats-streams', title: 'Boats And Streams', category: 'Arithmetic', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Upstream speed, downstream speed, and still water velocity.' },

  // Modern Math & Reasoning Numbers
  { id: 'permutations-combinations', title: 'Permutations And Combinations', category: 'Modern Math', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Factorials, arrangements, and selection combinations.' },
  { id: 'probability', title: 'Probability', category: 'Modern Math', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Sample space, independent events, cards, dice, and coins.' },
  { id: 'clock', title: 'Clock', category: 'Modern Math', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Angle between hands, coincidences, and clock gains/losses.' },
  { id: 'calendar', title: 'Calendar', category: 'Modern Math', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Odd days, leap years, and day determination formulas.' },
  { id: 'odd-man-out', title: 'Odd Man Out Series', category: 'Modern Math', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Pattern recognition and identifying incorrect elements.' },
  { id: 'number-series', title: 'Number Series', category: 'Modern Math', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Missing numbers, arithmetic/geometric series patterns.' },
  { id: 'square-cube-roots', title: 'Square And Cube Roots', category: 'Modern Math', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Fast mental math estimation for squares and cubes.' },
  { id: 'bankers-discount', title: 'Bankers Discount', category: 'Modern Math', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'True discount, banker discount, and face value formulas.' },

  // Geometry & Mensuration
  { id: 'areas', title: 'Areas', category: 'Algebra & Geometry', questionsCount: 30, marks: 30, durationMinutes: 40, description: '2D geometric shapes: Triangles, circles, rectangles, polygons.' },
  { id: 'mensuration', title: 'Mensuration', category: 'Algebra & Geometry', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Perimeter, area, and 2D figure dimensions.' },
  { id: 'volume-surface-area', title: 'Volume And Surface Area', category: 'Algebra & Geometry', questionsCount: 30, marks: 30, durationMinutes: 40, description: '3D figures: Cubes, spheres, cylinders, cones, and prisms.' },
  { id: 'geometry', title: 'Geometry', category: 'Algebra & Geometry', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Lines, angles, triangles, circles, and coordinate geometry.' },
  { id: 'trigonometry', title: 'Trigonometry', category: 'Algebra & Geometry', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Trigonometric ratios, identities, heights, and distances.' },
  { id: 'progression', title: 'Progression', category: 'Algebra & Geometry', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Arithmetic Progression (AP) & Geometric Progression (GP).' },
  { id: 'equations-inequations', title: 'Equations And Inequations', category: 'Algebra & Geometry', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Linear, quadratic equations, and algebraic inequalities.' },
  { id: 'approximations', title: 'Approximations', category: 'Algebra & Geometry', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Quick calculation rounding and approximate estimations.' },

  // Data Interpretation & Sufficiency
  { id: 'data-sufficiency', title: 'Data Sufficiency', category: 'Data Interpretation', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Evaluating if given statements are sufficient to answer.' },
  { id: 'table-charts', title: 'Table Charts', category: 'Data Interpretation', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Analyzing tabular data for percentage and ratio questions.' },
  { id: 'pie-charts', title: 'Pie Charts', category: 'Data Interpretation', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Degree to percentage conversions and sector analysis.' },
  { id: 'bar-charts', title: 'Bar Charts', category: 'Data Interpretation', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Vertical & horizontal bar graphs comparison.' },
  { id: 'line-charts', title: 'Line Charts', category: 'Data Interpretation', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Trend lines, growth rates, and continuous data graphs.' }
];
