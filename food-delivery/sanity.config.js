import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import * as base from './config.js'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: base.SANITY_PROJECT_ID,
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
