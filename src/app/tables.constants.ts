interface TableStruct {
  slug: string;
  title: string;
  columns: Column[];
  rowActions?: any[];
  api: string;
}

interface Column {
  name: string;
  title?: string;
  type: string;
  except: boolean;
}

export const TABLES: TableStruct[] = [
  {
    slug: 'users',
    title: 'Users',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'username',
        title: 'Username',
        type: 'text',
        except: false
      },
      {
        name: 'roles',
        title: 'Roles',
        type: 'array',
        except: false
      }
    ],
    api: 'api/auth/users'
  },
  {
    slug: 'roles',
    title: 'Roles',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'name',
        title: 'Name',
        type: 'text',
        except: false
      },
    ],
    api: 'api/auth/roles'
  },
  {
    slug: 'permissions',
    title: 'Permissions',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'name',
        title: 'Name',
        type: 'text',
        except: false
      },
      {
        name: 'url',
        title: 'Url',
        type: 'text',
        except: false
      },
    ],
    api: 'api/auth/permissions'
  },
  {
    slug: 'employees',
    title: 'Employees',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'firstName',
        title: 'First Name',
        type: 'text',
        except: false
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'text',
        except: false
      },
      {
        name: 'active',
        title: 'Active?',
        type: 'bool',
        except: false
      },
      {
        name: 'address',
        title: 'Address',
        type: 'text',
        except: false
      },
      {
        name: 'contact',
        title: 'Contact',
        type: 'text',
        except: false
      },
      {
        name: 'department',
        title: 'Department',
        type: 'text',
        except: false
      },
      {
        name: 'designation',
        title: 'Designation',
        type: 'text',
        except: false
      },
      {
        name: 'grade',
        title: 'Grade',
        type: 'text',
        except: false
      },
    ],
    api: 'hr_service/employees/all'
  },
  {
    slug: 'department',
    title: 'Departments',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'name',
        title: 'Name',
        type: 'text',
        except: false
      },
    ],
    api: 'hr_service/department/all'
  },
  {
    slug: 'designation',
    title: 'Designations',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'name',
        title: 'Name',
        type: 'text',
        except: false
      },
    ],
    api: 'hr_service/designation/all'
  },
  {
    slug: 'grade',
    title: 'Grades',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'name',
        title: 'Name',
        type: 'text',
        except: false
      },
    ],
    api: 'hr_service/grade/all'
  },
  {
    slug: 'attendance',
    title: 'Attendance',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
        except: false
      },
      {
        name: 'type',
        title: 'Type',
        type: 'text',
        except: false
      },
      {
        name: 'employee_name',
        title: 'Employee Name',
        type: 'text',
        except: false
      },
    ],
    api: 'hr_service/attendance/all'
  },
  {
    slug: 'attendance-type',
    title: 'Attendance Types',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'name',
        title: 'Name',
        type: 'text',
        except: false
      },
    ],
    api: 'hr_service/attendance-type/all'
  },
  {
    slug: 'leaves',
    title: 'Leaves',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'submit_date',
        title: 'Submit Date',
        type: 'date',
        except: false
      },
      {
        name: 'start_date',
        title: 'Start Date',
        type: 'date',
        except: false
      },
      {
        name: 'end_date',
        title: 'End Date',
        type: 'date',
        except: false
      },
      {
        name: 'employee_name',
        title: 'Employee Name',
        type: 'text',
        except: false
      },
      {
        name: 'approval',
        title: 'Approval',
        type: 'text',
        except: false
      },
      {
        name: 'type',
        title: 'Type',
        type: 'text',
        except: false
      },
    ],
    rowActions: [
      {
        name: 'View',
        link: '/entities/:entity/view/',
        actions: [
          {
            name: 'Reject',
            slug: 'reject'
          },
          {
            name: 'Accept',
            slug: 'accept'
          },
        ]
      }
    ],
    api: 'hr_service/leaves/all'
  },
  {
    slug: 'leave-type',
    title: 'Leaves Types',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'name',
        title: 'Name',
        type: 'text',
        except: false
      },
      {
        name: 'max_number',
        title: 'Max Number (days)',
        type: 'number',
        except: false
      },
    ],
    api: 'hr_service/leave-type/all'
  },
  {
    slug: 'month-salary',
    title: 'Month Salaries',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'year',
        title: 'Year',
        type: 'text',
        except: false
      },
      {
        name: 'month',
        title: 'Month',
        type: 'text',
        except: false
      },
      {
        name: 'amount',
        title: 'Amount',
        type: 'number',
        except: false
      },
      {
        name: 'employee_name',
        title: 'Employee Name',
        type: 'text',
        except: false
      },
    ],
    api: 'hr_service/month-salary/all'
  },
  {
    slug: 'job-offer',
    title: 'Job Offers',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'name',
        title: 'Name',
        type: 'text',
        except: false
      },
      {
        name: 'number',
        title: 'Number',
        type: 'int',
        except: false
      },
      {
        name: 'submit_date',
        title: 'Submit Date',
        type: 'date',
        except: false
      },
      {
        name: 'employee_name',
        title: 'Employee Name',
        type: 'text',
        except: false
      },
    ],
    api: 'hr_service/job-offer/all'
  },
  {
    slug: 'job-applicant',
    title: 'Job Applicants',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'firstName',
        title: 'First Name',
        type: 'text',
        except: false
      },
      {
        name: 'is_on_boarding',
        title: 'Is On Boarding?',
        type: 'bool',
        except: false
      },
      {
        name: 'email',
        title: 'email',
        type: 'text',
        except: false
      },
      {
        name: 'applicant_date',
        title: 'Applicant Date',
        type: 'date',
        except: false
      },
      {
        name: 'cv_path',
        title: 'CV Path',
        type: 'text',
        except: false
      },
      {
        name: 'status',
        title: 'Status',
        type: 'text',
        except: false
      },
      {
        name: 'job_offer_name',
        title: 'Job Offer Name',
        type: 'text',
        except: false
      },
    ],
    api: 'hr_service/job-applicant/all'
  },
  {
    slug: 'sales-invoice',
    title: 'Sales Invoices',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'name',
        title: 'Name',
        type: 'text',
        except: false
      },
      {
        name: 'is_paid',
        title: 'Is Paid?',
        type: 'bool',
        except: false
      },
      {
        name: 'customer',
        title: 'Customer',
        type: 'text',
        except: false
      },
      {
        name: 'payment_date',
        title: 'Payment Date',
        type: 'date',
        except: false
      },
      {
        name: 'total_price',
        title: 'Total Price',
        type: 'number',
        except: false
      },
      {
        name: 'total_quantity',
        title: 'Total Quantity',
        type: 'number',
        except: false
      },
      {
        name: 'tax',
        title: 'Tax',
        type: 'number',
        except: false
      },
    ],
    api: 'finance_service/sales-invoice/all'
  },
  {
    slug: 'customer',
    title: 'Customers',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'firstName',
        title: 'First Name',
        type: 'text',
        except: false
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'text',
        except: false
      },
      {
        name: 'email',
        title: 'Email',
        type: 'text',
        except: false
      },
      {
        name: 'address',
        title: 'Address',
        type: 'text',
        except: false
      },
      {
        name: 'contact',
        title: 'Contact',
        type: 'text',
        except: false
      },
      {
        name: 'company',
        title: 'Company',
        type: 'text',
        except: false
      },
    ],
    api: 'finance_service/customer/all'
  },
  {
    slug: 'purchase-invoice',
    title: 'Purchase Invoice',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'name',
        title: 'Name',
        type: 'text',
        except: false
      },
      {
        name: 'is_paid',
        title: 'Is Paid?',
        type: 'bool',
        except: false
      },
      {
        name: 'supplier',
        title: 'Supplier',
        type: 'text',
        except: false
      },
      {
        name: 'payment_date',
        title: 'Payment Date',
        type: 'date',
        except: false
      },
      {
        name: 'total_price',
        title: 'Total Price',
        type: 'number',
        except: false
      },
      {
        name: 'total_quantity',
        title: 'Total Quantity',
        type: 'number',
        except: false
      },
      {
        name: 'tax',
        title: 'Tax',
        type: 'number',
        except: false
      },
    ],
    api: 'finance_service/purchase-invoice/all'
  },
  {
    slug: 'supplier',
    title: 'Suppliers',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'firstName',
        title: 'First Name',
        type: 'text',
        except: false
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'text',
        except: false
      },
      {
        name: 'email',
        title: 'Email',
        type: 'text',
        except: false
      },
      {
        name: 'address',
        title: 'Address',
        type: 'text',
        except: false
      },
      {
        name: 'contact',
        title: 'Contact',
        type: 'text',
        except: false
      },
      {
        name: 'company',
        title: 'Company',
        type: 'text',
        except: false
      },
    ],
    api: 'finance_service/supplier/all'
  },
  {
    slug: 'journal-entry',
    title: 'Journal Entry',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
        except: false
      },
      {
        name: 'transaction',
        title: 'Transaction',
        type: 'text',
        except: false
      },
      {
        name: 'debit',
        title: 'Debit',
        type: 'number',
        except: false
      },
      {
        name: 'credit',
        title: 'Credit',
        type: 'number',
        except: false
      },
    ],
    api: 'finance_service/journal-entry/all'
  },
  {
    slug: 'payroll',
    title: 'payroll',
    columns: [
      {
        name: 'id',
        title: 'ID',
        type: 'int',
        except: true
      },
      {
        name: 'full_name',
        title: 'Full Name',
        type: 'text',
        except: false
      },
      {
        name: 'month',
        title: 'Month',
        type: 'text',
        except: false
      },
      {
        name: 'year',
        title: 'Year',
        type: 'text',
        except: false
      },
      {
        name: 'amount',
        title: 'Amount',
        type: 'number',
        except: false
      },
      {
        name: 'is_taken',
        title: 'Is Taken?',
        type: 'bool',
        except: false
      },

    ],
    api: 'finance_service/payroll/all'
  },
];
