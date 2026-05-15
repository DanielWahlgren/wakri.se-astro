import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/index'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])
// Define the singleton document types
const singletonTypes = new Set(["landingPage","error404","calendar"])

export default defineConfig({
  name: 'default',
  title: 'BSH',

  projectId: 'aax3sace',
  dataset: 'production',

 plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Innehåll")
          .items([
            S.listItem()
              .title("Hem")
              .id("landingPage")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("landingPage")
                  .documentId("landingPage")
              ),
            S.listItem()
              .title("Kalendarium")
              .id("calendar")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("calendar")
                  .documentId("calendar")
              ),
            S.documentTypeListItem("calendarItems").title("Kalenderhändelser"),
            S.listItem()
              .title("404")
              .id("error404")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("error404")
                  .documentId("error404")
              ),


            /*
            // Our singleton type has a list item with a custom child
            // Regular document types
            S.documentTypeListItem("error404").title("Kalendarium"),
            //  S.documentTypeListItem("author").title("Authors"),

            */
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
