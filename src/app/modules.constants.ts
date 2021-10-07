export const MODULES = [
  {
    slug: 'user-management-and-permissions',
    name: 'User management and permissions',
    children: [
      {
        name: 'Users',
        slug: 'users'
      },
      {
        name: 'Permissions',
        slug: 'permissions'
      },
      {
        name: 'Roles',
        slug: 'roles'
      },
    ],
    complex: false,
    admin: true,
    moderator: true,
    user: true,
    gen_man: false,
    fi_man: false,
    fi_emp: false,
    hr_emp: false,
    hr_man: false,
  },
  {
    slug: 'tracing-and-monitoring',
    name: 'Tracing and Monitoring',
    children: [
      {
        name: 'Connections',
        slug: 'connections',
        external: true,
        link: 'http://localhost:9411'
      },
      {
        name: 'Messages',
        slug: 'messages',
        external: true,
        link: 'http://localhost:8161'
      },
    ],
    complex: false,
    admin: true,
    moderator: true,
    user: true,
    gen_man: false,
    fi_man: false,
    fi_emp: false,
    hr_emp: false,
    hr_man: false,
  },
  {
    slug: 'emails',
    name: 'Emails',
    complex: false,
    admin: true,
    moderator: true,
    user: true,
    gen_man: true,
    fi_man: true,
    fi_emp: true,
    hr_emp: true,
    hr_man: true,
  },
  {
    slug: 'human-resources-dashboard',
    name: 'Human Resources Dashboard',
    children: [
      {
        name: 'Employees',
        children: [
          {name: 'Employee', slug: 'employees'},
          {name: 'Departments', slug: 'department'},
          {name: 'Designations', slug: 'designation'},
          {name: 'Grades', slug: 'grade'},
        ]
      },
      {
        name: 'Attendance',
        children: [
          {name: 'Attendance', slug: 'attendance'},
          {name: 'Attendance Types', slug: 'attendance-type'},
        ]
      },
      {
        name: 'Leaves',
        children: [
          {name: 'Leaves', slug: 'leaves'},
          // {name: 'Leave Approval', slug: 'leave-approval'},
          {name: 'Leave Types', slug: 'leave-type'},
        ]
      },
      {
        name: 'Payroll',
        children: [
          {name: 'Month Salary', slug: 'month-salary'},
        ]
      },
      {
        name: 'Recruitment',
        children: [
          {name: 'Job offers', slug: 'job-offer'},
          {name: 'Job Applicants', slug: 'job-applicant'},
        ]
      },
    ],
    complex: true,
    admin: true,
    moderator: true,
    user: true,
    gen_man: true,
    fi_man: false,
    fi_emp: false,
    hr_emp: true,
    hr_man: true,
  },
  {
    slug: 'finance',
    name: 'Finance',
    children: [
      {
        name: 'Accounts Receivable',
        children: [
          {name: 'Sales Invoice', slug: 'sales-invoice'},
          {name: 'Customer', slug: 'customer'},
        ]
      },
      {
        name: 'Account Payable',
        children: [
          {name: 'Purchase Invoice', slug: 'purchase-invoice'},
          {name: 'Supplier', slug: 'supplier'},
        ]
      },
      {
        name: 'General Ledger',
        children: [
          {name: 'Journal Entry', slug: 'journal-entry'},
        ]
      },
      {
        name: 'Payrolls',
        children: [
          {name: 'Payrolls', slug: 'payroll'},
        ]
      },
    ],
    complex: true,
    admin: true,
    moderator: true,
    user: true,
    gen_man: true,
    fi_man: true,
    fi_emp: true,
    hr_emp: false,
    hr_man: false,
  },
  {
    slug: 'reporting',
    name: 'Reporting',
    complex: false,
    admin: true,
    moderator: true,
    user: true,
    gen_man: true,
    fi_man: true,
    fi_emp: true,
    hr_emp: true,
    hr_man: true,
  },
];
