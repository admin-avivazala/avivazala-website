import { DocumentLocationResolver } from "sanity/presentation";
import { map } from "rxjs";

// Pass 'context' as the second argument
export const locate: DocumentLocationResolver = (params, context) => {
  console.log('params:', params);
  console.log('context:', context);
  // Set up locations for post documents
  if (params.type === "post") {
    // Subscribe to the latest slug and title
    const doc$ = context.documentStore.listenQuery(
      `*[_type == "post"]`,
      params,
      { perspective: "previewDrafts" } // returns a draft article if it exists
    );
    // Return a streaming list of locations
    return doc$.pipe(
      map((doc) => {
        // If the document doesn't exist or have a slug, return null
        if (!doc || !doc.slug?.current) {
          return null;
        }
        return {
          locations: [
            {
              title: doc.title || "Untitled",
              href: `/hu/blog/${doc.slug.current}`,
            },
            {
              title: "Posts",
              href: "/hu/blog/",
            },
          ],
        };
      })
    );
  }
  return null;
};