const employee = [
  {
    id: 1,
    firstName: "Arjun",
    email: "emp@gmail.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2026-06-21",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2026-06-20",
        category: "Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix API Bug",
        taskDescription: "Resolve login API issue",
        taskDate: "2026-06-22",
        category: "Backend",
      },
    ],
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build employee dashboard UI",
        taskDate: "2026-06-21",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Docs",
        taskDescription: "Prepare API documentation",
        taskDate: "2026-06-19",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Backend",
        taskDescription: "Deploy server to Render",
        taskDate: "2026-06-20",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Form Validation",
        taskDescription: "Implement validation rules",
        taskDate: "2026-06-22",
        category: "Backend",
      },
    ],
  },

  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize Database",
        taskDescription: "Improve MongoDB queries",
        taskDate: "2026-06-21",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Packages",
        taskDescription: "Upgrade dependencies",
        taskDate: "2026-06-18",
        category: "Maintenance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build REST API",
        taskDescription: "Develop employee APIs",
        taskDate: "2026-06-23",
        category: "Backend",
      },
    ],
  },

  {
    id: 4,
    firstName: "Anjali",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Login Module",
        taskDescription: "Perform login testing",
        taskDate: "2026-06-21",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Issues",
        taskDescription: "Improve responsiveness",
        taskDate: "2026-06-19",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Setup",
        taskDescription: "Integrate Razorpay",
        taskDate: "2026-06-20",
        category: "Backend",
      },
    ],
  },

  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Profile Page",
        taskDescription: "Build profile section",
        taskDate: "2026-06-21",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix reported issues",
        taskDate: "2026-06-18",
        category: "Maintenance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement JWT",
        taskDescription: "Add authentication",
        taskDate: "2026-06-22",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Cloudinary Upload",
        taskDescription: "Add image upload feature",
        taskDate: "2026-06-20",
        category: "Backend",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "Prince",
    email: "princechouhan9939@gmail.com",
    password: "PRINCE@18",
  },
];

export const setLoacalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLoacalStorage = () => {
  const employee = JSON.parse(localStorage.getItem('employee'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return {employee,admin};
};

