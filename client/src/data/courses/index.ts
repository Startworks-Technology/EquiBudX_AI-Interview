import type { Course } from '../types';
import { pythonCourse } from './python';
import { javaCourse } from './java';
import { reactCourse } from './react';
import { sqlCourse } from './sql';
import { htmlCourse } from './html';

export { pythonCourse, javaCourse, reactCourse, sqlCourse, htmlCourse };

export const allCourses: Course[] = [
  pythonCourse,
  javaCourse,
  reactCourse,
  sqlCourse,
  htmlCourse,
];
