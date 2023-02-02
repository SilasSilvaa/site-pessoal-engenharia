import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'


export const website = prismic.getRepositoryName(sm.apiEndpoint)

const routes = [
    {
        type: 'home',
        path: '/'
    },
    {
        type: 'projects',
        path: '/projetos'
    },
    {
        type: 'sobre',
        path: '/sobre'
    }
]

interface PreviewData {
    previewData: any
}

export const createClient = (config: { previewData?: any, req?: any} = {}) => {

    const client = prismic.createClient(sm.apiEndpoint, {
        routes,
        ...config
    })

    prismicNext.enableAutoPreviews({
        client,
        previewData: config.previewData,
        req: config.req
    })

    return client
}