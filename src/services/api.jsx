import { mockUsers, mockRoles, mockPermissions } from "./mockData";

export const fetchUsers = () => Promise.resolve(mockUsers);
export const fetchRoles = () => Promise.resolve(mockRoles);
export const fetchPermissions = () => Promise.resolve(mockPermissions);
