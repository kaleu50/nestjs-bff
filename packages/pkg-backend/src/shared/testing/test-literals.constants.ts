import { OrganizationRoles, Roles } from '@nestjs-bff/global/lib/constants/roles.constants';
import { TestingUtils } from '../utils/testing.utils';

export const TestOrgLiterals = {
  Oa: {
    _id: TestingUtils.generateMongoObjectIdString(),
    name: 'org A',
    slug: 'org-a',
  },
  Ob: {
    _id: TestingUtils.generateMongoObjectIdString(),
    name: 'org B',
    slug: 'ob',
  },
  Oc: {
    _id: TestingUtils.generateMongoObjectIdString(),
    name: 'org C',
    slug: 'oc',
  },
  Oz: {
    _id: TestingUtils.generateMongoObjectIdString(),
    name: 'org Z',
    slug: 'oz',
  },
};

export const TestUserLiterals = {
  Ua1: {
    _id: TestingUtils.generateMongoObjectIdString(),
    username: 'user A1',
    displayName: 'ua1',
  },
  Ua2: {
    _id: TestingUtils.generateMongoObjectIdString(),
    username: 'user A2',
    displayName: 'ua2',
  },
  Ub1: {
    _id: TestingUtils.generateMongoObjectIdString(),
    username: 'user B1',
    displayName: 'ub1',
  },
  Ub2: {
    _id: TestingUtils.generateMongoObjectIdString(),
    username: 'user B2',
    displayName: 'ub2',
  },
  Uc1: {
    _id: TestingUtils.generateMongoObjectIdString(),
    username: 'user C1',
    displayName: 'uc1',
  },
  Uz1: {
    _id: TestingUtils.generateMongoObjectIdString(),
    username: 'user Z1',
    displayName: 'uz1',
  },
  Uz2: {
    _id: TestingUtils.generateMongoObjectIdString(),
    username: 'user Z2',
    displayName: 'uz2',
  },
};

export const TestFooEntityLiterals = {
  FE_Ua1Oa: {
    _id: TestingUtils.generateMongoObjectIdString(),
    name: 'Foo Entity Ua1Oa',
    alwaysDefinedSlug: 'fe-ua1oa',
    orgId: TestOrgLiterals.Oa._id,
    userId: TestUserLiterals.Ua1._id,
  },
  FE_Ua2Oa: {
    _id: TestingUtils.generateMongoObjectIdString(),
    name: 'Foo Entity Ua2Oa',
    alwaysDefinedSlug: 'fe-ua2oa',
    orgId: TestOrgLiterals.Oa._id,
    userId: TestUserLiterals.Ua2._id,
  },
  FE_Ub1Ob: {
    _id: TestingUtils.generateMongoObjectIdString(),
    name: 'Foo Entity Ub1Ob',
    alwaysDefinedSlug: 'fe-ub1ob',
    orgId: TestOrgLiterals.Ob._id,
    userId: TestUserLiterals.Ub1._id,
  },
};

export const TestAuthorizationLiterals = {
  Az_Ua1user_OaAdmin: {
    userId: TestUserLiterals.Ua1._id,
    roles: [Roles.user],
    organizations: [{ primary: true, orgId: TestOrgLiterals.Oa._id, organizationRoles: [OrganizationRoles.admin] }],
  },
  Az_Ua2User_OaMember: {
    userId: TestUserLiterals.Ua2._id,
    roles: [Roles.user],
    organizations: [{ primary: true, orgId: TestOrgLiterals.Oa._id, organizationRoles: [OrganizationRoles.member] }],
  },
  Az_Ub1user_ObAdmin: {
    userId: TestUserLiterals.Ub1._id,
    roles: [Roles.user],
    organizations: [{ primary: true, orgId: TestOrgLiterals.Ob._id, organizationRoles: [OrganizationRoles.member] }],
  },
  Az_Ub2User_ObMember: {
    userId: TestUserLiterals.Ub2._id,
    roles: [Roles.user],
    organizations: [{ primary: true, orgId: TestOrgLiterals.Oa._id, organizationRoles: [OrganizationRoles.admin] }],
  },
  Az_Uc1GroupAdmin_OcMember_OaFacilitator: {
    userId: TestUserLiterals.Uc1._id,
    roles: [Roles.groupAdmin],
    organizations: [
      { primary: true, orgId: TestOrgLiterals.Oc._id, organizationRoles: [OrganizationRoles.member] },
      { primary: false, orgId: TestOrgLiterals.Oa._id, organizationRoles: [OrganizationRoles.facilitator] },
    ],
  },
  Az_Uz1SystemAdmin_OzMember: {
    userId: TestUserLiterals.Uz1._id,
    roles: [Roles.systemAdmin],
    organizations: [{ primary: true, orgId: TestOrgLiterals.Oa._id, organizationRoles: [OrganizationRoles.member] }],
  },
  Az_Uz2StaffAdmin_OzMember: {
    userId: TestUserLiterals.Uz2._id,
    roles: [Roles.staffAdmin],
    organizations: [{ primary: true, orgId: TestOrgLiterals.Oa._id, organizationRoles: [OrganizationRoles.member] }],
  },
};

export const TestScopedDataLiterals = {
  Sc_Ua1Oa: {
    userId: TestUserLiterals.Ua1._id,
    orgId: TestOrgLiterals.Oa._id,
  },
  Sc_Ua2Oa: {
    userId: TestUserLiterals.Ua2._id,
    orgId: TestOrgLiterals.Oa._id,
  },
  Sc_Ua2Ox: {
    userId: TestUserLiterals.Ua2._id,
  },
  Sc_UxOa: {
    orgId: TestOrgLiterals.Oa._id,
  },
  Sc_UxOx: {},
};
