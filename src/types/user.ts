/**
 * User account / profile. Omit sensitive fields (e.g. email) in public API responses when needed.
 */
export interface TableMatesUser {
  id: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
}

/**
 * User registered on a table (TableMates creates the event; participants join).
 */
export interface EventParticipant {
  user: TableMatesUser;
  /** ISO 8601 when they joined (optional in mocks). */
  joinedAt?: string;
}
