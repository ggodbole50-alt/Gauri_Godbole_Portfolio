const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'administration',
      label: 'Administration Guide',
    },
    {
      type: 'category',
      label: 'Tutorial Basics',
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/markdown-features',
        'tutorial-basics/congratulations',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial Extras',
      items: [
        'tutorial-extras/getting-started',
        'tutorial-extras/installation',
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
        'tutorial-extras/troubleshooting',
        'tutorial-extras/user-guide',
        'tutorial-extras/submit',
      ],
    },
  ],
};

export default sidebars;
