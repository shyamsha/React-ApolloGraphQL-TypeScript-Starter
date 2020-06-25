export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddPoliciesToRoleInput = {
  roleID: Scalars['ID'];
  policies: Array<Scalars['String']>;
};

export type AddRolesToTeamInput = {
  id: Scalars['ID'];
  roles: Array<Scalars['ID']>;
};

export type AddUserToTeamInput = {
  userID: Scalars['ID'];
  teamID: Scalars['ID'];
};

export type AddUserToTenantInput = {
  userId: Scalars['ID'];
  tenantId: Scalars['ID'];
};

export type BulkUserInsertInput = {
  tenantID: Scalars['ID'];
  fileURL: Scalars['String'];
};

export type DeleteRoleInput = {
  id: Scalars['ID'];
};

export type DeleteTeamInput = {
  id: Scalars['ID'];
};

export type DisableTenantInput = {
  id: Scalars['ID'];
};

export type DisableUserFromTenantInput = {
  userId: Scalars['ID'];
  tenantId: Scalars['ID'];
};

export type DisableUserInput = {
  id: Scalars['ID'];
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other'
}

export type GetRoleInput = {
  id: Scalars['ID'];
};

export type GetRolesInput = {
  pagination: PaginationInput;
  sortBy?: Maybe<RolesSortBy>;
  sortOrder?: Maybe<SortOrder>;
};

export type GetTeamInput = {
  id: Scalars['ID'];
};

export type GetTeamsInput = {
  pagination: PaginationInput;
  q?: Maybe<Scalars['String']>;
  sortBy?: Maybe<TeamsSortBy>;
  sortOrder?: Maybe<SortOrder>;
};

export type GetTenantInput = {
  id: Scalars['ID'];
};

export type GetTenantsInput = {
  pagination: PaginationInput;
  q?: Maybe<Scalars['String']>;
  sortBy?: Maybe<TenantsSortBy>;
  sortOrder?: Maybe<SortOrder>;
};

export type GetUserInput = {
  id?: Maybe<Scalars['ID']>;
  jwtToken?: Maybe<Scalars['String']>;
};

export type GetUsersInput = {
  pagination: PaginationInput;
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  serviceAccountToken?: Maybe<Scalars['String']>;
  sortBy?: Maybe<UsersSortBy>;
  sortOrder?: Maybe<SortOrder>;
};

export type IsSuperAdminInput = {
  jwtToken?: Maybe<Scalars['String']>;
};

export type LinkPhoneNumberInput = {
  userID: Scalars['ID'];
  phoneNumber: Scalars['String'];
};

export type Login = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  otp?: Maybe<Scalars['String']>;
  facebookToken?: Maybe<Scalars['String']>;
  googleToken?: Maybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  jwtToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  bulkCreateUsers: Scalars['Boolean'];
  updateUser: User;
  removeProfileImage: Scalars['Boolean'];
  disableUser: Scalars['Boolean'];
  login: LoginResponse;
  refreshToken: Scalars['String'];
  forgotPassword: Scalars['Boolean'];
  resetPassword: Scalars['String'];
  inviteUserToTenant: Scalars['Boolean'];
  addUserToTeam: Scalars['Boolean'];
  removeUserFromTeam: Scalars['Boolean'];
  addUserToTenant: Scalars['Boolean'];
  disableUserFromTenant: Scalars['Boolean'];
  linkPhoneNumber: Scalars['Boolean'];
  verifyPhoneNumber: Scalars['Boolean'];
  verifyEmail: Scalars['Boolean'];
  createTenant: Tenant;
  updateTenant: Tenant;
  disableTenant: Scalars['Boolean'];
  createRole: Role;
  updateRole: Role;
  deleteRole: Scalars['Boolean'];
  addPoliciesToRole: Scalars['Boolean'];
  removePoliciesFromRole: Scalars['Boolean'];
  createTeam: Team;
  updateTeam: Team;
  deleteTeam: Scalars['Boolean'];
  addRolesForTeam: Scalars['Boolean'];
  removeRolesForTeam: Scalars['Boolean'];
  upload: Scalars['String'];
};


export type MutationCreateUserArgs = {
  input: NewUserInput;
};


export type MutationBulkCreateUsersArgs = {
  input: BulkUserInsertInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationDisableUserArgs = {
  input: DisableUserInput;
};


export type MutationLoginArgs = {
  input: Login;
};


export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationInviteUserToTenantArgs = {
  input: UserInviteInput;
};


export type MutationAddUserToTeamArgs = {
  input: AddUserToTeamInput;
};


export type MutationRemoveUserFromTeamArgs = {
  input: RemoveUserFromTeamInput;
};


export type MutationAddUserToTenantArgs = {
  input: AddUserToTenantInput;
};


export type MutationDisableUserFromTenantArgs = {
  input: DisableUserFromTenantInput;
};


export type MutationLinkPhoneNumberArgs = {
  input: LinkPhoneNumberInput;
};


export type MutationVerifyPhoneNumberArgs = {
  input: VerifyPhoneNumberInput;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};


export type MutationCreateTenantArgs = {
  input: NewTenantInput;
};


export type MutationUpdateTenantArgs = {
  input: UpdateTenantInput;
};


export type MutationDisableTenantArgs = {
  input: DisableTenantInput;
};


export type MutationCreateRoleArgs = {
  input: NewRoleInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};


export type MutationAddPoliciesToRoleArgs = {
  input: AddPoliciesToRoleInput;
};


export type MutationRemovePoliciesFromRoleArgs = {
  input: RemovePoliciesFromRoleInput;
};


export type MutationCreateTeamArgs = {
  input: NewTeamInput;
};


export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};


