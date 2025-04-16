export const config = {
  cms_manual_init: true,
  backend: {
    name: 'test-repo',
  },
  media_folder: "public/images/uploads",
  public_folder: "/images/uploads",
  locale: 'fr',
  collections: [
    {
      name: "posts",
      label: "Articles",
      folder: "src/content/post",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "Titre", name: "title", widget: "string" },
        { label: "Description", name: "description", widget: "text" },
        { label: "Date de publication", name: "publishDate", widget: "datetime", format: "YYYY-MM-DD" },
        { label: "Auteur", name: "author", widget: "string", default: "Admin" },
        { label: "Image", name: "ogImage", widget: "image", required: false },
        { label: "Tags", name: "tags", widget: "list", default: ["blog"] },
        { label: "Contenu", name: "body", widget: "markdown" },
      ]
    },
    {
      name: "notes",
      label: "Notes",
      folder: "src/content/note",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "Titre", name: "title", widget: "string" },
        { label: "Description", name: "description", widget: "text" },
        { label: "Date de publication", name: "publishDate", widget: "datetime", format: "YYYY-MM-DD" },
        { label: "Auteur", name: "author", widget: "string", default: "Admin" },
        { label: "Tags", name: "tags", widget: "list", default: ["note"] },
        { label: "Contenu", name: "body", widget: "markdown" },
      ]
    }
  ]
}; 