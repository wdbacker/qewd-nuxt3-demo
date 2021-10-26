import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
  ],
  publicRuntimeConfig: {
    qewdUrl: process.env.QEWD_URL || 'http://qewd-dev.local:8080'
  },
})