export type MutationDeleteTeamArgs = {
  input: DeleteTeamInput;
};


export type MutationAddRolesForTeamArgs = {
  input: AddRolesToTeamInput;
};


export type MutationRemoveRolesForTeamArgs = {
  input: RemoveRolesFromTeamInput;
};

export type NewRoleInput = {
  name: Scalars['String'];
  tenantID: Scalars['ID'];
};

export type NewTeamInput = {
  name: Scalars['String'];
  tenantID: Scalars['ID'];
};

export type NewTenantInput = {
  name: Scalars['String'];
  domain?: Maybe<Scalars['String']>;
};

export type NewUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  inviteToken?: Maybe<Scalars['String']>;
  googleToken?: Maybe<Scalars['String']>;
  facebookToken?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
};

export type PaginationInput = {
  page: Scalars['Int'];
  limit: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  users: UserList;
  getUser: User;
  isSuperAdmin: Scalars['Boolean'];
  verifyUserPolicy: Scalars['Boolean'];
  getTenant: Tenant;
  tenants: TenantList;
  getRole: Role;
  getTeam: Team;
};


export type QueryUsersArgs = {
  input: GetUsersInput;
};


export type QueryGetUserArgs = {
  input: GetUserInput;
};


export type QueryIsSuperAdminArgs = {
  input?: Maybe<IsSuperAdminInput>;
};


export type QueryVerifyUserPolicyArgs = {
  input: VerifyUserPolicyInput;
};


export type QueryGetTenantArgs = {
  input: GetTenantInput;
};


export type QueryTenantsArgs = {
  input: GetTenantsInput;
};


export type QueryGetRoleArgs = {
  input: GetRoleInput;
};


export type QueryGetTeamArgs = {
  input: GetTeamInput;
};

export type RefreshTokenInput = {
  jwtToken: Scalars['String'];
};

export type RemovePoliciesFromRoleInput = {
  roleID: Scalars['ID'];
  policies: Array<Scalars['String']>;
};

export type RemoveRolesFromTeamInput = {
  id: Scalars['ID'];
  roles: Array<Scalars['ID']>;
};

export type RemoveUserFromTeamInput = {
  userID: Scalars['ID'];
  teamID: Scalars['ID'];
};

export type ResetPasswordInput = {
  resetPwdToken: Scalars['String'];
  newPassword: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  tenant: Tenant;
  policies?: Maybe<Array<Scalars['String']>>;
};

export type RoleList = {
  __typename?: 'RoleList';
  totalPage: Scalars['Int'];
  currentPage: Scalars['Int'];
  totalRecords: Scalars['Int'];
  roles: Array<Role>;
};

export enum RolesSortBy {
  Id = 'Id',
  Name = 'Name'
}

export enum SortOrder {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  users: UserList;
  tenant: Tenant;
  roles: RoleList;
};


export type TeamUsersArgs = {
  input: GetUsersInput;
};


export type TeamRolesArgs = {
  input: GetRolesInput;
};

export type TeamList = {
  __typename?: 'TeamList';
  totalPage: Scalars['Int'];
  currentPage: Scalars['Int'];
  totalRecords: Scalars['Int'];
  teams: Array<Team>;
};

export enum TeamsSortBy {
  Id = 'Id',
  Name = 'Name'
}

export type Tenant = {
  __typename?: 'Tenant';
  id: Scalars['ID'];
  name: Scalars['String'];
  domain?: Maybe<Scalars['String']>;
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  teams: TeamList;
  users: UserList;
};


export type TenantTeamsArgs = {
  input: GetTeamsInput;
};


export type TenantUsersArgs = {
  input: GetUsersInput;
};

export type TenantList = {
  __typename?: 'TenantList';
  totalPage: Scalars['Int'];
  currentPage: Scalars['Int'];
  totalRecords: Scalars['Int'];
  tenants: Array<Tenant>;
};

export enum TenantsSortBy {
  Id = 'Id',
  Name = 'Name'
}

export type UpdateRoleInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  tenantID: Scalars['ID'];
};

export type UpdateTeamInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  tenantID: Scalars['ID'];
};

export type UpdateTenantInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  domain?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  inviteToken?: Maybe<Scalars['String']>;
  googleToken?: Maybe<Scalars['String']>;
  facebookToken?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isEmailVerified: Scalars['Boolean'];
  imageUrl?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  isPhoneVerified: Scalars['Boolean'];
  gender?: Maybe<Gender>;
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  tenants: TenantList;
  teams: TeamList;
};


export type UserTenantsArgs = {
  input: GetTenantsInput;
};


export type UserTeamsArgs = {
  input: UserTeamsInput;
};

export type UserInviteInput = {
  email: Scalars['String'];
  tenantID: Scalars['ID'];
  teamID?: Maybe<Scalars['ID']>;
};

export type UserList = {
  __typename?: 'UserList';
  totalPage: Scalars['Int'];
  currentPage: Scalars['Int'];
  totalRecords: Scalars['Int'];
  users: Array<User>;
};

export enum UsersSortBy {
  Id = 'Id',
  FirstName = 'FirstName',
  LastName = 'LastName',
  FullName = 'FullName'
}

export type UserTeamsInput = {
  tenantID: Scalars['ID'];
  teamsInput: GetTeamsInput;
};

export type VerifyEmailInput = {
  verifyToken: Scalars['String'];
};

export type VerifyPhoneNumberInput = {
  userID: Scalars['ID'];
  otp: Scalars['Int'];
};

export type VerifyUserPolicyInput = {
  serviceAccountToken: Scalars['String'];
  jwtToken?: Maybe<Scalars['String']>;
  userID?: Maybe<Scalars['ID']>;
  tenantID: Scalars['ID'];
  policy: Scalars['String'];
};

