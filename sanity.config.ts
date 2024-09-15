import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import {
  apiVersion,
  dataset,
  projectId,
  sanityStudioTitle
} from './src/app/sanity-conf/env';
import { schemaTypes } from './src/app/sanity-conf/schema';
import { structure } from './src/app/sanity-conf/structure';
import { presentationTool } from 'sanity/presentation';
import { locate } from '@sanityConf/locate';

export default defineConfig({
  title: sanityStudioTitle + ' #' + process.env.NODE_ENV?.substring(0, 3),
  basePath: '/studio',
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      resolve: {
        locations: locate
      },
      previewUrl: {
        draftMode: {
          enable: '/api/draft'
        }
      }
    })
  ]
});
