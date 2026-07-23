import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-for-mvp';

// Extend the Express Request type safely without needing global d.ts overrides
export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
    collegeId?: string;
  };
}

/**
 * Middleware to verify a valid JWT exists in the Authorization header.
 * If valid, it attaches the decoded payload to req.user and proceeds.
 * If invalid or missing, it blocks the request.
 */
export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  // Expecting format: "Bearer <token>"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access Denied: No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; role: string; collegeId?: string };
    req.user = decoded; // Attach user payload to request
    next(); // Proceed to the actual route handler
  } catch (error) {
    return res.status(403).json({ error: 'Access Denied: Invalid or expired token.' });
  }
};

/**
 * Middleware factory to restrict a route to specific roles.
 * Must be used AFTER authenticateToken.
 * 
 * @example
 * router.get('/admin/stats', authenticateToken, requireRole(['admin']), (req, res) => { ... })
 */
export const requireRole = (allowedRoles: ('student' | 'college' | 'admin')[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Access Denied: User not authenticated.' });
    }

    if (!allowedRoles.includes(req.user.role as any)) {
      return res.status(403).json({ 
        error: `Access Denied: This endpoint requires one of the following roles: ${allowedRoles.join(', ')}` 
      });
    }

    next();
  };
};
