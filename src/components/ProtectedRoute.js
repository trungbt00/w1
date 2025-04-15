import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredPermissions = [] }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const userPermissions = useSelector(state => state.auth.userPermissions);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    const hasPermission = requiredPermissions.every(p => userPermissions.includes(p));

    if (!hasPermission) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default ProtectedRoute;
